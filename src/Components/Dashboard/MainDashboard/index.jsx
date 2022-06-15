import { MainHeader } from "../../MainHeader";
import {FiPlus} from "react-icons/fi"

export const DashboardMain = ({toggleRegisterModal}) => {
  return (
    <MainHeader toggleRegisterModal={toggleRegisterModal} icon={FiPlus}/>
  );
};
