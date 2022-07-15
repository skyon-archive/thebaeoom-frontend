import styled from "styled-components";

export const Container = styled.div`
    max-width: 1024px;
    width: 100%;
    margin: 32px auto;
`;

export const Table = styled.table`
    width: 100%;

    tr {
        border-bottom: 1px solid #ddd;
        height: 36px;

        :first-child {
            border-top: 1px solid #aaa;
            border-bottom: 1px solid #aaa;
        }

        :last-child {
            border-bottom: 1px solid #aaa;
        }
    }

    th {
        font-weight: bold;
    }

    th,
    td {
        vertical-align: middle;

        :nth-child(1) {
            width: 60px;
            text-align: center;
        }

        :nth-child(2) {
            padding: 0 16px;
        }

        :nth-child(3) {
            width: 120px;
            text-align: center;
        }

        :nth-child(4) {
            width: 80px;
            text-align: center;
        }
    }

    a {
        text-decoration: none;
        color: black;
    }
`;
