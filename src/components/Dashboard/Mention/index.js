import React from 'react'
import "./Mention.css"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: '1st Jan 2021',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: '10th Jan 2021',
        uv: 2000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: '20th Jan 2021',
        uv: 900,
        pv: 9800,
        amt: 2290,
    },
    {
        name: '30th Jan 2021',
        uv: 1280,
        pv: 3908,
        amt: 2000,
    },
    {
        name: '10th Feb 2021',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: '20th Feb 2021',
        uv: 1000,
        pv: 3800,
        amt: 2500,
    },
    {
        name: '30th Feb 2021',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
    {
        name: '10th Mar 2021',
        uv: 1000,
        pv: 4300,
        amt: 2100,
    },
    {
        name: '20th Mar 2021',
        uv: 2490,
        pv: 4300,
        amt: 2100,
    },
    {
        name: '30th Mar 2021',
        uv: 1400,
        pv: 4300,
        amt: 2100,
    },
    {
        name: '10th Apr 2021',
        uv: 3400,
        pv: 1398,
        amt: 2210,
    },
    {
        name: '20th Apr 2021',
        uv: 2500,
        pv: 9800,
        amt: 2290,
    },
    {
        name: '30th Apr 2021',
        uv: 1280,
        pv: 3908,
        amt: 2000,
    },
];


const Index = () => {
    return <div className="card-width d-flex flex-column px-3" style={{ width: 700, height: 250 }}>
        <div className="card-title text-center">Mentions </div>
        < ResponsiveContainer width="100%" height="100%">
            <AreaChart
                width={200}
                height={150}
                data={data}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
        </ResponsiveContainer>
    </div >

}

export default Index