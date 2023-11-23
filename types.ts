export type ProjectType = {
    name: string;
    description: string;
    mainImage: string;
    tags: string[];
    links: {
        website?: string;
        github?: string;
    };
    startDate?: string;
    endDate?: string;
};

export type Post = {
    slug: string;
    title: string;
    date: string;
    description: string;
    content: string;
    tags: string[];
};

export type PostWithoutContent = Omit<Post, "content">;
