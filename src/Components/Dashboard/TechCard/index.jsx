import { ModalUpdateTech } from "../ModalUpdateTech";
import { StyledTechCard } from "./style";
import { FiX } from "react-icons/fi";

export const TechCard = ({
  tech,
  closeCardModal,
  modalTechCard,
  techId,
  setTechList,
  techList,
  user,
  openCardModal,
}) => {
  return (
    <>
      {modalTechCard && (
        <ModalUpdateTech
          icon={FiX}
          closeCardModal={closeCardModal}
          techId={techId}
          techTitle={tech.title}
          setTechList={setTechList}
          techList={techList}
          modalTechCard={modalTechCard}
          user={user}
        />
      )}

      <StyledTechCard onClick={openCardModal}>
        <h2>{tech.title}</h2>
        <span>{tech.status}</span>
      </StyledTechCard>
    </>
  );
};
