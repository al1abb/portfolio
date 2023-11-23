import Link from "next/link";

// Lib
import { getPostData } from "@/lib/posts";

// Types
import { Post } from "@/types";
import { MDXRemote } from "next-mdx-remote/rsc";
import { MDXComponents } from "@/components";

type Props = {
    params: {
        slug: string;
    };
};

export async function generateMetadata({ params }: Props) {
    const postData: Post = await getPostData(params.slug);

    console.log(postData);

    return {
        title: postData.title,
    };
}

export default async function BlogPostPage({ params }: Props) {
    const postData: Post = await getPostData(params.slug);
    return (
        <article className="container mx-auto">
            {/* Post Title */}
            <h1 className="font-extrabold text-4xl mb-1">{postData.title}</h1>

            <div className="text-gray-500 font-medium mb-5">
                {postData.date}
            </div>

            <div>
                {postData.tags.map((tag) => (
                    <span
                        key={tag}
                        className="bg-gray-200 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* Post Content */}
            <MDXRemote source={postData.content} components={MDXComponents} />

            <Link href="/blog">← Back to blog page</Link>
        </article>
    );
}
