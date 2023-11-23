import Link from "next/link";
import { notFound } from "next/navigation";

// Highlight JS styles
import "highlight.js/styles/github-dark.css";

// Lib
import { getPostsMeta, getPostByName } from "@/lib/posts";

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

    const tags = meta.tags.map((tag, i) => (
        <Link key={i} href={`/blog/tags/${tag}`} className="capitalize">
            {tag}
        </Link>
    ));

    return (
        <div className="container mx-auto prose prose-xl prose-slate dark:prose-invert">
            <h2 className="font-extrabold text-4xl mb-1">{meta.title}</h2>

            <p className="text-gray-500 font-medium mb-5">{meta.date}</p>

            <article>{content}</article>

            <section>
                <h3>Related:</h3>
                <div className="flex flex-row gap-4">{tags}</div>
            </section>

            <Link href="/blog" className="mt-5">
                ← Back to blog page
            </Link>
        </div>
    );
}
