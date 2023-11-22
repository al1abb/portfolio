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
    id: string;
    content: string;
    date: string;
    title: string;
};

export type PostWithoutContent = Omit<Post, "content">;
