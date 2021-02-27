import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Loader from 'react-loader-spinner'



function FormInput(props) {

    const updateField = e => {
        console.log("inside")
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const [change, setChange] = useState(true)
    const [form, setForm] = useState({
        parent: "",
        child: "",
        subr: ""
    });
    const [result, setResult] = useState("")


    const notify = () =>
        toast.error('⚠️ All fields are required', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
        });

    const notifyLength = () =>
        toast.error('⚠️ Minimum character length is 2', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
        });

    function handleClick() {
        props.onClick(!props.isClicked)
    }

    const handleSubmit = event => {
        event.preventDefault();
        if (form.parent.length == 1 || form.child.length == 1 || form.subr.length == 1) {
            notifyLength();
        }
        else {
            setChange(!change)
            fetch('http://127.0.0.1:5000/detection/',
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    method: 'POST',
                    body: JSON.stringify(form)
                })
                .then(response => response.json())
                .then(response => {
                    console.log("rsponse!!:", response)
                    const answer = Object.values(response)[0]
                    setResult(answer);
                });
        }

    }

    return (
        <div className="form-box p-4">
            <div className="d-flex">
                <span className="heading">
                    Sarcasm Detector
                </span>
                <button
                    className="exit-btn ml-5"
                    onClick={handleClick}
                >
                    <FontAwesomeIcon
                        icon={faTimes}
                        size="1x"
                        color="gray"
                    />{" "}
                </button>
            </div>
            <hr style={{ backgroundColor: '#dadada' }} />
            {change ? (<div>
                <form onSubmit={handleSubmit}>
                    <div className="d-flex flex-column">
                        <input className="input-style input-sm mt-3" name="parent" type="text" required pattern="[.*[a-zA-Z]+.*" placeholder="Enter Parent text here"
                            onChange={updateField} value={form.parent} />
                        <input className="input-style mt-5 input-sm" name="child" type="text" required pattern="[.*[a-zA-Z]+.*" placeholder="Enter Child text here"
                            onChange={updateField} value={form.child} />
                        <input className="input-style input-sm mt-5" name="subr" type="text" required pattern="[.*[a-zA-Z]+.*" placeholder="Enter Subreddit's name here"
                            onChange={updateField} value={form.subr} />
                        <button type="submit" onClick={() => {
                            if (form.parent.length < 1 || form.child.length < 1 || form.subr.length < 1) {
                                notify();
                            }
                        }} className="button-style mt-5 p-2">Check</button>
                    </div>
                </form>
            </div>) : <div className="d-flex flex-column">
                    <span className="answer">{result ? result : "kjfd"}</span>
                    <button onClick={() => setChange(!change)} className="button-style mt-5 p-2">Recheck</button>
                </div>
            }
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover
            />
        </div>
    )
}

export default FormInput