import GlobalStyle from "commons/style/globalStyle";
import theme from "commons/style/theme";
import Footer from "components/Footer";
import Navigation from "components/Navigation";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Navigation />
            <Component {...pageProps} />
            <Footer />
        </ThemeProvider>
    );
};

export default MyApp;
