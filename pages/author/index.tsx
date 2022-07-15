import { AuthorList as AuthorListType, AuthorsApi } from "apis";
import AuthorList from "components/Author/AuthorList";
import { AuthorHeader } from "components/Header";
import useSearchPagination, {
    UseSearchPaginationProps,
} from "hooks/useSearchPagination";
import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";

const AuthorListPage: NextPage<UseSearchPaginationProps<AuthorListType>> = (
    props,
) => {
    const authorListProps = useSearchPagination<AuthorListType>(props);

    return (
        <>
            <AuthorHeader />
            <AuthorList {...authorListProps} />
            <Head>
                <title>저자 | 더배움</title>
            </Head>
        </>
    );
};

export const getServerSideProps: GetServerSideProps<
    UseSearchPaginationProps<AuthorListType>
> = async ({ query }) => {
    try {
        const { data } = await AuthorsApi.list({
            limit: 10,
            offset: query.page && (Number(query.page) - 1) * 10,
            search: query.search && encodeURIComponent(String(query.search)),
        });

        return { props: { data, limit: 10, offset: 0 } };
    } catch (e) {
        return { notFound: true };
    }
};

export default AuthorListPage;
