export interface AuthorName {
    name: string;
}

export interface AuthorPreview {
    id: number;
    name: string;
    description: string;
}

export interface BookList {
    isbn: string;
    title: string;
    author: AuthorName[];
    publisher: string;
    pubDate: string;
    price: number;
    cover: string;
}

export interface BookstoreLink {
    link: string;
    text: string;
    image: "NIL" | "YES" | "KYO" | "ALA" | "NAV";
}

export interface BookDetail {
    isbn: string;
    title: string;
    publisher: string;
    pubDate: string;
    price: number;
    cover: string;
    author: AuthorPreview[];
    page: number;
    size: string;
    category: string;
    description: string;
    table_of_contents: string;
    bookstore_link: BookstoreLink[];
}
