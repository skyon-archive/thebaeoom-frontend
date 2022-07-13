import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    height: 72px;
    border-bottom: 3px solid #374874;

    & > div {
        display: flex;
        align-items: center;
    }
`;
