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

    const { pageButton, navigatePrev, navigateNext } = usePage(
        currentPage,
        pageCount,
    );

    const tab = useMemo(() => {
        const publisher = getParam(router.asPath, "publisher");
        return ["더배움", "인성재단", "종이향기", "지식오름"].map(
            (item, index) => ({
                text: item,
                buttonProps: {
                    onClick: () =>
                        router.push(setParam(router.asPath, "publisher", item)),
                },
                isActive: publisher ? item === publisher : index === 0,
            }),
        );
    }, [router]);

    useEffect(() => {
        setPageCount(Math.ceil(data.count / limit));
        setCurrentPage(offset / limit + 1);
    }, [data, limit, offset]);

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
        tab,
        pageButtonProps: {
            pageButton,
            prevButtonProps: {
                onClick: navigatePrev,
            },
            nextButtonProps: {
                onClick: navigateNext,
            },
        },
    };
};

export default useBookList;
