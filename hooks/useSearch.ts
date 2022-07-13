import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

interface UseSearch {
    (): {
        value: string;
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
        search: () => void;
    };
}

const useSearch: UseSearch = () => {
    const router = useRouter();

    const getParam = (url: string, key: string) => {
        const param = new URLSearchParams(url.split("?")[1]);
        return param.get(key);
    };

    const [searchInput, setSearchInput] = useState("");

    useEffect(() => {
        const handleRouteChange = (url) => {
            setSearchInput(getParam(url, "search") || "");
        };

        handleRouteChange(router.asPath);
        router.events.on("routeChangeStart", handleRouteChange);
        return () => router.events.off("routeChangeStart", handleRouteChange);
    }, []);

    const search = () => {
        router.push(`${router.asPath.split("?")[0]}?search=${searchInput}`);
    };

    return {
        value: searchInput,
        onChange: (e) => setSearchInput(e.target.value),
        search,
    };
};

export default useSearch;
