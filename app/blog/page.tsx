import Link from "next/link";

import { getSortedPostsData } from "@/lib/posts";

import { Post } from "@/types";
import { SectionHeading } from "@/components";

type PostWithoutContent = Omit<Post, "content">;

const BlogPage = async () => {
    const allPostsData: PostWithoutContent[] = await getSortedPostsData();

    return (
        <section className="flex flex-col items-center py-5 px-5">
            <SectionHeading>My Blog</SectionHeading>
            <ul>
                {allPostsData.map(({ id, title, date }) => (
                    <li key={id}>
                        <div className="font-medium mb-1 mt-5">
                            <Link href={`/blog/${id}`}>{title}</Link>
                        </div>
                        <small className="text-gray-500 font-medium">
                            {date}
                        </small>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default BlogPage;
