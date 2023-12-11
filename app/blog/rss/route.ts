import { NextResponse } from "next/server";

// Feed
import { Feed } from "feed";

// Lib
import { RSS_FEED_OPTIONS, WEBSITE_URL } from "@/lib/constants";
import { getPostsMeta } from "@/lib/posts";

export async function GET() {
    const allPosts = await getPostsMeta();

    const feed = new Feed(RSS_FEED_OPTIONS);

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
            "Content-Type": "application/rss+xml; charset=utf-8",
        },
    });
}
