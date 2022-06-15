import { Container, InputContainer } from "./style";

export const InputPassword = ({ label, icon : Icon, register, name, error,togglePassword, iconS : IconS,active, ...rest }) => {


  return (
    <Container>
      <div>{label} {!!error && <span>- {error}</span>}</div>
      <InputContainer isErrored={!!error}>
        <input {...register(name)} {...rest} />
        {Icon && <button className="passwordBtn" onClick={(e)=>togglePassword(e)}> {active ? <IconS size={15}/> : <Icon size={15}/> }</button> }
      </InputContainer>
    </Container>
  );
};
