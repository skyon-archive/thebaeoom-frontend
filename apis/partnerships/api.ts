import axios from "apis/axios";
import { Partnership } from "apis/partnerships/model";
import { AxiosRequestConfig } from "axios";

class PartnershipsApi {
    static create(body: Partnership, config?: AxiosRequestConfig) {
        return axios.post(`/partnerships`, body, {
            ...config,
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
    }
}

export default PartnershipsApi;
