import { Pagination } from "apis";
import { PageButtonProps } from "components/PageButton";
import { SearchProps } from "components/Search";
import usePage from "hooks/usePage";
import useSearch from "hooks/useSearch";
import { useEffect, useState } from "react";

export interface UseSearchPaginationProps<T> {
    data: Pagination<T>;
    limit?: number;
    offset: number;
}

export interface SearchPaginationProps<T> {
    data: T[];
    searchProps: SearchProps;
    pageButtonProps: PageButtonProps;
}

const useBoard = <T>({
    data,
    limit = 10,
    offset,
}: UseSearchPaginationProps<T>): SearchPaginationProps<T> => {
    const { value, onChange, search } = useSearch();

    const [currentPage, setCurrentPage] = useState(1);
    const [pageCount, setPageCount] = useState(1);

    const { pageButton, navigatePrev, navigateNext } = usePage(
        currentPage,
        pageCount,
    );

    useEffect(() => {
        setPageCount(Math.ceil(data.count / limit));
        setCurrentPage(offset / limit + 1);
    }, [data]);

    return {
        data: data.results,
        searchProps: {
            formProps: {
                onSubmit: (e) => e.preventDefault(),
            },
            inputProps: {
                onChange,
                value,
            },
            searchButtonProps: {
                onClick: search,
            },
        },
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

export default useBoard;
