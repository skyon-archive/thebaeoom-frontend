import type { BookList as BookListType } from "apis";
import PageButton, { PageButtonProps } from "components/PageButton";
import Search, { SearchProps } from "components/Search";
import React from "react";
import Book from "./Book";
import * as S from "./BookList.style";
import BookListTab, { BookListTabProps } from "./BookListTab";

export interface BookListProps extends BookListTabProps {
    data: BookListType[];
    type: string;
    searchProps: SearchProps;
    pageButtonProps: PageButtonProps;
}

const BookList = ({
    data,
    type,
    tab,
    pageButtonProps,
    searchProps,
}: BookListProps) => {
    return (
        <S.Container>
            {type === "/brand" ? (
                <BookListTab tab={tab} />
            ) : (
                <Search {...searchProps} />
            )}
            <S.Grid>
                {data.map((book) => (
                    <Book data={book} key={book.isbn} type={type} />
                ))}
            </S.Grid>
            <PageButton {...pageButtonProps} />
        </S.Container>
    );
};

export default BookList;
