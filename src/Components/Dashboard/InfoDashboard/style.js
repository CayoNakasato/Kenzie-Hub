import styled from "styled-components";

export const Container = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 20px;

  height:130px;

  border-bottom:2px solid var(--gray3) ;
  border-top: 2px solid var(--gray3) ;

  h1 {
    color: var(--gray0);
    font-size: 1.5rem;
    font-weight: 500;
  }

  h3 {
    color: var(--gray1);
    font-size: .8rem;
  }

  h1, h3{
    padding-left: 1rem;
  }
`;
