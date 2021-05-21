
import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  {
    name: 'M',
    tw: 60,
    lw: 55,
    amt: 2400,
  },
  {
    name: 'T',
    tw: 65,
    lw: 66,
    amt: 2210,
  },
  {
    name: 'W',
    tw: 44,
    lw: 60,
    amt: 2290,
  },
  {
    name: 'T',
    tw: 66,
    lw: 60,
    amt: 2000,
  },
  {
    name: 'F',
    tw: 55,
    lw: 45,
    amt: 2181,
  },
  {
    name: 'S',
    tw: 60,
    lw: 56,
    amt: 2500,
  },
  {
    name: 'S',
    tw: 64,
    lw: 59,
    amt: 2100,
  },
];

const Chart2 = () =>  (


<BarChart
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
          <YAxis name="Minutes" />
          <Tooltip />
          <Legend />
          <Bar dataKey="tw" name= "This Week" fill="#8884d8" />
          <Bar dataKey="lw" name= "Last Week" fill="#82ca9d" />
        </BarChart>

    );


    export default Chart2;