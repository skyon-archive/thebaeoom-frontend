import axios from "axios";

const newAxios = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    headers: { "Content-Type": "application/json" },
});

export default newAxios;
