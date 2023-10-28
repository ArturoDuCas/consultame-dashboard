import {useEffect, useState} from "react";
import {FaUsers} from "react-icons/fa";
export default function SexDataCard({ data }) {
  const [isHovered, setIsHovered] = useState(false)

  return(
    <div
      className="card flex-1 bg-base-100 border border-accent cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}

    >




      <div className="card-body p-4">
        <div className="flex justify-between">
          <p className="font-semibold">Desglose Por Género</p>
          <FaUsers />
        </div>

        <div className="pr-4">
          <div className="flex">
            <div className="flex-1 flex justify-center items-center">
              <span className="card-title font-bold text-3xl">
                { data.Masculino / (data.Masculino + data.Femenino) * 100}%
              </span>
            </div>
            <div className="flex-1 flex justify-center items-center">
              <span className="card-title font-bold text-3xl">
                { data.Femenino / (data.Masculino + data.Femenino) * 100}%
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="flex-1 flex justify-center items-center">
              <p className="text-sm opacity-80 text-center">
                Masculino
              </p>
            </div>
            <div className="flex-1 flex justify-center items-center text-center">
              <p className="text-sm opacity-80">
                Femenino
              </p>
            </div>
          </div>
        </div>
        {/*<h2 className="card-title font-bold text-3xl">{data}</h2>*/}
        {/*<p className="text-sm opacity-80">{isHovered ? detailsOnHover : details}</p>*/}

      </div>
    </div>

  );
}