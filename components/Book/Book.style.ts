import styled from "styled-components";

export const Container = styled.a`
    display: flex;
    flex-direction: row;
    text-decoration: none;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 16px;

    & > div {
        display: flex;
        flex-direction: column;
    }
`;

// 1:1.4
