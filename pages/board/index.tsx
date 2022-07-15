import { GetServerSideProps } from "next";

const BoardPage = () => {
    return null;
};

export const getServerSideProps: GetServerSideProps = async () => {
    return {
        redirect: {
            destination: "/board/notice",
            permanent: true,
        },
    };
};

export default BoardPage;
