import { TechCard } from "../TechCard";
import { Container, StyledTechList } from "./style";

export const MainTechList = ({
  techList,
  openCardModal,
  closeCardModal,
  modalTechCard,
  setTechId,
  techId,
  setTechList,
  user,
}) => {
  return (
    <StyledTechList>
      {techList?.map((tech) => {
        return (
          <Container
            key={tech.id}
            onClick={() => {
              setTechId(tech.id);
            }}
          >
            <TechCard
              id={tech.id}
              tech={tech}
              closeCardModal={closeCardModal}
              modalTechCard={modalTechCard}
              techId={techId}
              setTechList={setTechList}
              techList={techList}
              user={user}
              openCardModal={openCardModal}
            />
          </Container>
        );
      })}
    </StyledTechList>
  );
};
