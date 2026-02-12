const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL;

export async function getArticles() {
    const res = await fetch(`${API_URL}/api/articles`);

    if (!res.ok) {
        throw new Error("Failed to fetch articles");
    }

    const data = await res.json();
    return data.data;
}