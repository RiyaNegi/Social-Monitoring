import React from 'react'
import Sentiment from "./Sentiment"
import Line from "./Line"

const Index = () => {
    return <div className="d-flex flex-column px-3" >
        <div className="card-title text-left">Sentiment Analysis</div>
        <div className="d-flex">
            <div style={{ width: 195, height: 260 }}>
                <Sentiment />
            </div>
            <div style={{ width: 520, height: 260 }}>
                <Line />
            </div>
        </div>

    </div >
}

export default Index