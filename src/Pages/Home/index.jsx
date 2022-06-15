import { Redirect, useHistory } from "react-router-dom"
import { Button } from "../../Components/Global/Button"
import { Container, Content } from "./style"

export const Home = ({authenticated}) =>{

    const history = useHistory()

    const handleNavigation = (path) =>{
        return history.push(path)
    } 

    if(authenticated){
        return <Redirect to="/dashboard"/>
    }

    return(
    <Container>
        <Content>
        <h1>KenzieHub</h1>
        <span>Adicione tecnologias a sua biblioteca de conhecimentos!</span>
        <div>
            <Button onClick={()=> handleNavigation("/register")} pinkSchema>Cadastre-se</Button>
            <Button onClick={()=> handleNavigation("/login")}>Login</Button>
        </div>

        </Content>
    </Container>
    )
}