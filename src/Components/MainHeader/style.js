import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;

    margin-top: 20px;
    margin-bottom: 20px;

    h2{
        padding-left: 1rem;
        color: var(--gray0);
    }
    button{
        margin-right: 1rem;
        width: 2rem;
        height: 2rem;

        border: none;
        border-radius: 8px;

        background-color: var(--gray3);
        color: var(--gray0);
    }
`