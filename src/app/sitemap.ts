import { MetadataRoute } from 'next';
import { getArticles, getEvents, getVideos } from '@/lib/api';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

    // Fetch all content concurrently
    const [articles, events, videos] = await Promise.all([
        getArticles(),
        getEvents(),
        getVideos(),
    ]);

    const articleEntries: MetadataRoute.Sitemap = articles.map((item) => ({
        url: `${baseUrl}/articles/${item.slug}`,
        lastModified: new Date(item.date).toISOString(),
        changeFrequency: 'weekly',
        priority: 0.8,
    }));

    const eventEntries: MetadataRoute.Sitemap = events.map((item) => ({
        url: `${baseUrl}/events/${item.slug}`,
        lastModified: new Date().toISOString(), // Fallback since event date is a formatted string
        changeFrequency: 'monthly',
        priority: 0.7,
    }));

    const videoEntries: MetadataRoute.Sitemap = videos.map((item) => ({
        url: `${baseUrl}/videos/${item.slug}`,
        lastModified: new Date(item.date).toISOString(),
        changeFrequency: 'monthly',
        priority: 0.7,
    }));

    const routes: MetadataRoute.Sitemap = [
        '',
        '/articles',
        '/events',
        '/videos',
        '/about',
        '/contact',
        '/profile/visi-misi',
        '/profile/sejarah',
        '/profile/redaksi',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'daily',
        priority: route === '' ? 1 : 0.9,
    }));

    return [...routes, ...articleEntries, ...eventEntries, ...videoEntries];
}
