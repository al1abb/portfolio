import { NextResponse } from "next/server";

// Feed
import { Feed } from "feed";

// Lib
import { WEBSITE_URL } from "@/lib/constants";
import { getPostsMeta } from "@/lib/posts";

export async function GET() {
    const allPosts = await getPostsMeta();

    const feedOptions = {
        title: "Blog Posts | RSS Feed",
        description: "Blog posts of Ali Abbasov",
        id: WEBSITE_URL!,
        link: WEBSITE_URL,
        language: "en-us",
        favicon: `${WEBSITE_URL}/favicon.ico`,
        generator: "Feed for Node.js",
        copyright: `All rights reserved ${new Date().getFullYear()}, Ali Abbasov`,
        author: {
            name: "Ali Abbasov",
            link: `${WEBSITE_URL}/#contact`,
        },
    };

    const feed = new Feed(feedOptions);

    allPosts?.forEach((post) => {
        const categories = post.tags.map((tag) => ({ name: tag, slug: tag }));

        feed.addItem({
            title: post.title,
            id: `${WEBSITE_URL}/blog/${post.slug}`,
            link: `${WEBSITE_URL}/blog/${post.slug}`,
            description: post.description,
            date: new Date(post.date),
            category: categories,
        });
    });

    return new NextResponse(feed.rss2(), {
        status: 200,
        headers: {
            "Content-Type": "application/xml; charset=utf-8",
        },
    });
}
