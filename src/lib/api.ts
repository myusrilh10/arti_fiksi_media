const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337';

/**
 * Helper to get the full Strapi URL
 */
export function getStrapiURL(path = "") {
    return `${API_URL}${path}`;
}

/**
 * Helper to get the full image URL from Strapi
 */
export function getStrapiMedia(url: string | null) {
    if (url == null) return null;
    if (url.startsWith("http") || url.startsWith("//")) return url;
    return `${API_URL}${url}`;
}

/**
 * Generic Fetcher for Strapi API
 */
async function fetchAPI(path: string, options = {}) {
    try {
        const mergedOptions = {
            headers: {
                "Content-Type": "application/json",
            },
            ...options,
        };

        const requestUrl = getStrapiURL(`/api${path}`);
        const response = await fetch(requestUrl, mergedOptions);

        if (!response.ok) {
            console.error(response.statusText);
            throw new Error(`An error occurred please try again`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw new Error(`Failed to fetch API`);
    }
}

/**
 * Fetch Articles from Strapi
 */
export async function getArticles() {
    const data = await fetchAPI("/articles?populate=*");
    return data.data;
}

/**
 * Fetch a single Article by slug
 */
export async function getArticleBySlug(slug: string) {
    const data = await fetchAPI(`/articles?filters[slug][$eq]=${slug}&populate=*`);
    return data.data?.[0];
}

/**
 * Fetch Events from Strapi
 */
export async function getEvents() {
    const data = await fetchAPI("/events?populate=*");
    return data.data;
}

/**
 * Fetch Videos from Strapi
 */
export async function getVideos() {
    const data = await fetchAPI("/videos?populate=*");
    return data.data;
}