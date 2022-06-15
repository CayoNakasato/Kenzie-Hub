import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { DashboardHeader } from "../../Components/Dashboard/HeaderDashboard";
import { DashboardInfo } from "../../Components/Dashboard/InfoDashboard";
import { DashboardMain } from "../../Components/Dashboard/MainDashboard";
import { ModalRegisterTech } from "../../Components/Dashboard/ModalRegisterTech";
import { api } from "../../services/script";
import { MainTechList } from "../../Components/Dashboard/MainTechList";
import { FiX } from "react-icons/fi";


export const Dashboard = ({ authenticated, setAuthenticated }) => {
  const [user, setUser] = useState([]);
  const [techList, setTechList] = useState([]);
  const [modal, setModal] = useState(false);
  const [modalTechCard, setModalTechCard] = useState(false);
  const [techId, setTechId] = useState("");
  const [update, setUpdate] = useState(false)

  const userId = localStorage.getItem("@Kenziehub:id");

  useEffect(() => {
    api
      .get(`/users/${userId}`)
      .then((res) => {
        setUser(res.data);
        setTechList(res.data.techs);
      })
      .catch((err) => console.log(err));
  }, [userId]);

  useEffect(()=>{
    api
    .get(`/users/${userId}`)
    .then((res) => {
      setTechList(res.data.techs);
      setUpdate(!update)
    })
    .catch((err) => console.log(err));
  }, [update])

  const toggleRegisterModal = () => {
    setModal(!modal);
  };

  const openCardModal = () => {
    setModalTechCard(true);
  };

  const closeCardModal = () => {
    setModalTechCard(false);
    console.log(modalTechCard)
  };

  if (!authenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <DashboardHeader setAuthenticated={setAuthenticated} />
      <DashboardInfo user={user} />
      <DashboardMain toggleRegisterModal={toggleRegisterModal} />

      {modal && (
        <ModalRegisterTech
          icon={FiX}
          toggleRegisterModal={toggleRegisterModal}
          techList={techList}
          setTechList={setTechList}
        />
      )}

      <MainTechList
        techList={techList}
        openCardModal={openCardModal}
        closeCardModal={closeCardModal}
        modalTechCard={modalTechCard}
        setTechId={setTechId}
        techId={techId}
        setTechList={setTechList}
        user={user}
      />
    </>
  );
};
