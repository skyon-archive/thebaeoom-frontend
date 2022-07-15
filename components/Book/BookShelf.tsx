import type { BookList } from "apis";
import BookCover from "components/Book/BookCover";
import React from "react";
import * as S from "./BookShelf.style";

interface BookShelfProps {
    data: BookList[];
}

const BookShelf = ({ data }: BookShelfProps) => {
    return (
        <S.Container>
            <h2>신간 소개</h2>
            <S.List>
                {data.map((book) => (
                    <BookCover {...book} key={book.isbn} scale={1.5} />
                ))}
            </S.List>
        </S.Container>
    );
};

export default BookShelf;
