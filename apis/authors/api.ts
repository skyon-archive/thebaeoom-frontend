import { AuthorDetail, AuthorList } from "apis/authors/model";
import axios from "apis/axios";
import { Pagination } from "apis/model";
import { AxiosRequestConfig } from "axios";

interface AuthorsApiListParameter {
    search?: string;
    ordering?: "id" | "-id" | "name" | "-name";
    limit?: number;
    offset?: number;
}

interface AuthorsApiRetrieveParameter {
    id: number;
}

class AuthorsApi {
    static list(param: AuthorsApiListParameter, config?: AxiosRequestConfig) {
        const { ordering, search, limit, offset } = param;
        return axios.get<Pagination<AuthorList>>(
            `/authors?search=${search ?? ""}&ordering=${ordering ?? ""}&limit=${
                limit ?? ""
            }&offset=${offset ?? ""}`,
            config,
        );
    }

    static retrieve(
        { id }: AuthorsApiRetrieveParameter,
        config?: AxiosRequestConfig,
    ) {
        return axios.get<AuthorDetail>(`/authors/${id}`, config);
    }
}

export default AuthorsApi;
