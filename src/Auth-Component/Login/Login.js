import { useState, useEffect } from "react";
import quotes from "../../Images/quotes.png";
import mark from '../../Images/exclamation.png';
import './Login.css';
import { useHistory } from "react-router-dom";

const Login = () => {
    const [userName , setUserName] = useState();
    const [password , setPassword] = useState();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const history = useHistory();
    function handleUserChange(e){
        setUserName(e.target.value)
    }

    function handlePasswordChange(e){
        setPassword(e.target.value)
    }

    const payLoad = new FormData();
    payLoad.append("username", userName);
    payLoad.append("password", password);

    const login = async () => {
         await fetch('https://zeesblog.onrender.com/auth/login', {
            method: 'POST',
            credentials:"include",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              },
             
            body: new URLSearchParams(payLoad),
        }).then(function(){
            history.push("/");
            setIsLoggedIn(true);
            // localStorage.setItem("loginStatus", true);
        })
    }

    // let loginState = localStorage.getItem("loginStatus");
    

    return ( 
        <div className="login-container">
            <div className="form">
                <h2>Welcome back to ZEE</h2>
                <input type="name" placeholder='UserName' onChange={handleUserChange}/>
                <input type="password" placeholder='Password' onChange={handlePasswordChange}/>
                <button type="submit" onClick={login}>log in</button>
            </div>
            <div className="container2">
                <div className="overlay"></div>
                <div className="secondary-overlay">
                    <div className="quotes"><img src={quotes} alt="" /></div>
                    <div className="quotes"><img src={quotes} alt="" /></div>
                    <div className="text">Like gemstones, your enduring uniqueness makes you particularly beautiful.</div>
                </div>
            </div>
            <div className="marks mark-1"><img src={mark} alt="" /></div>
            <div className="marks mark-2"><img src={mark} alt="" /></div>
            <div className="marks mark-3"><img src={mark} alt="" /></div>
            <div className="marks mark-4"><img src={mark} alt="" /></div>
            <div className="marks mark-5"><img src={mark} alt="" /></div>
        </div>
    );
}

export default Login;