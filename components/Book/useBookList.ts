import { BookList, Pagination } from "apis";
import usePage from "hooks/usePage";
import useSearch from "hooks/useSearch";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import { getParam, setParam } from "utlis/param";
import { BookListProps } from "./BookList";

export interface UseBookListProps {
    data: Pagination<BookList>;
    limit?: number;
    offset: number;
    type: string;
}

export interface UseBookList {
    (props: UseBookListProps): BookListProps;
}

const useBookList: UseBookList = ({ data, limit = 10, offset, type }) => {
    const router = useRouter();
    const { value, onChange, search } = useSearch();

    const [currentPage, setCurrentPage] = useState(1);
    const [pageCount, setPageCount] = useState(1);

    const { pageButtonFactory, navigatePrev, navigateNext } = usePage(
        currentPage,
        pageCount,
    );

    const tabFactory = useMemo(() => {
        const publisher = getParam(router.asPath, "publisher");
        return ["더배움", "인성재단", "종이향기", "지식오름"].map(
            (tab, index) => ({
                text: tab,
                buttonProps: {
                    onClick: () =>
                        router.push(setParam(router.asPath, "publisher", tab)),
                },
                isActive: publisher ? tab === publisher : index === 0,
            }),
        );
    }, [router, router.asPath]);

    useEffect(() => {
        setPageCount(Math.ceil(data.count / limit));
        setCurrentPage(offset / limit + 1);
    }, [data]);

    return {
        currentPage,
        pageCount,
        data: data.results,
        type,
        searchProps: {
            formProps: {
                onSubmit: (e) => e.preventDefault(),
            },
            inputProps: {
                onChange,
                value,
            },
            searchButtonProps: {
                type: "submit",
                onClick: search,
            },
        },
        tabFactory,
        pageButtonFactory,
        prevButtonProps: {
            onClick: navigatePrev,
        },
        nextButtonProps: {
            onClick: navigateNext,
        },
    };
};

export default useBookList;