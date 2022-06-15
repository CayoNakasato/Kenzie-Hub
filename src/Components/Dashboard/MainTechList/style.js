import styled from "styled-components";

export const StyledTechList = styled.div`
  background-color: var(--gray3);
  border-radius: 5px;

  height: 60vh;
  max-height: 700px;
  width: 90%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  overflow-y: auto;

  margin: 0 auto;
  gap: 16px;
`;

export const Container = styled.div`
  display: flex;

  width: 100%;
`;
