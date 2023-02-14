import quotes from "../../Images/quotes.png";
import mark from '../../Images/exclamation.png';
import './Login.css';
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";


const Login = () => {

    useEffect(() => {
        if(localStorage.getItem("user-info")) {
            history.push('/');
        }
    }, [])

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const updateEmail = (e) => {
        setEmail(e.target.value)
    }
    const updatePassword = (e) => {
        setPassword(e.target.value)
    }
    let userInfo = { email, password }
    const data = new FormData();
    data.append("email", email);
    data.append("password", password);

    const LoginFunc = async () => {
        let result = await fetch('https://zeesblog.onrender.com/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams(userInfo),
        }).then(function () {
            history.push("/");
            localStorage.setItem("user-info", JSON.stringify(result));
            console.log(result);
        });
        // store result in local storage
    }
    return (
        <div className="login-container">
            <div className="form">
                <h2>Welcome back to ZEE</h2>
                <input type="email" value={email} onChange={updateEmail} placeholder='Email' />
                <input type="password" value={password} onChange={updatePassword} placeholder='Password' />
                <button type="submit" onClick={LoginFunc}>log in</button>
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