import React from "react";
import Header from "./Header";
import { useRef, useState, useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import axios from '../api/axios';
import "../css/Login.css";
const LOGIN_URL = '/login';


const Login = () =>{
    const { auth, setAuth, keepLogin } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        if (auth?.accessToken) {
            navigate(from, { replace: true });
        }
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({
                    username: user,
                    password: pwd
                }),
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true
                }
            );
            console.log(typeof(response), response);
            const accessToken = response?.data?.token;
            if (!accessToken) {
                throw new Error('Access token not found.');
            }
            const userLogin = { user: 2001, pwd, accessToken };
            setAuth(userLogin);
            keepLogin(userLogin);
            setUser('');
            setPwd('');
            console.log(from, accessToken);
            navigate(from, { replace: true });
        } catch (err) {  
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 403) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }

    return(
        <div>
            <Header />
            <section>
            <p  aria-live="assertive"></p>
            <h1 class="title">Sign In As</h1>
            <div class="button b2" id="button-10">
                <input type="checkbox" class="checkbox" />
                <div class="knobs">
                    <span>Manufacturer</span>
                </div>
                <div class="layer"></div>
            </div>
            <form >
                <div class="container">
                    <div class="form-group">
                    
                        <input
                            type="text"
                            id="username"
                            //ref={userRef}
                            autoComplete="off"
                            //onChange={(e) => setUser(e.target.value)}
                            //value={user}
                            placeholder="Username"
                            required
                        />
                    </div>

                    <div class="form-group">
            
                        <input
                            type="password"
                            id="password"
                            //onChange={(e) => setPwd(e.target.value)}
                            //value={pwd}
                            placeholder="Password"
                            required
                        />
                    </div>
                    

                   <button class="sign-in">Sign In</button> 
                </div>
                
            </form>
        
        </section>
        <div class="robot-pic-container">
            <img class="robot-pic" src={require("../assets/robot-family.png")}></img>
        </div>
        </div>
    );
}

export default Login;