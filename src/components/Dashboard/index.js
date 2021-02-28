import React from 'react'
import "./Dashboard.css"
import Random from "./Random"
import Sentiment from "./Sentiment"
import WordCloud from "./WordCloud"
import Mention from "./Mention"
import person from "../../assets/person.png"

const Dashboard = () => {
    return <div className="dashboard-body">
        <div className="d-flex flex-wrap">
            <div className="card-body">
                <Mention />
            </div>
            <div className="card-body">
                <Random />
            </div>
        </div>
        <div className="d-flex flex-wrap">
            <div className="card-body">
                <Sentiment />
            </div>
            <div className="card-body">
                <WordCloud />
            </div>
        </div>
        {/* <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div><div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
    </div>
}

export default Dashboard