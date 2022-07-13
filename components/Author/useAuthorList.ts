import { AuthorList, Pagination } from "apis";
import usePage from "hooks/usePage";
import useSearch from "hooks/useSearch";
import { useEffect, useState } from "react";
import type { AuthorListProps } from "./AuthorList";

export interface UseAuthorListProps {
    data: Pagination<AuthorList>;
    limit?: number;
    offset: number;
}

export interface UseAuthorList {
    (props: UseAuthorListProps): AuthorListProps;
}

const useAuthorList: UseAuthorList = ({ data, limit = 10, offset }) => {
    const { value, onChange, search } = useSearch();

    const [currentPage, setCurrentPage] = useState(1);
    const [pageCount, setPageCount] = useState(1);

    const { pageButtonFactory, navigatePrev, navigateNext } = usePage(
        currentPage,
        pageCount,
    );

    useEffect(() => {
        setPageCount(Math.ceil(data.count / limit));
        setCurrentPage(offset / limit + 1);
    }, [data]);

    return {
        currentPage,
        pageCount,
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
                type: "submit",
                onClick: search,
            },
        },
        pageButtonFactory,
        prevButtonProps: {
            onClick: navigatePrev,
        },
        nextButtonProps: {
            onClick: navigateNext,
        },
    };
};

export default useAuthorList;
