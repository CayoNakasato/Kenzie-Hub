import { useForm } from "react-hook-form";
import { api } from "../../../services/script";
import { Button } from "../../Global/Button";

import {
  StyledModalForm,
  StyledModalHeader,
  StyledModalRegisterTech,
  StyleModalContainer,
} from "./style";
import { toast } from "react-toastify";
import { InputTechAdd } from "../../Global/InputTechAdd";

const token = localStorage.getItem("@Kenziehub:token");

export const ModalRegisterTech = ({
  icon: Icon,
  toggleRegisterModal,
  techList,
  setTechList,
}) => {
  const { register, handleSubmit } = useForm();

  const onSubmitFunction = (data) => {
    api
      .post(
        "/users/techs",
        {
          title: data.title,
          status: data.status,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setTechList([...techList, res.data]);
        toggleRegisterModal();
        toast.success("Tecnologia adicionada com sucesso!");
      })
      .catch((_) => toast.error("Ops... Ocorreu um erro!"));
  };

  return (
    <StyledModalRegisterTech>
      <StyleModalContainer>
        <StyledModalHeader>
          <h2>Cadastrar Tecnologia</h2>
          <button onClick={toggleRegisterModal}>
            <Icon size={20} />
          </button>
        </StyledModalHeader>
        <StyledModalForm onSubmit={handleSubmit(onSubmitFunction)}>
          <InputTechAdd
            type="text"
            name="title"
            register={register}
            label={"Nome"}
            placeholder="Digite uma tecnologia"
            required
          />
          <label>Selecionar Status</label>
          <select name="status" required {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <Button type="submit">Cadastrar Tecnologia</Button>
        </StyledModalForm>
      </StyleModalContainer>
    </StyledModalRegisterTech>
  );
};
