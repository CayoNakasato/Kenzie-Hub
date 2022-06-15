import { Container, InputContainer } from "./style";

export const InputTechAdd = ({ label, name, error,register, ...rest }) => {

  return (
    <Container>
      <div>{label} {!!error && <span>- {error}</span>}</div>
      <InputContainer isErrored={!!error}>
          <input {...register(name)}{...rest} />
      </InputContainer>
    </Container>
  );
};