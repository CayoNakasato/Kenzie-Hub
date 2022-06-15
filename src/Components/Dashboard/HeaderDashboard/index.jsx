import { useHistory } from "react-router-dom";
import { Button } from "../../Global/Button";
import { StyledDashboardHeader } from "./style";

export const DashboardHeader = ({ setAuthenticated }) => {
  const history = useHistory();

  const logout = () => {
    localStorage.clear();
    setAuthenticated(false);
    return history.push("/");
  };
  return (
    <>
      <StyledDashboardHeader>
        <h1>Kenzie Hub</h1>
        <Button pinkSchema onClick={logout}>
          Sair
        </Button>
      </StyledDashboardHeader>
    </>
  );
};
