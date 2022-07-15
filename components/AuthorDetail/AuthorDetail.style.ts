import styled from "styled-components";

export const Container = styled.div`
    max-width: 768px;
    margin: 32px auto;
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    justify-content: space-between;
    gap: 12px 0;
`;

export const SocialLink = styled.div`
    display: flex;
    gap: 16px;
    margin: 32px 0;
`;
