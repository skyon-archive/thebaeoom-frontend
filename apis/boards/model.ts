export type BoardType =
    | "NOTICE"
    | "FILE"
    | "ABOUT"
    | "CONTACT"
    | "BRAND"
    | "MAP";

export interface BoardList {
    id: number;
    title: string;
    view: number;
    created_at: string;
    type: BoardType;
}

export interface BoardDetail {
    id: number;
    title: string;
    view: number;
    created_at: string;
    content: string;
    file: string | null;
    type: BoardType;
    previous: BoardList | null;
    next: BoardList | null;
    page: number;
}
