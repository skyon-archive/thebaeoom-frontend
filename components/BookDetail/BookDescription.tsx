import { BookDetail as BookDetailType } from "apis";
import ArticleLayout from "components/Layout/ArticleLayout";
import Image from "next/image";
import { useState } from "react";
import { formatTime } from "utlis/time";
import * as S from "./BookDescription.style";

interface BookDetailProps {
    data: BookDetailType;
}

const BookDescription = ({ data }: BookDetailProps) => {
    const { description, table_of_contents: tableOfContents } = data;
    const author = data.author.map((item) => item.description).join("\n\n");

    const [tab, setTab] = useState<
        "description" | "author" | "tableOfContents"
    >("description");

    return (
        <S.Container>
            <S.Tab>
                <button type="button" onClick={() => setTab("description")}>
                    도서 소개
                </button>
                <button type="button" onClick={() => setTab("author")}>
                    저자 소개
                </button>
                <button type="button" onClick={() => setTab("tableOfContents")}>
                    목차 소개
                </button>
            </S.Tab>
            <ArticleLayout>
                <div
                    dangerouslySetInnerHTML={{
                        __html: { description, tableOfContents, author }[tab],
                    }}
                />
            </ArticleLayout>
        </S.Container>
    );
};

export default BookDescription;
