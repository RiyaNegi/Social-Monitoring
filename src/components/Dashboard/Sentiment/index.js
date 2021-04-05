import React from 'react'
import Sentiment from "./Sentiment"
import Line from "./Line"
import Tooltip from 'react-bootstrap/Tooltip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

const Index = () => {
    return <div className="d-flex flex-column px-3" >
        <OverlayTrigger
            placement={'right'}
            overlay={
                <Tooltip style={{ opacity: 0.7 }} >
                    See the sentiments of all the mentions of your brand across various social media platforms and how the audience is receiving it
                 </Tooltip>}
        >
            <div className="card-title text-left">Sentiment Analysis</div>
        </OverlayTrigger>
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