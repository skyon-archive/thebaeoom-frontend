import GlobalStyle from "commons/style/globalStyle";
import theme from "commons/style/theme";
import Footer from "components/Footer";
import Navigation from "components/Navigation";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Navigation />
            <Component {...pageProps} />
            <Footer />
            <Head>
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css"
                />
            </Head>
        </ThemeProvider>
    );
};

export default MyApp;
