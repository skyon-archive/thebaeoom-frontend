import { BooksApi } from "apis";
import BookList from "components/Book/BookList";
import useBookList, { UseBookListProps } from "components/Book/useBookList";
import { BookHeader } from "components/Header";
import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";

const BookListPage: NextPage<UseBookListProps> = (props) => {
    const bookListProps = useBookList(props);

    return (
        <>
            <BookHeader />
            <BookList {...bookListProps} />
            <Head>
                <title>도서 | 더배움</title>
            </Head>
        </>
    );
};

export const getServerSideProps: GetServerSideProps<UseBookListProps> = async ({
    req,
    query,
    resolvedUrl,
}) => {
    try {
        const type = resolvedUrl.split("/book")[1].split("?")[0];

        const { data } = await BooksApi.list({
            limit: 10,
            offset: query.page && (Number(query.page) - 1) * 10,
            search: query.search && encodeURIComponent(String(query.search)),
            isEBook: req.url.includes("ebook") || undefined,
            publisher:
                type === "/brand"
                    ? encodeURIComponent(String(query.publisher ?? "더배움"))
                    : undefined,
            ordering: type === "" ? "title" : undefined,
        });

        return {
            props: {
                data,
                limit: 10,
                offset: query.page ? (Number(query.page) - 1) * 10 : 0,
                type,
            },
        };
    } catch (e) {
        return { notFound: true };
    }
};

export default BookListPage;
