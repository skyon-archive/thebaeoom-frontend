import { BookDetail as BookDetailType, BooksApi } from "apis";
import { BookDescription, BookDetail, BookStore } from "components/BookDetail";
import { BookHeader } from "components/Header";
import * as Layout from "components/Layout/BookDetailLayout";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

interface BookDetailPageProps {
    data: BookDetailType;
}

const BookDetailPage: NextPage<BookDetailPageProps> = ({ data }) => {
    return (
        <>
            <BookHeader />
            <Layout.Header>
                <BookDetail data={data} />
                <BookStore link={data.bookstore_link} />
            </Layout.Header>
            <BookDescription data={data} />
        </>
    );
};

export const getStaticProps: GetStaticProps<BookDetailPageProps> = async ({
    params,
}) => {
    try {
        if (params.slug.length === 1 || params.slug.length === 2) {
            const { data } = await BooksApi.retrieve({
                isbn: params.slug.at(-1),
            });
            return { props: { data } };
        }
        return {
            notFound: true,
            revalidate: 10,
        };
    } catch {
        return {
            notFound: true,
            revalidate: 10,
        };
    }
};

export const getStaticPaths: GetStaticPaths = async () => {
    const { data: book } = await BooksApi.list({});
    return {
        paths: book.results.map((item) => ({ params: { slug: [item.isbn] } })),
        fallback: "blocking",
    };
};

export default BookDetailPage;
