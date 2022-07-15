import styled from "styled-components";

export const Container = styled.div`
    max-width: 1024px;
    width: 100%;
    margin: 32px auto;

    & > * {
        width: 100%;
    }

    tr {
        border-top: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
    }

    th,
    td {
        padding: 8px 12px;
        vertical-align: middle;
        border-left: 1px solid #ddd;
        border-right: 1px solid #ddd;
    }

    th {
        font-weight: bold;
    }

    button {
        background-color: #374874;
        color: white;
        border: none;
        margin: 32px 0;
        padding: 12px;
        font-size: 16px;
        cursor: pointer;
    }
`;

export const Header = styled.div`
    width: 100%;
    margin: 32px 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: start;
    gap: 32px;
`;

export const Field = styled.td`
    padding: 0 !important;

    input {
        border: none;
        padding: 16px 12px;
        width: calc(100% - 24px);
    }
`;

export const Flex = styled.div`
    display: flex;
    flex-direction: column;

    & > div {
        display: flex;
        align-items: flex-start;

        & > div {
            border: 1px solid #ddd;
            text-align: center;
            padding: 8px 12px;
            min-height: 48px;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            & > * {
                width: 100%;
            }

            :first-child {
                width: 160px;
                font-weight: bold;
                border-right: none;
            }
        }
    }
`;
