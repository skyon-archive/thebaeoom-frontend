import { AuthorDetail as AuthorDetailType, AuthorsApi } from "apis";
import AuthorDetail from "components/AuthorDetail/AuthorDetail";
import { AuthorHeader } from "components/Header";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

interface BookDetailPageProps {
    data: AuthorDetailType;
}

const BookDetailPage: NextPage<BookDetailPageProps> = ({ data }) => {
    return (
        <>
            <AuthorHeader />
            <AuthorDetail {...data} />
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
