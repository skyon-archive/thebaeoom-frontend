import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import { setParam } from "utlis/param";

interface UsePage {
    (currentPage: number, pageCount: number): {
        pageArray: number[];
        pageButtonFactory: {
            number: number;
            buttonProps: { onClick: () => void };
            isActive: boolean;
        }[];
        navigatePrev: () => void;
        navigateNext: () => void;
    };
}

const usePage: UsePage = (currentPage, pageCount) => {
    const router = useRouter();
    const [pageArray, setPageArray] = useState<number[]>([1, 2, 3, 4, 5]);

    useEffect(() => {
        const startNumber = Math.max(
            1,
            Math.min(currentPage - 2, pageCount - 4),
        );
        setPageArray(
            new Array(pageCount)
                .fill(undefined)
                .map((_, index) => startNumber + index),
        );
    }, [currentPage, pageCount]);

    const pageButtonFactory = useMemo(() => {
        return pageArray.map((index) => ({
            number: index,
            buttonProps: {
                onClick: () =>
                    router.push(setParam(router.asPath, "page", String(index))),
            },
            isActive: index === currentPage,
        }));
    }, [pageArray, router.asPath, currentPage]);

    const navigatePrev = () => {
        router.push(
            setParam(
                router.asPath,
                "page",
                String(Math.max(1, currentPage - 5)),
            ),
        );
    };
    const navigateNext = () => {
        router.push(
            setParam(
                router.asPath,
                "page",
                String(Math.min(pageCount, currentPage + 5)),
            ),
        );
    };

    return {
        pageArray,
        pageButtonFactory,
        navigatePrev,
        navigateNext,
    };
};

export default usePage;
