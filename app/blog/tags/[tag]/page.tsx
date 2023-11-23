import Link from "next/link";

// Components
import { PostListItem, SectionHeading } from "@/components";

// Posts
import { getPostsMeta } from "@/lib/posts";

export const revalidate = 10;

type Props = {
    params: {
        tag: string;
    };
};

export async function generateStaticParams() {
    const posts = await getPostsMeta();

    if (!posts) return [];

    const tags = new Set(posts.map((post) => post.tags).flat());

    return Array.from(tags).map((tag) => ({ tag }));
}

export function generateMetadata({ params: { tag } }: Props) {
    return {
        title: `Posts about ${tag}`,
    };
}

export default async function TagPage({ params: { tag } }: Props) {
    const posts = await getPostsMeta();
    if (!posts) return <p className="mt-10 text-center">Sorry, no posts</p>;

    const tagPosts = posts.filter((post) => post.tags.includes(tag));

    if (!tagPosts.length) {
        return (
            <div className="text-center">
                <div className="mt-10">Sorry, no posts for that keyword</div>
                <Link href="/blog">Back to blog</Link>
            </div>
        );
    }

    return (
        <section className="flex flex-col items-center py-5 px-5">
            <SectionHeading>Results for #{tag}</SectionHeading>

            <ul>
                {tagPosts.map((post) => (
                    <PostListItem key={post.slug} post={post} />
                ))}
            </ul>
        </section>
    );
}
