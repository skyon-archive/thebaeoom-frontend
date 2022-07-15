import { BoardList, BoardsApi } from "apis";
import Board from "components/Board";
import { BoardHeader } from "components/Header";
import useSearchPagination, {
    UseSearchPaginationProps,
} from "hooks/useSearchPagination";
import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";

const BoardFilePage: NextPage<UseSearchPaginationProps<BoardList>> = (
    props,
) => {
    const boardProps = useSearchPagination<BoardList>(props);

    return (
        <>
            <BoardHeader />
            <Board {...boardProps} />
            <Head>
                <title>자료실 | 더배움</title>
            </Head>
        </>
    );
};

export const getServerSideProps: GetServerSideProps<
    UseSearchPaginationProps<BoardList>
> = async ({ query }) => {
    try {
        const { data } = await BoardsApi.list({
            limit: 10,
            offset: query.page && (Number(query.page) - 1) * 10,
            search: query.search && encodeURIComponent(String(query.search)),
            type: "FILE",
        });

        return { props: { data, limit: 10, offset: 0 } };
    } catch (e) {
        return { notFound: true };
    }
};

export default BoardFilePage;
