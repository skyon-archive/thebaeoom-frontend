import styled, { css } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin: 32px auto;
`;

export const Tab = styled.div<{ active: boolean }>`
    display: flex;
    padding: 12px 16px;
    cursor: pointer;

    border: 1px solid #ddd;

    & + & {
        border-left: none;
    }

    ${({ active }) =>
        active &&
        css`
            background-color: #eee;
        `}
`;
