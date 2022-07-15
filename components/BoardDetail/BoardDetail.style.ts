import styled from "styled-components";

export const Container = styled.div`
    max-width: 768px;
    width: 100%;
    margin: 32px auto 16px auto;
    border-top: 2px solid #aaa;
    border-bottom: 2px solid #aaa;

    & > div {
        padding: 20px;
        border-bottom: 1px solid #eee;
    }
`;

export const Info = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Content = styled.div`
    overflow: hidden;
`;
