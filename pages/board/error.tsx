import { ErrorForm } from "components/Form";
import { BoardHeader } from "components/Header";
import Head from "next/head";

const BoardFilePage = () => {
    return (
        <>
            <BoardHeader />
            <ErrorForm />
            <Head>
                <title>오류 제보 | 더배움</title>
            </Head>
        </>
    );
};

export default BoardFilePage;
