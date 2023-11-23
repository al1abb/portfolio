import { MetadataRoute } from "next";

// Posts
import { getSortedPostsData } from "@/lib/posts";

// Constants
import { WEBSITE_URL } from "@/lib/constants";

// Types
import { PostWithoutContent } from "@/types";

type ChangeFrequencyType =
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const changeFrequency: ChangeFrequencyType = "daily";
    const allPostsData: PostWithoutContent[] = await getSortedPostsData();

    const posts = allPostsData.map(({ slug, date }) => ({
        url: `${WEBSITE_URL}/blog/${slug}`,
        lastModified: date,
        changeFrequency,
    }));

    const routes = ["", "/blog"].map((route) => ({
        url: `${WEBSITE_URL}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency,
    }));

    return [...routes, ...posts];
}
