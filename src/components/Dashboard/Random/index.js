import React from 'react'
import Random from "./Random"
import youtube from "../../../assets/youtube.png"
import reddit from "../../../assets/reddit.png"
import google from "../../../assets/google.png"

const Index = () => {
    return <div className="d-flex flex-column p-1 px-3">
        <div className="card-title text-center">Social Media Buzz        </div>
        <div className="social-body ">
            <div className="social-title d-flex">
                <div className="social-img"><img src={youtube} /></div>
                <div className="flex-column">
                    <div className="social-title ml-3 font-weight-bold">Youtube</div>
                    <div style={{ width: 600, marginLeft: 20 }}>Hey! tried this new energy drink and it was great! must try! Totally recommended, especially for summers!</div>
                    <hr style={{ outline: "none", border: "none", backgroundColor: "gray", height: 0.5, width: "100%" }} />
                </div>
            </div>
            <div className="social-title d-flex">
                <div className="social-img"><img src={google} /></div>
                <div className="flex-column">
                    <div className="social-title ml-3 font-weight-bold">Google</div>
                    <div style={{ width: 600, marginLeft: 20 }}>Hey! tried this new energy drink and it was great! must try!</div>
                    <hr style={{ outline: "none", border: "none", backgroundColor: "gray", height: 0.5, width: "100%" }} />
                </div>
            </div>
            <div className="social-title d-flex">
                <div className="social-img"><img src={reddit} /></div>
                <div className="flex-column">
                    <div className="social-title ml-3 font-weight-bold">Reddit</div>
                    <div style={{ width: 600, marginLeft: 20 }}>Hey! tried this new energy drink and it was great! must try! Totally recommended, especially for summers!</div>
                </div>
            </div>
        </div>
    </div>
}

export default Index