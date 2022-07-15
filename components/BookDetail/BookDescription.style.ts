import styled, { css } from "styled-components";

export const Container = styled.div`
    max-width: 768px;
    width: 100%;
    margin: 48px auto;
`;

export const Tab = styled.div`
    display: flex;
    gap: 4px;
`;

export const TabButton = styled.button<{ active: boolean }>`
    border: 1px solid #ddd;
    background-color: white;
    padding: 12px 24px;
    font-size: 16px;
    cursor: pointer;

    ${({ active }) =>
        active &&
        css`
            background-color: #eee;
        `}
`;
