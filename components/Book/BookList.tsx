import type { BookList as BookListType } from "apis";
import React from "react";
import PageButton, { PageButtonProps } from "components/PageButton";
import Search, { SearchProps } from "components/Search";
import BookListTab, { BookListTabProps } from "./BookListTab";
import Book from "./Book";
import * as S from "./BookList.style";

export interface BookListProps extends BookListTabProps, PageButtonProps {
    data: BookListType[];
    type: string;
    searchProps: SearchProps;
}

const BookList = ({
    data,
    type,
    tabFactory,
    pageButtonFactory,
    searchProps,
}: BookListProps) => {
    return (
        <S.Container>
            {type === "/brand" ? (
                <BookListTab tabFactory={tabFactory} />
            ) : (
                <Search {...searchProps} />
            )}
            <S.Grid>
                {data.map((book) => (
                    <Book data={book} key={book.isbn} type={type} />
                ))}
            </S.Grid>
            <PageButton pageButtonFactory={pageButtonFactory} />
        </S.Container>
    );
};

export default BookList;
