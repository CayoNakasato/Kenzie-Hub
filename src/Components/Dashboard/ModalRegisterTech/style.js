import styled from "styled-components";

export const StyledModalRegisterTech = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  position: fixed;
  inset: 0;

  margin: 0 auto;

  background-color: rgba(0,0,0, 0.75);
`;

export const StyleModalContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   max-width: 600px;
   min-width: 300px;

   height: 70vh;
   width: 85vw;
`

export const StyledModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: var(--gray2);

  width: 100%;
  height: 3rem;

  h2 {
    font-size: 1rem;
    color: var(--gray0);
    padding-left: 1rem;
  }

  button {
    background-color: var(--gray2);
    border: none;

    padding-right: 1rem;
    margin-top: 5px;
  }
`;

export const StyledModalForm = styled.form`
  display: flex;
  flex-direction: column;

  background-color: var(--gray3);

  width: 100%;
  padding: 1rem;

  label {
    color: #666360;
    display: flex;
    justify-content: flex-start;

    padding-left: 10px;
    margin: 5px 0;
  }

  select {
    border-radius: 10px;
    border: 2px solid #666360;

    display: flex;

    padding: 1rem;
    margin-bottom: 1rem;

    width: 100%;
  }

  button{
    font-size: 1rem;
  }

`;
