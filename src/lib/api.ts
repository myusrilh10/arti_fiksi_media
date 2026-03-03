import { Article, Event, Video } from "./data";

const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337';

/**
 * Helper to get the full Strapi URL
 */
export function getStrapiURL(path = "") {
    return `${API_URL}${path}`;
}

/**
 * Helper to get the image URL. Returns a relative /uploads/... path so it
 * flows through the Next.js rewrite proxy (avoids private-IP SSRF errors).
 * For production, if the URL is already absolute (e.g. a CDN), it is returned as-is.
 */
export function getStrapiMedia(url: string | null | undefined): string {
    if (!url) return '/images/tech.png'; // fallback image
    // Already absolute (CDN / external host) — return as-is
    if (url.startsWith("http") || url.startsWith("//")) {
        // Strip the Strapi origin so the proxy rewrite can handle it locally
        const strapiOrigin = API_URL;
        if (url.startsWith(strapiOrigin)) {
            return url.slice(strapiOrigin.length); // e.g. /uploads/foo.jpeg
        }
        return url;
    }
    // Relative path from Strapi (e.g. /uploads/foo.jpeg) — keep as-is, proxy handles it
    return url;
}

/**
 * Generic Fetcher for Strapi API.
 * Returns the parsed JSON object (already awaited).
 */
async function fetchAPI(path: string, options: RequestInit = {}) {
    const mergedOptions: RequestInit = {
        headers: {
            "Content-Type": "application/json",
            // Uncomment and add token if your Strapi API requires authentication:
            // "Authorization": `Bearer ${process.env.STRAPI_API_TOKEN}`,
        },
        next: { revalidate: 60 }, // ISR: revalidate every 60 seconds
        ...options,
    };

    const requestUrl = getStrapiURL(`/api${path}`);
    const response = await fetch(requestUrl, mergedOptions);

    if (!response.ok) {
        console.error(`Strapi fetch error [${response.status}]: ${response.statusText} — ${requestUrl}`);
        throw new Error(`Failed to fetch from Strapi: ${response.statusText}`);
    }

    return response.json();
}

/**
 * Strapi v5 returns flat objects (no .attributes wrapper).
 * This normalizes a raw Strapi article item into our app's Article shape.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function normalizeArticle(item: any): Article {
    return {
        id: String(item.id),
        title: item.title ?? '',
        slug: item.slug ?? '',
        excerpt: item.excerpt ?? '',
        content: item.content ?? null,
        author: item.Author ?? item.author ?? 'Unknown',
        date: item.date
            ? new Date(item.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
            : new Date(item.publishedAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
        imageUrl: getStrapiMedia(item.cover_image?.url ?? item.coverImage?.url ?? item.image?.url ?? null),
        mainCategory: item.category?.Name ?? item.category?.name ?? 'Uncategorized',
        category: item.category?.Name ?? item.category?.name ?? 'Uncategorized',
        isTrending: item.is_trending ?? item.isTrending ?? false,
        readingTime: item.reading_time ?? item.readingTime ?? null,
    };
}

/**
 * Normalizes a raw Strapi event item into our app's Event shape.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function normalizeEvent(item: any): Event {
    return {
        id: String(item.id),
        title: item.title ?? '',
        date: item.date ?? '',
        location: item.location ?? '',
        category: item.category?.Name ?? item.category?.name ?? 'General',
        imageUrl: getStrapiMedia(item.image?.url ?? item.cover_image?.url ?? item.coverImage?.url ?? null),
        slug: item.slug ?? '',
        description: item.description ?? '',
    };
}

/**
 * Normalizes a raw Strapi video item into our app's Video shape.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function normalizeVideo(item: any): Video {
    return {
        id: String(item.id),
        title: item.title ?? '',
        duration: item.duration ?? '',
        date: item.date
            ? new Date(item.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
            : new Date(item.publishedAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
        category: item.category?.Name ?? item.category?.name ?? 'General',
        imageUrl: getStrapiMedia(item.thumbnail?.url ?? item.image?.url ?? item.cover_image?.url ?? null),
        videoUrl: item.video_url ?? item.videoUrl ?? '',
        slug: item.slug ?? '',
    };
}

/**
 * Fetch all Articles from Strapi
 */
export async function getArticles(): Promise<Article[]> {
    try {
        const data = await fetchAPI("/articles?populate=*&sort=publishedAt:desc");
        return (Array.isArray(data.data) ? data.data : []).map(normalizeArticle);
    } catch (e) {
        console.error("Error fetching articles:", e);
        return [];
    }
}

/**
 * Fetch a single Article by slug
 */
export async function getArticleBySlug(slug: string): Promise<Article | null> {
    try {
        const data = await fetchAPI(`/articles?filters[slug][$eq]=${slug}&populate=*`);
        const item = data.data?.[0];
        if (!item) return null;
        return normalizeArticle(item);
    } catch (e) {
        console.error(`Error fetching article [${slug}]:`, e);
        return null;
    }
}

/**
 * Fetch Events from Strapi
 */
export async function getEvents(): Promise<Event[]> {
    try {
        const data = await fetchAPI("/events?populate=*&sort=publishedAt:desc");
        return (Array.isArray(data.data) ? data.data : []).map(normalizeEvent);
    } catch (e) {
        console.error("Error fetching events:", e);
        return [];
    }
}

/**
 * Fetch a single Event by slug
 */
export async function getEventBySlug(slug: string): Promise<Event | null> {
    try {
        const data = await fetchAPI(`/events?filters[slug][$eq]=${slug}&populate=*`);
        const item = data.data?.[0];
        if (!item) return null;
        return normalizeEvent(item);
    } catch (e) {
        console.error(`Error fetching event [${slug}]:`, e);
        return null;
    }
}

/**
 * Fetch Videos from Strapi
 */
export async function getVideos(): Promise<Video[]> {
    try {
        const data = await fetchAPI("/videos?populate=*&sort=publishedAt:desc");
        return (Array.isArray(data.data) ? data.data : []).map(normalizeVideo);
    } catch (e) {
        console.error("Error fetching videos:", e);
        return [];
    }
}

/**
 * Fetch a single Video by slug
 */
export async function getVideoBySlug(slug: string): Promise<Video | null> {
    try {
        const data = await fetchAPI(`/videos?filters[slug][$eq]=${slug}&populate=*`);
        const item = data.data?.[0];
        if (!item) return null;
        return normalizeVideo(item);
    } catch (e) {
        console.error(`Error fetching video [${slug}]:`, e);
        return null;
    }
}