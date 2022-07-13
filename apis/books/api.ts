import axios from "apis/axios";
import { BookDetail, BookList } from "apis/books/model";
import { Pagination } from "apis/model";
import { AxiosRequestConfig } from "axios";

interface BooksApiListParameter {
    isEBook?: boolean;
    publisher?: string;
    search?: string;
    ordering?:
        | "isbn"
        | "-isbn"
        | "title"
        | "-title"
        | "publisher"
        | "-publisher"
        | "pubDate"
        | "-pubDate"
        | "price"
        | "-price"
        | "cover"
        | "-cover";
    limit?: number;
    offset?: number;
}

interface BooksApiRetrieveParameter {
    isbn: string;
}

class BooksApi {
    static list(param: BooksApiListParameter, config?: AxiosRequestConfig) {
        const { isEBook, ordering, publisher, search, limit, offset } = param;
        return axios.get<Pagination<BookList>>(
            `/books?is_ebook=${
                isEBook !== undefined ? String(isEBook) : ""
            }&publisher=${publisher ?? ""}&search=${search ?? ""}&ordering=${
                ordering ?? ""
            }&limit=${limit ?? ""}&offset=${offset ?? ""}`,
            config,
        );
    }

    static retrieve(
        { isbn }: BooksApiRetrieveParameter,
        config?: AxiosRequestConfig,
    ) {
        return axios.get<BookDetail>(`/books/${isbn}`, config);
    }
}

export default BooksApi;
