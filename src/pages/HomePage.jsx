import TopCards from "../components/TopCards.jsx";
import ContactsChart from "../components/ContactsChart.jsx";
import DiseasesChart from "../components/DiseasesChart.jsx";
import {useEffect, useState} from "react";
import axios from "../services/axios.js";
import HospitalsData from "../components/HospitalsData.jsx";
import BadHabitsChart from "../components/BadHabitsChart.jsx";

export default function HomePage() {
  const [diseasesData, setDiseasesData] = useState(null);
  const [totalUsersData, setTotalUsersData] = useState(null);
  const [consultationData, setConsultationData] = useState(null);
  const [hospitalData, setHospitalData] = useState(null);
  const [contactsData, setContactsData] = useState(null);
  const [badHabitsData, setBadHabitsData] = useState(null);
  const [sexData, setSexData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await requester('/count/disease');
        setDiseasesData(response);

        response = await requester('/count/user');
        setTotalUsersData(response);

        response = await requester('/count/consultation');
        setConsultationData(response);

        response = await requester('/count/hospital');
        setHospitalData(response);

        response = await requester('/count/contacts');
        setContactsData(response);

        response = await requester('/count/bad_habits');
        setBadHabitsData(response);

        response = await requester('/count/sex');
        setSexData(response);




      } catch (error) {
        console.error('Error in fetchData: ', error);
      }
    }

    async function requester(url) {
      try {
        const response = await axios.get(url);
        return response.data;
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    }

    fetchData();
  }, []);


  return(
    <div className="w-full p-3">
      { diseasesData && totalUsersData && consultationData && hospitalData && sexData? (
        <>
          <TopCards totalUsersData={totalUsersData} consultationData={consultationData} sexData={sexData}/>
          <div className="flex gap-2 mb-2">
            <DiseasesChart key={Date.now() + "1"} data={diseasesData} />
            <HospitalsData data={hospitalData} />
          </div>
          <div className="flex gap-2">
            <ContactsChart data={contactsData}/>
            <BadHabitsChart data={badHabitsData} />
          </div>
        </>
      ) : (
        <div className="flex justify-center align-middle py-8">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      )}
    </div>
  );
}