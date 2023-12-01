import Link from "next/link";
import { notFound } from "next/navigation";

// Highlight JS styles
import "highlight.js/styles/github-dark.css";

// NextUI
import { Chip } from "@nextui-org/react";

// Components
import { ProgressBar } from "@/components";

// Lib
import { getPostsMeta, getPostByName } from "@/lib/posts";
import getFormattedDate from "@/lib/utils";

export const revalidate = 10;

type Props = {
    params: {
        slug: string;
    };
};

export async function generateStaticParams() {
    const posts = await getPostsMeta();

    if (!posts) {
        return [];
    }

    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: Props) {
    const post = await getPostByName(`${params.slug}.mdx`);

    if (!post) {
        return {
            title: "Post Not Found",
        };
    }

    return {
        title: post.meta.title,
    };
}

export default async function BlogPostPage({ params }: Props) {
    const post = await getPostByName(`${params.slug}.mdx`);

    if (!post) notFound();

    const { meta, content } = post;

    const pubDate = getFormattedDate(meta.date);

    const tags = meta.tags.map((tag, i) => (
        <Chip as={Link} key={i} href={`/blog/tags/${tag}`} className="chip">
            {tag}
        </Chip>
    ));

    return (
        <div className="container mx-auto px-5 prose prose-xl prose-slate dark:prose-invert">
            <ProgressBar />

            <h2 className="font-extrabold text-4xl mb-1">{meta.title}</h2>

            <p className="text-gray-500 dark:text-gray-400 font-regular text-base mb-5">
                Published on {pubDate}   |   {meta.readingTime}
            </p>

            <div className="flex flex-row gap-4">{tags}</div>

            <article>{content}</article>

            <section>
                <h3>Related:</h3>
                <div className="flex flex-row gap-4">{tags}</div>
            </section>

            <div className="mt-8">
                <Link href="/blog">← Back to blog page</Link>
            </div>
        </div>
    );
}
