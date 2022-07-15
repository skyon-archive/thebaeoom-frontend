import { BoardDetail, BoardsApi } from "apis";
import { AboutHeader } from "components/Header";
import ArticleLayout from "components/Layout/ArticleLayout";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";

interface ContactPageProps {
    data: BoardDetail;
}

const ContactPage: NextPage<ContactPageProps> = ({ data }) => {
    return (
        <>
            <AboutHeader />
            <ArticleLayout>
                <div dangerouslySetInnerHTML={{ __html: data.content }} />
            </ArticleLayout>
            <Head>
                <title>회사 소개 | 더배움</title>
            </Head>
        </>
    );
};

export const getStaticProps: GetStaticProps<ContactPageProps> = async () => {
    try {
        const { data: board } = await BoardsApi.list({
            type: "ABOUT",
            limit: 1,
        });
        if (board.count === 0)
            return {
                props: {
                    data: {
                        id: 0,
                        title: "출간 문의",
                        view: 0,
                        content:
                            "내용을 찾을 수 없습니다. 콘솔에서 보드 메뉴에 '회사 소개'로 게시물을 입력해주세요.",
                        created_at: "",
                        file: null,
                        type: "ABOUT",
                        previous: null,
                        next: null,
                        page: 1,
                    },
                },
                revalidate: 10,
            };

        const { data } = await BoardsApi.retrieve({ id: board.results[0].id });
        return {
            props: { data },
            revalidate: 10,
        };
    } catch (e) {
        return { notFound: true, revalidate: 10 };
    }
};

export default ContactPage;
