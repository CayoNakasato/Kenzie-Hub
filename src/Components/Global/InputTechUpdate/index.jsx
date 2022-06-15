import { Container, InputContainer } from "./style";

export const InputTechUpdate= ({ label, name, error,register, ...rest }) => {

  return (
    <Container>
      <div>{label} {!!error && <span>- {error}</span>}</div>
      <InputContainer isErrored={!!error}>
          <input {...rest} />
      </InputContainer>
    </Container>
  );
};