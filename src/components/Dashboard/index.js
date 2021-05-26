import React from 'react'
import "./Dashboard.css"
import Buzz from "./Buzz"
import Sentiment from "./Sentiment"
import WordCloud from "./WordCloud"
import Mention from "./Mention"
import Predictor from "./Predictor"
import { useContext } from 'react';
import { GlobalContext } from "../../context/Provider"
import Socket from "../../Socket"



const Dashboard = () => {
  const { authState: { auth }, time } = useContext(GlobalContext)
  // console.log("state:", auth && auth.loggedIn)
  return <div className="dashboard-body">
    <div>Time : {time}</div>
    <div className="card-bodyTop">
      <div className="card m-2 p-3 body-radius  one">
        <Predictor />
      </div>
      <div className="card m-2 p-3 body-radius two">
        <Sentiment />
      </div>
    </div>
    <div className="card-bodyTop">
      <div className="card m-2 p-3 body-radius three">
        <Buzz />
      </div>
      <div className="card m-2 p-3 body-radius five">
        <WordCloud />
      </div>
      <div className="card m-2 p-3 body-radius four ">
        <Mention />
      </div>
    </div>

    {/* <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div><div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
  </div>
}

export default Dashboard