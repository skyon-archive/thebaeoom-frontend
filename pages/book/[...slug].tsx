import { BookDetail as BookDetailType, BooksApi } from "apis";
import { BookDescription, BookDetail, BookStore } from "components/BookDetail";
import { BookHeader } from "components/Header";
import * as Layout from "components/Layout/BookDetailLayout";
import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";

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
            <Head>
                <title>{data.title} | 도서 | 더배움</title>
            </Head>
        </>
    );
};

export const getServerSideProps: GetServerSideProps<
    BookDetailPageProps
> = async ({ params }) => {
    try {
        if (params.slug.length === 1 || params.slug.length === 2) {
            const { data } = await BooksApi.retrieve({
                isbn: params.slug.at(-1),
            });
            return { props: { data } };
        }
        return {
            notFound: true,
        };
    } catch {
        return {
            notFound: true,
        };
    }
};

export default BookDetailPage;
