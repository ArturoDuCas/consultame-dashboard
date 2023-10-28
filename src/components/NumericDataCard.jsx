import {useState} from "react";

export default function NumericDataCard({title, data, icon: IconComponent, details, detailsOnHover}) {
  const [isHovered, setIsHovered] = useState(false);




  return(
    <div
      className="card flex-1 bg-base-100 border border-accent cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}

    >

      <div className="card-body p-4">
        <div className="flex justify-between">
          <p className="font-semibold">{title}</p>
          {IconComponent && <IconComponent />}
        </div>
        <h2 className="card-title font-bold text-3xl">{data}</h2>
        <p className="text-sm opacity-80 ">{isHovered ? detailsOnHover : details}</p>

      </div>
    </div>

  );
}