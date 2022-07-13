import styled from "styled-components";

export const Container = styled.div`
    display: flex;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 32px;
    justify-content: space-between;
`;

export const Table = styled.table`
    margin-top: 16px;
    font-size: 14px;

    tr > * {
    }

    th {
        background-color: transparent;
        text-align: left;
        padding: 8px 16px 8px 0;
        width: 56px;
    }

    td {
        padding: 8px 32px 8px 0;
    }
`;
