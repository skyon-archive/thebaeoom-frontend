import styled from "styled-components";

export const Container = styled.div`
    border-top: 1px solid #eee;
    margin: 32px 0;
    padding: 32px 0;
    line-height: 1.4;

    & > div {
        max-width: 1024px;
        width: 100%;
        margin: 0 auto;
        color: #777;
        line-height: 1.4;
        font-size: 14px;
    }
`;
