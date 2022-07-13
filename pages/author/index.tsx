import { AuthorsApi } from "apis";
import AuthorList from "components/Author/AuthorList";
import useAuthorList, {
    UseAuthorListProps,
} from "components/Author/useAuthorList";
import { AuthorHeader } from "components/Header";
import { GetServerSideProps, NextPage } from "next";

const AuthorListPage: NextPage<UseAuthorListProps> = (props) => {
    const authorListProps = useAuthorList(props);

    return (
        <>
            <AuthorHeader />
            <AuthorList {...authorListProps} />
        </>
    );
};

export const getServerSideProps: GetServerSideProps<
    UseAuthorListProps
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
