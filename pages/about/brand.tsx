import { BoardDetail, BoardsApi } from "apis";
import { AboutHeader } from "components/Header";
import ArticleLayout from "components/Layout/ArticleLayout";
import { GetStaticProps, NextPage } from "next";

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
        </>
    );
};

export const getStaticProps: GetStaticProps<ContactPageProps> = async () => {
    try {
        const { data: board } = await BoardsApi.list({
            type: "BRAND",
            limit: 1,
        });
        if (board.count === 0)
            return {
                props: {
                    data: {
                        id: 0,
                        title: "찾아오시는 길",
                        view: 0,
                        content:
                            "내용을 찾을 수 없습니다. 콘솔에서 보드 메뉴에 '브랜드 소개'로 게시물을 입력해주세요.",
                        created_at: "",
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
