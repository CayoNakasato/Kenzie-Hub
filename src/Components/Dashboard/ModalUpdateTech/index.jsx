import { useForm } from "react-hook-form";
import { api } from "../../../services/script";
import { Button } from "../../Global/Button";
import { InputTechUpdate } from "../../Global/InputTechUpdate";
import {
  StyledModalForm,
  StyledModalHeader,
  StyledModalUpdateTech,
  StyleModalContainer,
} from "./style";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

export const ModalUpdateTech = ({
  icon: Icon,
  closeCardModal,
  techId,
  modalTechCard,
  user,
  setUpdate
}) => {

  const [title, setTitle] = useState("");

  useEffect(() => {
    console.log(modalTechCard, "Aqui")
   
    if (modalTechCard) {
      const techs = user.techs;

      const selectTech = techs.find((tech) => tech.id === techId);

      setTitle(selectTech.title);
    }
  }, []);

  const token = localStorage.getItem("@Kenziehub:token");

  const { register, handleSubmit } = useForm();


  const updateTech = (data) => {
    api
      .put(`/users/techs/${techId}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        toast.success("Tecnologia atualizada com sucesso");
        closeCardModal();

      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteTech = () => {
    api
      .delete(`/users/techs/${techId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        toast.success("Tecnologia apagada com sucesso");
        closeCardModal();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <StyledModalUpdateTech>
      <StyleModalContainer>
        <StyledModalHeader>
          <h2>Tecnologia Detalhes</h2>
          <button onClick={()=>{closeCardModal()}
            }>
            <Icon size={20} />
          </button>
        </StyledModalHeader>

        <StyledModalForm onSubmit={handleSubmit(updateTech)}>
          <InputTechUpdate
            type="text"
            label={"Nome da Tecnologia"}
            value={title}
            disabled
            register={register}
            required
          />

          <label>Status</label>

          <select name="status" {...register("status")} required>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>

          <Button type="submit " onSubmit={updateTech}>
            Salvar Alterações
          </Button>

          <Button onClick={deleteTech}>Excluir</Button>
        </StyledModalForm>
      </StyleModalContainer>
    </StyledModalUpdateTech>
  );
};
