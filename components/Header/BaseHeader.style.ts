import styled, { css } from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 1024px;
    margin: 24px auto;
`;

export const Title = styled.div`
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border-bottom: 1px solid #ddd;

    h1 {
        z-index: 1;
    }
`;

export const Menu = styled.div`
    display: flex;
    height: 48px;
    align-items: center;
    justify-content: center;
    border-bottom: 2px solid #ddd;

    & > * {
        margin: 0 16px;
    }
`;

export const MenuItem = styled.a<{ active: boolean }>`
    text-decoration: none;
    color: black;
    ${({ active }) =>
        active &&
        css`
            font-weight: bold;
            color: #374874;
        `}
`;
