import React from 'react'
import "./Auth.css"
import SignImg from "../../assets/SignImg.png"
import {Form, Button} from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import {  Link} from "react-router-dom";


const Login=()=>{
  return<div className="form-div">
  <div className="form-card">
  <div className="form-title">Social Sprout</div>
  <hr style={{outline:"none", border:"none", backgroundColor:"black", height:0.5, width:"50%"}}/>
  <div className="d-flex mt-5">
    <div><img src={SignImg} style={{width:550, height:450}}/></div>
      <div className="form-info">
            <div className="form-header">Log In</div>
            <div className="form-values mt-5">
                <form className="d-flex flex-column">
                    <div className="form-input">
                        <FontAwesomeIcon icon={faUser} size="1x" color="black" /> 
                        <input className="form-in ml-4" placeholder="Enter Email-id" />
                     </div>
                     <div className="form-input mt-5" >
                        <FontAwesomeIcon icon={faLock} size="1x" color="black" /> 
                        <input className="form-in ml-4"  placeholder="Enter Password"/>
                     </div> 
                     <div className="form-btn">
                         <button className="form-login mt-5 p-2" >Login</button>
                    </div>
                </form>
                <div className="mt-4 form-link"> 
                  <Link  style={{color:"black", textDecoration:"underline"}}>Don't have an account? Click here to create one!</Link>
              </div>
            </div>    
        </div>
    </div>
    </div>
    </div>
}

export default Login