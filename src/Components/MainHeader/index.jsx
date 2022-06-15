import { Container } from "./style";

export const MainHeader = ({ icon: Icon, toggleRegisterModal }) => {
  return (
    <Container>
      <h2>Tecnologias</h2>
      <button onClick={toggleRegisterModal}>
        <Icon size={25} />
      </button>
    </Container>
  );
};
