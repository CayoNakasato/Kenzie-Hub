import { Container } from "./style";

export const DashboardInfo = ({user}) =>{
    
    return(
        <Container>
            <h1>Olá, {user.name}</h1>
            <h3>{user.course_module}</h3>
        </Container>
    )

}