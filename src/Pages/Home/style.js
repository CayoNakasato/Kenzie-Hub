import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  height: 100vh;
`;

export const Content = styled.div`
  max-width: 500px;

  display: flex;
  flex-direction: column;

  h1 {
    color: #FF427F;
    font-size: 2.5rem;
  }
  span {
    color: #868E96;
    padding-top: 1rem;
    flex-wrap: wrap;
    font-size:1.4rem;
  }

  div {
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 2rem;
    button + button {
      margin-left: 1rem;
    }
  }
`;
