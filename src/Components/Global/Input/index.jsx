import { Container, InputContainer } from "./style";

export const Input = ({ label, register, name, error, ...rest }) => {
  return (
    <Container>
      <div>{label} {!!error && <span>- {error}</span>}</div>
      <InputContainer isErrored={!!error}>
        <input {...register(name)} {...rest} />
      </InputContainer>
    </Container>
  );
};
