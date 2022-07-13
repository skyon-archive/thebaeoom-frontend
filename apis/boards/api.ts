import axios from "apis/axios";
import { BoardDetail, BoardList } from "apis/boards/model";
import { Pagination } from "apis/model";
import { AxiosRequestConfig } from "axios";

interface BoardsApiListParameter {
    type?: "NOTICE" | "FILE" | "ABOUT" | "CONTACT" | "BRAND" | "MAP";
    search?: string;
    ordering?:
        | "id"
        | "-id"
        | "title"
        | "-title"
        | "view"
        | "-view"
        | "created_at"
        | "-created_at";
    limit?: number;
    offset?: number;
}

interface BoardsApiRetrieveParameter {
    id: number;
}

class BoardsApi {
    static list(param: BoardsApiListParameter, config?: AxiosRequestConfig) {
        const { type, ordering, search, limit, offset } = param;
        return axios.get<Pagination<BoardList>>(
            `/boards?type=${type ?? ""}&search=${search ?? ""}&ordering=${
                ordering ?? ""
            }&limit=${limit ?? ""}&offset=${offset ?? ""}`,
            config,
        );
    }

    static retrieve(
        { id }: BoardsApiRetrieveParameter,
        config?: AxiosRequestConfig,
    ) {
        return axios.get<BoardDetail>(`/boards/${id}`, config);
    }
}

export default BoardsApi;
