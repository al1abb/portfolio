import Link from "next/link";

import { getPostData } from "@/lib/posts";
import { Post } from "@/types";

type Props = {
    params: {
        id: string;
    };
};

export async function generateMetadata({ params }: Props) {
    const postData: Post = await getPostData(params.id);

    return {
        title: postData.title,
    };
}

export default async function BlogPostPage({ params }: Props) {
    const postData: Post = await getPostData(params.id);
    return (
        <article className="container mx-auto">
            {/* Post Title */}
            <h1 className="font-extrabold text-3xl mb-1">{postData.title}</h1>

            <div className="text-gray-500 font-medium mb-5">
                {postData.date}
            </div>

            {/* Post Content */}
            <div
                className="text-gray-600"
                dangerouslySetInnerHTML={{ __html: postData.content }}
            />

            <Link href="/blog">← Back to blog page</Link>
        </article>
    );
}
