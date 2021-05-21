import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const data = [
  {
    name: '1 Jan',
    weight: 110,
    amt: 160,
  },
  {
    name: '8 Jan',
    weight: 109,
    amt: 160,
  },
  {
    name: '15 Jan',
    weight: 108,
    amt: 160,
  },
  {
    name: '22 Jan',
    weight: 106,
    amt: 160,
  },
  {
    name: '29 Jan',
    weight: 104,
    amt: 160,
  },

];


const Chart = () => {
  return(
 <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="weight" stroke="orange" activeDot={{ r: 8 }} />
      </LineChart>
  );
}

export default Chart;


