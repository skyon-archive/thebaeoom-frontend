import { BoardDetail as BoardDetailType, BoardsApi } from "apis";
import BoardDetail from "components/BoardDetail/BoardDetail";
import { BoardHeader } from "components/Header";
import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";

interface BoardDetailPageProps {
    data: BoardDetailType;
}

const BookDetailPage: NextPage<BoardDetailPageProps> = ({ data }) => {
    return (
        <>
            <BoardHeader />
            <BoardDetail {...data} />
            <Head>
                <title>
                    {data.title} |{" "}
                    {data.type === "NOTICE" ? "공지사항" : "자료실"} | 더배움
                </title>
            </Head>
        </>
    );
};

export const getServerSideProps: GetServerSideProps<
    BoardDetailPageProps
> = async ({ params }) => {
    try {
        if (params.slug.length === 2) {
            const { data } = await BoardsApi.retrieve({
                id: Number(params.slug.at(-1)),
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
