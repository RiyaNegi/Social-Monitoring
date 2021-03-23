import React from 'react'
import "./Auth.css"
import SignImg from "../../assets/SignImg.png"
import { Form, Button } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react"
import { GlobalContext } from "../../context/Provider"
import { login } from "../../context/actions/auth";



const Login = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);
  const [form, setForm] = useState({
    email: "",
    password: ""
  })

  const { authDispatch } = useContext(GlobalContext);

  useEffect(() => {
    window.addEventListener("resize", () => {
      const ismobile = window.innerWidth < 1200;
      if (ismobile !== isMobile) setIsMobile(ismobile);
    }, false);
  }, [isMobile]);

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const submit = (e) => {
    e.preventDefault();
    console.log("was I called?", form)
    login(form)(authDispatch);
  }

  return <div className="form-div">
    <div className="form-card col-10 col-sm-7 col-md-8 col-lg-11">
      <div className="form-title col-10 col-sm-6 col-md-11">Social Sprout</div>
      <hr style={{ outline: "none", border: "none", backgroundColor: "black", height: 0.5, width: "50%" }} />
      <div className="d-flex mt-5">
        {!isMobile && <div><img src={SignImg} style={{ width: 450, height: 350 }} /></div>}
        <div className="form-info mx-2 col-md-6" style={isMobile ? { marginLeft: 0 } : { marginLeft: 40 }}>
          <div className="form-header">Log In</div>
          <div className="form-values mt-5">
            <form className="d-flex flex-column col-10 col-sm-9 col-md-12">
              <div className="form-input">
                <FontAwesomeIcon icon={faUser} size="1x" color="black" />
                <input className="form-in ml-4" type="email" data-testid="email" placeholder="Enter Email-id" name="email" value={form.email} onChange={(e) => onChange(e)} />
              </div>
              <div className="form-input mt-5" >
                <FontAwesomeIcon icon={faLock} size="1x" color="black" />
                <input className="form-in ml-4" type="password" data-testid="password" placeholder="Enter Password" name="password" value={form.password} onChange={(e) => onChange(e)} />
              </div>
              <div className="form-btn">
                {/* <Link to="/dashboard"> */}
                <button className="form-login mt-5 p-2" onClick={(e) => submit(e)} >Login</button>
                {/* </Link> */}
              </div>
            </form>
            <div className="mt-4 form-link col-10 col-md-12">
              <Link style={{ color: "black", textDecoration: "underline" }} to="/login">Don't have an account? Click here to create one!</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default Login