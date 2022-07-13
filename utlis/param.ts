export const getParam = (url: string, key: string) => {
    const param = new URLSearchParams(url.split("?")[1]);
    return param.get(key);
};

export const setParam = (url: string, key: string, value: string) => {
    const param = new URLSearchParams(url.split("?")[1]);
    param.set(key, value);
    return `${url.split("?")[0]}?${param.toString()}`;
};
