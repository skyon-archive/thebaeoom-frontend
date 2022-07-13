const AboutPage = () => {
    return null;
};

export const getStaticProps = async () => {
    return {
        redirect: {
            destination: "/about/company",
        },
    };
};

export default AboutPage;
