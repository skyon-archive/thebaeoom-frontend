import axios from "apis/axios";
import { Error } from "apis/errors/model";
import { AxiosRequestConfig } from "axios";

class ErrorsApi {
    static create(body: Error, config?: AxiosRequestConfig) {
        return axios.post(`/errors`, body, {
            ...config,
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
    }
}

export default ErrorsApi;
