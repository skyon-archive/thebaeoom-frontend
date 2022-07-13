export interface BookPreview {
    isbn: string;
    cover: string;
    pubDate: string;
}

export interface AuthorList {
    id: number;
    name: string;
}

export interface AuthorDetail {
    id: number;
    name: string;
    description: string;
    youtube_link: string;
    blog_link: string;
    sns_link: string;
    cafe_link: string;
    book: BookPreview[];
}
