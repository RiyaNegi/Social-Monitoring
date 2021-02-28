import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: '1st Jan 2021',
        postive: 4000,
        negative: 2400,
        amt: 2400,
    },
    {
        name: '10th Jan 2021',
        postive: 3000,
        negative: 1398,
        amt: 2210,
    },
    {
        name: '20th Jan 2021',
        postive: 2000,
        negative: 9800,
        amt: 2290,
    },
    {
        name: '30th Jan 2021',
        postive: 2780,
        negative: 3908,
        amt: 2000,
    },
    {
        name: '10th Feb 2021',
        postive: 1890,
        negative: 4800,
        amt: 2181,
    },
    {
        name: '20th Feb 2021',
        postive: 2390,
        negative: 3800,
        amt: 2500,
    },
    {
        name: '30th Feb 2021',
        postive: 3490,
        negative: 4300,
        amt: 2100,
    },
];

const Linegraph = () => {
    return <ResponsiveContainer width="100%" height="100%">
        <LineChart
            width={200}
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
            <Line type="monotone" dataKey="negative" stroke="#FF8042" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="postive" stroke="#00C49F" />
        </LineChart>
    </ResponsiveContainer>
}

export default Linegraph

