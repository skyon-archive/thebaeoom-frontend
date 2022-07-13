import styled from "styled-components";

const ArticleLayout = styled.div`
    max-width: 1024px;
    width: 100%;
    margin: 32px auto;
    display: flex;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;

    & > div {
        width: 100%;
    }

    table {
        border-bottom: 1px solid black;
        border-collapse: collapse;
        width: 768px !important;
        margin: 0 auto;
    }

    tr {
        border-top: 1px solid black;
    }

    th {
        background-color: #f7f7f7;
        vertical-align: middle;
        text-align: center;
        padding: 20px;
        font-weight: bold;
        color: #374874;
    }

    td {
        padding: 20px;
        vertical-align: middle;
        line-height: 1.4;
    }
`;

export default ArticleLayout;
