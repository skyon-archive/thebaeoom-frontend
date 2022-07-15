import axios from "apis/axios";
import { AxiosRequestConfig } from "axios";
import { Banner } from "./model";

class BannersApi {
    // eslint-disable-next-line no-empty-pattern
    static list({}, config?: AxiosRequestConfig) {
        return axios.get<Banner[]>(`/banners`, config);
    }
}

export default BannersApi;
