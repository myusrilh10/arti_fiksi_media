import { Article, Event, Video, Advertisement } from "./data";

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
        date: item.publish_date
            ? new Date(item.publish_date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
            : item.publishedAt
                ? new Date(item.publishedAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
                : new Date(item.createdAt ?? new Date()).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
        imageUrl: getStrapiMedia(item.cover_image?.url ?? item.coverImage?.url ?? item.image?.url ?? item.cover_image?.formats?.large?.url ?? item.image?.formats?.large?.url ?? null),
        imageCaption: item.image_caption ?? item.imageCaption ?? null,
        mainCategory: item.category?.category ?? item.Category?.category ?? item.category?.Name ?? item.category?.name ?? item.Category?.Name ?? item.Category?.name ?? 'Uncategorized',
        category: item.category?.category ?? item.Category?.category ?? item.category?.Name ?? item.category?.name ?? item.Category?.Name ?? item.Category?.name ?? 'Uncategorized',
        isTrending: item.is_trending ?? item.isTrending ?? false,
        isFeatured: item.is_featured ?? item.isFeatured ?? false,
        views: item.views ?? 0,
        readingTime: item.reading_time ?? item.readingTime ?? null,
    };
}

/**
 * Normalizes a raw Strapi event item into our app's Event shape.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function normalizeEvent(item: any): Event {
    // Handle Event Dates
    let formattedDate = "";
    if (item.start_date && item.end_date) {
        const start = new Date(item.start_date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
        const end = new Date(item.end_date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
        formattedDate = `${start} - ${end}`;
    } else if (item.start_date) {
        formattedDate = new Date(item.start_date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
    } else if (item.EventDate || item.eventDate || item.Date || item.date) {
        // Fallback to older fields just in case
        const rawDate = item.EventDate || item.eventDate || item.Date || item.date;
        formattedDate = new Date(rawDate).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
    }

    return {
        id: String(item.id),
        title: item.title ?? '',
        date: formattedDate,
        location: item.location ?? item.Location ?? item.eventLocation ?? '',
        category: item.category?.category ?? item.Category?.category ?? item.category?.Name ?? item.category?.name ?? item.Category?.Name ?? item.Category?.name ?? 'General',
        imageUrl: getStrapiMedia(item.image?.url ?? item.cover_image?.url ?? item.coverImage?.url ?? item.image?.formats?.large?.url ?? null),
        slug: item.slug ?? '',
        description: item.description ?? '',
        registrationLink: item.registration_link ?? item.registrationLink ?? null,
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
        category: item.category?.category ?? item.Category?.category ?? item.category?.Name ?? item.category?.name ?? item.Category?.Name ?? item.Category?.name ?? 'General',
        imageUrl: getStrapiMedia(item.thumbnail?.url ?? item.image?.url ?? item.cover_image?.url ?? item.thumbnail?.formats?.large?.url ?? null),
        videoUrl: item.video_url ?? item.videoUrl ?? '',
        slug: item.slug ?? '',
        description: item.description ?? '',
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
 * Fetch Paginated Articles from Strapi
 */
export async function getPaginatedArticles(page = 1, pageSize = 12): Promise<{ articles: Article[], meta: any }> {
    try {
        const data = await fetchAPI(`/articles?populate=*&sort=publishedAt:desc&pagination[page]=${page}&pagination[pageSize]=${pageSize}`);
        return {
            articles: (Array.isArray(data.data) ? data.data : []).map(normalizeArticle),
            meta: data.meta?.pagination || { page: 1, pageSize, pageCount: 1, total: 0 }
        };
    } catch (e) {
        console.error("Error fetching paginated articles:", e);
        return { articles: [], meta: { page, pageSize, pageCount: 1, total: 0 } };
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

/**
 * Fetch Paginated Videos from Strapi
 */
export async function getPaginatedVideos(page = 1, pageSize = 12): Promise<{ videos: Video[], meta: any }> {
    try {
        const data = await fetchAPI(`/videos?populate=*&sort=publishedAt:desc&pagination[page]=${page}&pagination[pageSize]=${pageSize}`);
        return {
            videos: (Array.isArray(data.data) ? data.data : []).map(normalizeVideo),
            meta: data.meta?.pagination || { page: 1, pageSize, pageCount: 1, total: 0 }
        };
    } catch (e) {
        console.error("Error fetching paginated videos:", e);
        return { videos: [], meta: { page, pageSize, pageCount: 1, total: 0 } };
    }
}

/**
 * Normalizes a raw Strapi advertisement item into our app's Advertisement shape.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function normalizeAdvertisement(item: any): Advertisement {
    return {
        id: String(item.id),
        imageUrl: getStrapiMedia(item.image?.url ?? item.imageUrl ?? item.image?.formats?.large?.url ?? null),
        linkUrl: item.linkUrl ?? item.link_url ?? '#',
        position: item.position ?? 'middle'
    };
}

/**
 * Fetch Advertisements from Strapi
 */
export async function getAdvertisements(): Promise<Advertisement[]> {
    try {
        const data = await fetchAPI("/advertisements?populate=*");
        return (Array.isArray(data.data) ? data.data : []).map(normalizeAdvertisement);
    } catch (e) {
        console.error("Error fetching advertisements:", e);
        return [];
    }
}