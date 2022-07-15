import styled from "styled-components";

export const Container = styled.form`
    margin: 32px auto;
    width: 50%;
    display: flex;

    button {
        border: 1px solid #ddd;
        width: 60px;
        cursor: pointer;
    }
`;

export const Input = styled.input`
    flex-grow: 1;
    border: 1px solid #ddd;
    padding: 8px;
`;
