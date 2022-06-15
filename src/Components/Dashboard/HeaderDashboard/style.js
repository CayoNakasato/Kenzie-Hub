import styled from "styled-components"

export const StyledDashboardHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 6rem;

    h1{
        color: var(--pink);   

        font-size: 1.5rem;

        margin-left: 10px;
    }

    button{
        background-color: var(--gray3);

        font-size: 1rem;

        width: 5rem;
        margin-right: 10px;
    }
    
`