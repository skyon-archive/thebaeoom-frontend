import { BookList, BooksApi, ErrorsApi } from "apis";
import { useCKEditor } from "ckeditor4-react";
import { useRouter } from "next/router";
import React, { startTransition, useEffect, useState } from "react";
import * as S from "./ErrorForm.style";

const ErrorForm = () => {
    const router = useRouter();

    const [searchState, setSearchState] = useState(false);
    const [selectedBook, setSelectedBook] = useState<BookList | null>(null);
    const [bookCount, setBookCount] = useState(0);
    const [bookList, setBookList] = useState<BookList[]>([]);
    const [bookListOffset, setBookListOffset] = useState(0);
    const [bookListSearch, setBookListSearch] = useState("");
    const [title, setTitle] = useState("");
    const [file, setFile] = useState<File>();

    const [element, setElement] = useState<HTMLDivElement | null>(null);

    const { editor } = useCKEditor({
        element,
        type: "classic",
        config: {
            autoGrow_onStartup: true,
            extraPlugins: [
                "uploadimage",
                "div",
                "autolink",
                "autoembed",
                "embedsemantic",
                "autogrow",
                "widget",
                "lineutils",
                "clipboard",
                "dialog",
                "dialogui",
                "elementspath",
            ].join(","),
        },
    });

    useEffect(() => {
        BooksApi.list({
            limit: bookListOffset + 10,
            offset: 0,
            search: bookListSearch,
            ordering: "title",
        }).then(({ data }) => {
            startTransition(() => {
                setBookList(data.results);
                setBookCount(data.count);
            });
        });
    }, [bookListOffset, bookListSearch]);

    useEffect(() => {
        setSearchState(false);
    }, [selectedBook]);

    const handleSubmit = () => {
        const content = editor.getData();
        if (selectedBook && title && content) {
            ErrorsApi.create({
                book: selectedBook.isbn,
                title,
                file,
                content,
            }).then(() => {
                alert("제출이 완료되었습니다.");
                router.reload();
            });
        } else {
            alert("파일 첨부 외의 모든 항목은 필수 항목입니다.");
        }
    };

    return (
        <S.Container>
            <table>
                <tbody>
                    <tr>
                        <th>도서</th>
                        <td>
                            <S.SearchHeader>
                                {selectedBook ? (
                                    <S.Book>
                                        <span>{selectedBook.title}</span>
                                        <span>
                                            {selectedBook.publisher}
                                            &nbsp;
                                            {selectedBook.author.map(
                                                (author) => author.name,
                                            )}
                                        </span>
                                    </S.Book>
                                ) : (
                                    <S.Book>
                                        <span>선택한 도서 없음</span>
                                    </S.Book>
                                )}
                                <button
                                    type="button"
                                    onClick={() =>
                                        setSearchState((old) => !old)
                                    }
                                >
                                    {searchState ? "닫기" : "검색"}
                                </button>
                            </S.SearchHeader>
                            {searchState && (
                                <S.SearchBox>
                                    <input
                                        type="input"
                                        placeholder="제목, 작가, ISBN으로 검색"
                                        value={bookListSearch}
                                        onChange={(e) => {
                                            setBookListOffset(0);
                                            setBookListSearch(e.target.value);
                                        }}
                                    />
                                    <S.BookList>
                                        {bookList.map((item) => (
                                            <S.Book
                                                key={item.isbn}
                                                onClick={() =>
                                                    setSelectedBook(item)
                                                }
                                            >
                                                <span>{item.title}</span>
                                                <span>
                                                    {item.publisher}
                                                    &nbsp;
                                                    {item.author.map(
                                                        (author) => author.name,
                                                    )}
                                                </span>
                                            </S.Book>
                                        ))}
                                        {bookList.length === bookCount ? (
                                            <div>
                                                {bookList.length}/{bookCount}
                                            </div>
                                        ) : (
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setBookListOffset(
                                                        (old) => old + 10,
                                                    )
                                                }
                                                style={{ margin: "8px 0" }}
                                            >
                                                더 보기 {bookList.length}/
                                                {bookCount}
                                            </button>
                                        )}
                                    </S.BookList>
                                </S.SearchBox>
                            )}
                        </td>
                    </tr>
                    <tr>
                        <th>제목</th>
                        <S.Title>
                            <input
                                type="input"
                                placeholder="제목"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </S.Title>
                    </tr>
                    <tr>
                        <th>내용</th>
                        <td>
                            <div ref={setElement} />
                        </td>
                    </tr>
                    <tr>
                        <th>파일 첨부</th>
                        <td>
                            <input
                                type="file"
                                onChange={(e) => setFile(e.target.files[0])}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            <S.Button type="button" onClick={handleSubmit}>
                제출
            </S.Button>
        </S.Container>
    );
};

export default ErrorForm;
