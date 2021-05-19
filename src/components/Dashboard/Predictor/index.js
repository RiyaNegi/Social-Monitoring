import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Tooltipp from 'react-bootstrap/Tooltip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
const data = [
    {
        name: '1st Jan',
        low: 5,
        high: 2,
        amt: 2,
    },
    {
        name: '2nd Jan',
        low: 2,
        high: 5,
        amt: 2,
    },
    {
        name: '3rd Jan',
        low: 9,
        high: 7,
        amt: 2,
    },
    {
        name: '4th Jan',
        low: 1,
        high: 3,
        amt: 2,
    },
    {
        name: '5th Jan',
        low: 5,
        high: 9,
        amt: 2,
    },
    {
        name: '6th Jan',
        low: 1,
        high: 3,
        amt: 2,
    },
    {
        name: '7th Jan',
        low: 5,
        high: 4,
        amt: 2,
    }
];

const Predictor = () => {
    return <div style={{ width: 700, height: 260 }}>
        <OverlayTrigger
            placement={'right'}
            overlay={
                <Tooltipp style={{ opacity: 0.7 }} >
                    See how much outreach your brand is getting across various social media platforms
        </Tooltipp>
            }
        >
            <div className="card-title text-left">Outreach Predictor</div>
        </OverlayTrigger>
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
                {/* <defs>
                    <linearGradient id="colorlow" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#E25960" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#E25960" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorhigh" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#323232" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#323232" stopOpacity={0} />
                    </linearGradient>
                </defs> */}
                <XAxis dataKey="name" />
                {/* <CartesianGrid strokeDasharray="5 5" /> */}
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="low" stroke="#627aa4" fill="#627aa4" />
                <Area type="monotone" dataKey="high" stroke="#eb8c9c" fill="#eb8c9c" />
            </AreaChart>
        </ResponsiveContainer>
    </div>
}

export default Predictor

