import Link from "next/link";

// Types
import { Meta } from "@/types";

type Props = {
    post: Meta;
};

export default function PostListItem({ post }: Props) {
    const { slug, title, date, description } = post;

    return (
        <li>
            <div className="font-medium mb-1 mt-5">
                <Link className="text-xl text-link" href={`/blog/${slug}`}>
                    {title}
                </Link>
            </div>
            <p className="text-md text-gray-900 dark:text-gray-400">
                {description}
            </p>
            <small className="text-gray-700 dark:text-gray-100 font-medium tracking-wider">
                {date}
            </small>
        </li>
    );
}
