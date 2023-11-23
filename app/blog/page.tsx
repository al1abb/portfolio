import { Metadata } from "next";
import Link from "next/link";

// Lib
import { getSortedPostsData } from "@/lib/posts";

// Components
import { SectionHeading } from "@/components";

// Types
import { PostWithoutContent } from "@/types";

export const metadata: Metadata = {
    title: "Blog",
    description: "Ali Abbasov's Blog",
    robots: {
        index: true,
        follow: true,
    },
};

const BlogPage = async () => {
    const allPostsData: PostWithoutContent[] = await getSortedPostsData();

    return (
        <section className="flex flex-col items-center py-5 px-5">
            <SectionHeading>My Blog</SectionHeading>
            <ul>
                {allPostsData.map(({ slug, title, date, description }) => (
                    <li key={slug}>
                        <div className="font-medium mb-1 mt-5">
                            <Link
                                className="text-xl text-blue-400 hover:text-blue-600"
                                href={`/blog/${slug}`}
                            >
                                {title}
                            </Link>
                        </div>
                        <p className="text-md text-gray-800">{description}</p>
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
