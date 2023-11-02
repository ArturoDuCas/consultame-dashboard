
import {FaUsers} from "react-icons/fa";
import {useEffect, useState} from "react";
export default function SexDataCard({ data }) {
  const [males, setMales] = useState(1);
  const [women, setWomen] = useState(1);

  useEffect(() => {
    setMales(data.find(sex => sex.type === 'Masculino').count);
    setWomen(data.find(sex => sex.type === 'Femenino').count);
  }, []);

  return(
    <div
      className="card flex-1 bg-base-100 border border-accent cursor-pointer"
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
                { males / (males + women) * 100}%
              </span>
            </div>
            <div className="flex-1 flex justify-center items-center">
              <span className="card-title font-bold text-3xl">
                { women / (males + women) * 100}%
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

      </div>
    </div>

  );
}