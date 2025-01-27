export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    coverImage: string;
    date: string;
    readTime: string;
    category: string;
    author: {
        name: string;
        avatar: string;
    };
    tags: string[];
}

