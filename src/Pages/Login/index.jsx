import { useForm } from "react-hook-form";
import { Link, Redirect, useHistory } from "react-router-dom";
import { Button } from "../../Components/Global/Button";
import { Input } from "../../Components/Global/Input";
import { AnimationContent, Background, Container, Content } from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services/script";
import { toast } from "react-toastify";
import {FiEye, FiEyeOff} from "react-icons/fi"
import { InputPassword } from "../../Components/Global/InputPassword";
import { useState } from "react";

export const Login = ({authenticated, setAuthenticated}) => {
    const [active, setActive] = useState(false);

  const schema = yup.object().shape({
    email: yup.string().required("Campo Obrigatório"),
    password: yup
      .string()
      .min(8, "Mínimo de 8 dígitos")
      .required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    reValidateMode: "onSubmit",
  });

  const history = useHistory();

  const onSubmitFunction = (data) => {
    api
      .post("/sessions", data)
      .then((res) => {
        toast.success("Logado com sucesso!");

        localStorage.setItem("@Kenziehub:token", res.data.token)
        localStorage.setItem("@Kenziehub:id", res.data.user.id)

        setAuthenticated(true)

        return history.push("/dashboard");
      })
      .catch((_) => toast.error("Ops... Email ou senha inválidos!"));
  };

  if(authenticated){
    return <Redirect to="/dashboard"/>
  }

  const togglePassword = (e) =>{
    e.preventDefault()
    setActive(!active)
  }


  return (
    <Container>
      <Background />
      <Content>
        <AnimationContent>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h2>Login</h2>
            <Input
              type="text"
              name="email"
              register={register}
              label={"Email"}
              placeholder="Digite aqui seu email"
              error={errors.email?.message}
            />
            <InputPassword
              type={active ? "text" : "password" }
              register={register}
              name="password"
              label={"Senha"}
              placeholder="Digite aqui sua senha"
              error={errors.password?.message}
              icon={FiEye}
              iconS={FiEyeOff}
              togglePassword={togglePassword}
              active={active}
            />
            <Button type="submit">Entrar</Button>
            <p>
              Ainda não possui uma conta? <Link to="/register">Cadastre-se</Link>
            </p>
          </form>
        </AnimationContent>
      </Content>
    </Container>
  );
};
