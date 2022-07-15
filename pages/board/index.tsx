const BoardPage = () => {
    return null;
};

export const getStaticProps = async () => {
    return {
        redirect: {
            destination: "/board/notice",
            permanent: true,
        },
    };
};

export default BoardPage;
