import styled from "styled-components";

export const Container = styled.div`
    width: 1024px;
    margin: 32px auto;
    border: 1px solid #eee;
    padding: 20px;
    text-align: center;
`;

export const List = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    width: min-content;
    margin: 32px auto 0 auto;
    gap: 32px;
`;
