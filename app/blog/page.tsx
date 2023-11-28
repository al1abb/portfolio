import { Metadata } from "next";

// Lib
import { getPostsMeta } from "@/lib/posts";

// Components
import { PostListItem, SectionHeading } from "@/components";

export const revalidate = 0;

export const metadata: Metadata = {
    title: "Blog",
    description: "Ali Abbasov's Blog",
    robots: {
        index: true,
        follow: true,
    },
};

const BlogPage = async () => {
    const posts = await getPostsMeta();

    if (!posts) {
        return <p>No Posts Available</p>;
    }

    return (
        <section className="flex flex-col items-center py-5 px-5">
            <SectionHeading>My Blog</SectionHeading>
            <ul>
                {posts.map((post) => (
                    <PostListItem key={post.slug} post={post} />
                ))}
            </ul>
        </section>
    );
};

export default BlogPage;
