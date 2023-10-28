import {useEffect, useState} from "react";
import { FaHospitalAlt } from "react-icons/fa";

export default function HospitalsData({data}) {
  const [totalVisits, setTotalVisits] = useState(0);

  useEffect(() => {
    let total = 0;
    data.forEach(hospital => {
      total += hospital.occurrences;
    });
    setTotalVisits(total);
  })

  return(
    <>

    <div className="card w-1/4 bg-base-100 border border-accent cursor-pointer py-3 px-3">
      <h2 className="text-3xl font-bold">Hospitales más visitados</h2>
      <p className="font-thin text-sm mb-4">Se muestran un total de {totalVisits} visitas</p>

    <div className="flex flex-col">

      {data.map((hospital, index) => (
        <div key={index} className="flex justify-between mb-4 items-center px-2">
          <div className="flex gap-3 items-center w-3/4">
            <div className="avatar placeholder">
              <div className="bg-primary text-neutral-content rounded-full w-8">
                <FaHospitalAlt />
              </div>
            </div>
            <p className="font-bold">{hospital.name}</p>
          </div>

          <p className="font-thin">{hospital.occurrences}</p>

        </div>
      ))}
    </div>
    </div>
    </>
  );
}