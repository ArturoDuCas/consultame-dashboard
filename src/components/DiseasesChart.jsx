import {useState} from "react";
import {FaDisease} from "react-icons/fa";
import {Pie, PieChart, Tooltip, ResponsiveContainer} from "recharts";

export default  function DiseasesChart ({ data })  {
  const [activeKey, setActiveKey] = useState(0);


  let keys = data ? Object.keys(data) : null;
  let displayData = data ? data[keys[activeKey]] : null;
  return (
    <div className="card w-3/4 bg-base-100 border border-accent cursor-pointer p-3">
      <div className="flex align-middle gap-4">
        <h2 className="card-title font-bold text-3xl">Desglose de Enfermedades</h2>
        <div className="tabs tabs-boxed justify-center flex-1">
        {keys.map((key, index) => (
          <a
            className={`tab ${activeKey  === index ? 'tab-active' : ''}`}
            key={key}
            onClick={() => setActiveKey(index)}
          >
            {key}
          </a>
        ))}
        </div>
      </div>

      <ResponsiveContainer height={300}>
        <PieChart >
          <Pie
            data={displayData}
            dataKey="occurrences"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#6419E6"
            label={(entry) => entry.name}
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>

    </div>
  )
}