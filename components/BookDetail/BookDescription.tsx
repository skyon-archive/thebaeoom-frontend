import { BookDetail as BookDetailType } from "apis";
import ArticleLayout from "components/Layout/ArticleLayout";
import { useState } from "react";
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
                <S.TabButton
                    type="button"
                    onClick={() => setTab("description")}
                    active={tab === "description"}
                >
                    도서 소개
                </S.TabButton>
                <S.TabButton
                    type="button"
                    onClick={() => setTab("author")}
                    active={tab === "author"}
                >
                    저자 소개
                </S.TabButton>
                <S.TabButton
                    type="button"
                    onClick={() => setTab("tableOfContents")}
                    active={tab === "tableOfContents"}
                >
                    목차 소개
                </S.TabButton>
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
