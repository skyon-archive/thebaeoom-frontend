import { AuthorDetail as AuthorDetailType, AuthorsApi } from "apis";
import AuthorDetail from "components/AuthorDetail/AuthorDetail";
import { AuthorHeader } from "components/Header";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";

interface BookDetailPageProps {
    data: AuthorDetailType;
}

const BookDetailPage: NextPage<BookDetailPageProps> = ({ data }) => {
    return (
        <>
            <AuthorHeader />
            <AuthorDetail {...data} />
            <Head>
                <title>{data.name} | 저자 | 더배움</title>
            </Head>
        </>
    );
};

export const getStaticProps: GetStaticProps<BookDetailPageProps> = async ({
    params,
}) => {
    try {
        const { data } = await AuthorsApi.retrieve({
            id: Number(params.id),
        });
        return { props: { data } };
    } catch {
        return {
            notFound: true,
            revalidate: 10,
        };
    }
};

export const getStaticPaths: GetStaticPaths = async () => {
    const { data: author } = await AuthorsApi.list({});
    return {
        paths: author.results.map((item) => ({
            params: { id: String(item.id) },
        })),
        fallback: "blocking",
    };
};

export default BookDetailPage;
