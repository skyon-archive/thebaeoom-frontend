export interface BoardList {
    id: number;
    title: string;
    view: number;
    created_at: string;
}

export interface BoardDetail {
    id: number;
    title: string;
    view: number;
    created_at: string;
    content: string;
    file?: string;
}
