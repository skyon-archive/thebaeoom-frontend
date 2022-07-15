import { GetServerSideProps } from "next";

const AboutPage = () => {
    return null;
};

export const getServerSideProps: GetServerSideProps = async () => {
    return {
        redirect: {
            destination: "/about/company",
            permanent: true,
        },
    };
};

export default AboutPage;
