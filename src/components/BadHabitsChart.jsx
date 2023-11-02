import {Cell, Pie, PieChart, ResponsiveContainer, Tooltip} from "recharts";
import { COLORS } from "../config/themesConfig.js";

export default  function BadHabitsChart ({ data })  {

  return (
    <div className="card w-1/2 bg-base-100 border border-accent cursor-pointer p-3">
        <h2 className="card-title font-bold text-3xl">Hábitos frecuentes</h2>

      <ResponsiveContainer height={300}>
        <PieChart >
          <Pie
            data={data}
            dataKey="occurrences"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#6419E6"
            label={(entry) => entry.name}
          >
          <Tooltip />
            {
              data.map((entry, index) => (
                <Cell key={`habits-cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))
            }
          </Pie>
        </PieChart>
      </ResponsiveContainer>

    </div>
  )
}