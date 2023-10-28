import {BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar, Legend, ResponsiveContainer} from 'recharts';
export default function ContactsChart({ data }) {



  return(
      <div className="w-1/2 card bg-base-100 border border-accent cursor-pointer p-3">
        <h2 className="card-title font-bold text-3xl mb-4">Contactos más frecuentes</h2>
        <ResponsiveContainer height={300}>
          <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <XAxis dataKey="type" />
            <YAxis t />
            <Tooltip />
            <Bar dataKey="occurrences" fill="#6419E6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
  );
}