import NumericDataCard from "./NumericDataCard.jsx";
import {FaUser, FaUserCheck, FaUserNurse, FaUsers} from "react-icons/fa";
import {useEffect, useState} from "react";
import axios from "../services/axios.js";
import SexDataCard from "./SexDataCard.jsx";

export default function TopCards({ totalUsersData, consultationData, sexData }) {
  const [userCardDetails, setUserCardDetails] = useState("");
  const [userHoverDetails, setUserHoverDetails] = useState("");

  const [consultationCardDetails, setConsultationCardDetails] = useState("");
  const [consultationHoverDetails, setConsultationHoverDetails] = useState("");



  useEffect(() => {
    // user data
    const userCardDetailsString = totalUsersData.newUsersThisWeek == 1 ? totalUsersData.newUsersThisWeek + " usuario nuevo esta semana" : totalUsersData.newUsersThisWeek + " usuarios nuevos esta semana";
    setUserCardDetails(userCardDetailsString);

    let usersPastWeek = totalUsersData.newUsersPastWeek ? totalUsersData.newUsersPastWeek : 1;
    const percentage = Math.round((totalUsersData.newUsersThisWeek / usersPastWeek) * 100);
    console.log(percentage);

    const userHoverDetailsString = percentage + "% en comparación con la semana pasada";
    setUserHoverDetails(userHoverDetailsString);

    // consultation data
    const consultationCardDetailsString = consultationData.newConsultationsThisWeek == 1 ? consultationData.newConsultationsThisWeek + " consulta registrada esta semana" : consultationData.newConsultationsThisWeek + " consultas registradas esta semana";
    setConsultationCardDetails(consultationCardDetailsString);

    let consultationsPastWeek = consultationData.newConsultationsPastWeek ? consultationData.newConsultationsPastWeek : 1;
    const consultationPercentage = Math.round((consultationData.newConsultationsThisWeek / consultationsPastWeek) * 100);
    const consultationHoverDetailsString = consultationPercentage + "% en comparación con la semana pasada";
    setConsultationHoverDetails(consultationHoverDetailsString);
  }, []);


  return(
    <div className="flex gap-2 mb-2">
      <NumericDataCard
        title="Usuarios Totales"
        data={totalUsersData.totalUsers + " usuarios"}
        icon={ FaUser }
        details={ userCardDetails }
        detailsOnHover={ userHoverDetails }
      />

      <NumericDataCard
        title="Consultas Registradas"
        data={consultationData.totalConsultations + " consultas"}
        icon={ FaUserNurse }
        details={consultationCardDetails}
        detailsOnHover={consultationHoverDetails}
      />

      <SexDataCard data={sexData}
      />

      <NumericDataCard
        title="Usuarios Activos"
        data="36,230 usuarios"
        icon={ FaUserCheck}
        details="+20.1% del mes pasado"
        detailsOnHover="Hello world"
      />

    </div>
  );
}