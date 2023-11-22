// matter is a library that let's you parse the metadata in each markdown file.
// the lib folder does not have an assigned name like the pages folder, so you can name it anything. It's usually convention to use lib or utils

import fs from "fs";
import path from "path";

// Import 'gray-matter', library for parsing the metadata in each markdown file
import matter from "gray-matter";

// Import 'remark', library for rendering markdown
import { remark } from "remark";
import html from "remark-html";
import rehypeHighlight from "rehype-highlight";

// Types
import { Post, PostWithoutContent } from "@/types";

// --------------------------------
// GET THE PATH OF THE POSTS FOLDER
const postsDirectory = path.join(process.cwd(), "posts"); // process.cwd() returns the absolute path of the current working directory

/**
 * Get the markdown posts from the posts directory
 * @returns {PostWithoutContent[]} - An array of posts
 */
export function getSortedPostsData(): PostWithoutContent[] {
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory); // [ 'pre-rendering.md', 'ssg-ssr.md' ]

    // Get the data from each file
    const allPostsData = fileNames.map((filename) => {
        // Remove ".md" from file name to get id
        const id = filename.replace(/\.md$/, ""); // id = 'pre-rendering', 'ssg-ssr'

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, filename);
        // /Users/ef/Desktop/nextjs-blog/posts/pre-rendering.md
        const fileContents = fs.readFileSync(fullPath, "utf8"); // .md string content

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Combine the data with the id
        return {
            id,
            ...(matterResult.data as { date: string; title: string }),
        };
    });

    // Sort posts by date and return
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

/**
 * Get the slugs of the posts
 * @returns {string[]} - An array of post slugs
 */
export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory);

    return fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(/\.md$/, ""),
            },
        };
    });
}

// The returned array must have the params key otherwise `getStaticPaths` will fail

/**
 * Get the post from a slug
 * @param id - The slug of the post
 * @returns {Promise<Post>} - The post
 */
export async function getPostData(id: string): Promise<Post> {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(html)
        .use(rehypeHighlight)
        .process(matterResult.content);
    const content = processedContent.toString();

    // Combine the data with the id
    return {
        id,
        content,
        ...(matterResult.data as { date: string; title: string }),
    };
}
