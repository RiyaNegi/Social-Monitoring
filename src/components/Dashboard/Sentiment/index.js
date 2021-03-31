import React from 'react'
import Sentiment from "./Sentiment"
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import Line from "./Line"

const Index = () => {
    return <div className="d-flex flex-column px-3" >
        <div className="card-title text-center">Sentiment Analysis</div>
        <div className="d-flex">
            <div style={{ width: 125, height: 260 }}>
                <Sentiment />
            </div>
            <div style={{ width: 390, height: 260, marginRight: 50 }}>
                <Line />
            </div>
        </div>

    </div >
}

export default Index