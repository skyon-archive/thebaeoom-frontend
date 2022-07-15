import { PartnershipForm } from "components/Form";
import { AboutHeader } from "components/Header";
import Head from "next/head";

const BoardFilePage = () => {
    return (
        <>
            <AboutHeader />
            <PartnershipForm />
            <Head>
                <title>제휴 문의 | 더배움</title>
            </Head>
        </>
    );
};

export default BoardFilePage;
