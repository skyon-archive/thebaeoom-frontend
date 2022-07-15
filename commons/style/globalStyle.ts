import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    body {
        font-family: 'NanumSquare', '맑은 고딕', 'Malgun Gothic', 'Dotun';
        min-width: 1024px;
    }

    h1 {
        line-height: 1.4;
        font-size: 36px;
        color: #374874;
        font-weight: bold;
    }

    h2 {
        line-height: 1.4;
        font-size: 28px;
        color: #374874;
        font-weight: bold;
    }

    h3 {
        line-height: 1.4;
        font-size: 24px;
        color: #374874;
        font-weight: bold;
    }

    h4 {
        line-height: 1.4;
        font-size: 20px;
        color: #374874;
        font-weight: 600;
    }

    p {
        line-height: 1.4;
        color: #555;
    }

    strong {
        font-weight: 700;
    }
`;

export default GlobalStyle;
