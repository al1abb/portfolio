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

// Blog posts
export type Meta = {
    slug: string;
    title: string;
    description: string;
    date: string;
    tags: string[];
};

export type Post = {
    meta: Meta;
    content: ReactElement<any, string | JSXElementConstructor<any>>;
};
