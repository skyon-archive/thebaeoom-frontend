import { BooksApi } from "apis";
import BookList from "components/Book/BookList";
import useBookList, { UseBookListProps } from "components/Book/useBookList";
import { BookHeader } from "components/Header";
import { GetServerSideProps, NextPage } from "next";

const BookListPage: NextPage<UseBookListProps> = (props) => {
    const bookListProps = useBookList(props);

    return (
        <>
            <BookHeader />
            <BookList {...bookListProps} />
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
        });

        return { props: { data, limit: 10, offset: 0, type } };
    } catch (e) {
        return { notFound: true };
    }
};

export default BookListPage;
