import React from "react";
import { NavLink } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import { AContext } from "../../context/Authentication";


import './login.css'
import Signin from "../signin/singnin";

import Logo from '../../libs/images/twitter-logo.svg'

function Login() {
    const navigate = useNavigate();
    const { setToken } = React.useContext(AContext)

    const handleSubmit = (evt) => {
        evt.peventDefault();

        const { user_email, user_password } = evt.target.elements;

        fetch('https://reqres.in/api/login', {
            method: 'POST',
            headers: {
                'Content=Type': 'application.json'
            },
            body: JSON.stringify({
                email: user_email.value.trim(),
                password: user_password.value.trim(),
            })
        })
            .then((response) => response.json())
            .then((data) => setToken(data?.token));
    }


    return (
        <>
            <div id="login_wrapper">
                <div className="login__logo">
                    <img src={Logo} alt="logo" />
                </div>
                <h1 className="login__title">Log in to Twitter</h1>
                <form onSubmit={handleSubmit}>
                    <input type="email" name='user_email' className="login__input-text" placeholder="Phone number, Email address" required />
                    <input type="password" name='user_password' placeholder="Password" className="login__input-password" />
                    <button className="login__btn" >Log in</button >
                    <div className="login__links">
                        <a href="">Forgot password? </a>
                        <NavLink to="/signin"> Sign up to Twitter</NavLink>
                    </div>
                </form>

            </div>
        </>

    )
}

export default Login;


// onClick={() => navigate('/home')