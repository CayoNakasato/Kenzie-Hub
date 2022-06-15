import styled, { css } from "styled-components";

export const Container = styled.div`
  text-align: left;
  width: 100%;
  div {
    color: #666360;
    padding-left: 10px;
    margin: 5px 0;
    span{
        color: #c53030;
    }
  }
`;

export const InputContainer = styled.div`
  background-color: #ffffff;
  color: #666360;

  border-radius: 10px;
  border: 2px solid #666360;

  display: flex;
  align-items: center;
  padding: 1rem;
  width: 100%;

  transition: 0.4s;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  input {
    background: transparent;
    align-items: center;
    flex: 1;

    color: #000000;
    border: none;
    &::placeholder {
      color: #666360;
    }
  }
`;
