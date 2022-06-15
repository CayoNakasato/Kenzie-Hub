import styled, { keyframes } from "styled-components";
import registerImg from "../../assets/registerImg.svg";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
  justify-content: center;
`;

export const Background = styled.div`
  @media (min-width: 1100px) {
    flex: 1;
    background: url(${registerImg}) no-repeat center, #000000;
    background-size: contain;
    margin-right: 10vw;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 800px;
  width: 300px;

  text-align: center;

  display: flex;
  flex-direction: column;

  h2 {
    color: #ff427f;
    font-size: 2.5rem;
  }
  p {
    margin-top: 1rem;
    color: #868e96;
  }
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

  @media (min-width: 1100px) {
    margin-left: 20vw;
    margin-right: 10vw;
  }
`;

const appearFromLeft = keyframes`
 from{
    opacity: 0;
    transform: translate(-50px);
}
 to{
    opacity: 1;
    transform:translate(0px);
}
`;

export const AnimationContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromLeft} 1.5s;
`;
