import styled from "styled-components";

export const Container = styled.a`
    display: flex;
    flex-direction: row;
    text-decoration: none;
    border: 1px solid #eee;
    padding: 12px;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 16px;
    color: #555;
    font-size: 14px;

    & > div {
        display: flex;
        flex-direction: column;
    }
`;

export const Table = styled.table`
    margin-top: 16px;
    font-size: 14px;

    tr > * {
    }

    th {
        background-color: transparent;
        text-align: left;
        padding: 12px 16px 0 0;
        width: 40px;
    }

    td {
        padding: 12px 0 0;
    }
`;
