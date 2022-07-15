import styled, { css } from "styled-components";

export const Container = styled.a<{ active: boolean }>`
    display: flex;
    text-decoration: none;
    align-items: center;
    margin: 0 32px;
    font-size: 20px;
    font-weight: 500;
    color: #374874;

    ${({ active }) =>
        active &&
        css`
            font-weight: 700;
        `}
`;
