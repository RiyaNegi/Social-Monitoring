import React from 'react'
import "./Auth.css"
import signup from "../../assets/signup.png"
import { Form, Button } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react"
import { GlobalContext } from "../../context/Provider"
// import { signup } from "../../context/actions/auth";
import CreatableSelect from 'react-select/creatable';



const Signup = () => {
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
        // login(form)(authDispatch);
    }

    const handleChange = (newValue, actionMeta) => {
        console.group('Value Changed');
        console.log(newValue);
        console.log(`action: ${actionMeta.action}`);
        console.groupEnd();
    };

    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            borderBottom: '1px dotted pink',
            color: state.isSelected ? 'red' : 'blue',
            padding: 20,
        }),
        control: () => ({
            // none of react-select's styles are passed to <Control />
            width: 350,
            // border: '1px solid red'
        }),
        singleValue: (provided, state) => {
            const opacity = state.isDisabled ? 0.5 : 1;
            const transition = 'opacity 300ms';

            return { ...provided, opacity, transition };
        }
    }

    return <div className="form-div">
        <div className="form-card">
            <div className="form-title">Social Sprout</div>
            <hr className="container mt-2" style={{ outline: "none", border: "none", backgroundColor: "black", height: 0.5, width: "50%" }} />
            <div className="d-flex">
                {!isMobile && <div className="signup-img"><img src={signup} style={{ width: 400, height: 400 }} /></div>}
                <div className="form-info" style={isMobile ? { marginLeft: 0 } : { marginLeft: 50 }}>
                    <div className="form-header">Sign up</div>
                    <div className="form-values">
                        <form className="d-flex flex-column">
                            <div className="form-input mt-5">
                                {/* <FontAwesomeIcon icon={faUser} size="1x" color="black" /> */}
                                <input className="form-in ml-4" type="email" data-testid="email" placeholder="Enter Email-id" name="email" value={form.email} onChange={(e) => onChange(e)} />
                            </div>
                            <div className="form-input mt-5">
                                {/* <FontAwesomeIcon icon={faUser} size="1x" color="black" /> */}
                                <input className="form-in ml-4" type="text" data-testid="text" placeholder="Enter Brand Name" name="brand" value={form.brand} onChange={(e) => onChange(e)} />
                            </div>
                            <div className="form-input mt-5">
                                {/* <FontAwesomeIcon icon={faUser} size="1x" color="black" /> */}
                                <CreatableSelect
                                    isMulti
                                    styles={customStyles}
                                    onChange={handleChange}
                                    placeholder="Create keywords related to your Brand.."
                                />                            </div>
                            <div className="form-input mt-5" >
                                {/* <FontAwesomeIcon icon={faLock} size="1x" color="black" /> */}
                                <input className="form-in ml-4" type="password" data-testid="password" placeholder="Enter Password" name="password" value={form.password} onChange={(e) => onChange(e)} />
                            </div>
                            <div className="form-btn">
                                {/* <Link to="/dashboard"> */}
                                <button className="form-login mt-5 p-2" onClick={(e) => submit(e)} >Sign up</button>
                                {/* </Link> */}
                            </div>
                        </form>
                        <div className="mt-4 form-link">
                            <Link style={{ color: "black", textDecoration: "underline" }} to="/login">Already have an account? Click here to Login!</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Signup