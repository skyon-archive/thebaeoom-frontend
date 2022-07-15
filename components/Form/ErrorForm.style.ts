import styled from "styled-components";

export const Container = styled.div`
    width: 768px;
    margin: 32px auto;

    table {
        width: 100%;
        margin: 32px 0;
    }

    tr {
        border-top: 2px solid #aaa;
        border-bottom: 2px solid #aaa;
    }

    th,
    td {
        padding: 8px 12px;
        vertical-align: middle;
    }

    th {
        font-weight: bold;
    }
`;

export const SearchHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
`;

export const SearchBox = styled.div`
    border: 1px solid #ddd;
    display: flex;
    flex-direction: column;
    margin: 8px 0;

    input {
        border: none;
        padding: 12px 12px;
    }
`;

export const BookList = styled.div`
    height: 200px;
    overflow-y: scroll;
    padding: 0 12px;
    border-top: 1px solid #ddd;

    & > * {
        width: 100%;
    }

    div {
        display: flex;
        justify-content: center;
        margin: 8px 0;
    }
`;

export const Book = styled.button`
    background-color: transparent;
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
    border: none;
    padding: 8px 0;
    margin: 0;
    font-size: 14px;
    cursor: pointer;

    & + & {
        border-top: 1px solid #eee;
    }
`;

export const Title = styled.td`
    padding: 0 !important;

    input {
        border: none;
        padding: 16px 12px;
        width: calc(100% - 24px);
    }
`;

export const Button = styled.button`
    background-color: #374874;
    color: white;
    border: none;
    padding: 12px;
    font-size: 16px;
    cursor: pointer;
    width: 768px;
`;
