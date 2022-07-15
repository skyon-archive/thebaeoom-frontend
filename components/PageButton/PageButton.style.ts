import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 32px auto;
    gap: 4px;

    button {
        border: 1px solid #eee;
        padding: 8px 12px;
        background-color: transparent;
        cursor: pointer;
    }

    svg {
        color: black;
        width: 12px;
        height: 12px;
    }
`;
