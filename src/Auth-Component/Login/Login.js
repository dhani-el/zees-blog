import { useState } from "react";
import quotes from "../../Images/quotes.png";
import mark from '../../Images/exclamation.png';
import './Login.css';
import { useHistory } from "react-router-dom";
import Cookies from 'js-cookie';
import { Link } from "react-router-dom";

const Login = () => {
    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);

    const history = useHistory();
    function handleUserChange(e) {
        setUserName(e.target.value)
    }
    function handlePasswordChange(e) {
        setPassword(e.target.value)
    }
    const payLoad = new FormData();
    payLoad.append("username", userName);
    payLoad.append("password", password);


    // posting the login credentials to the API
    const login = async () => {
        setIsPending(true);
        await fetch('https://zeesblog.onrender.com/auth/login', {
            method: 'POST',
            credentials: "include",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },

            body: new URLSearchParams(payLoad),

        })
            .then((data) => {
                return data.json();
            })
            .then ((data)=> {
                // history.push("/");
                console.log(data);
                //  storing login credentials in local storage 
                Cookies.set('loginStatus', true, { expires: 2 });
                Cookies.set('username', data["0"].name, { expires: 2 });
                Cookies.set('email', data["0"].email, { expires: 2 });
            })
            .catch(err => {
                setError(err.message);
                setIsPending(false);
            });
    }

    // .then(function(value){
    //     return value.json();
    //  }).then(function(newValue){
    //      // storing login credentials in local storage 
    //      Cookies.set('loginStatus', true, { expires: 2 });
    //      Cookies.set('username', newValue["0"].name, { expires: 2 });
    //      Cookies.set('email', newValue["0"].email, { expires: 2 });
    //      setIsPending(false)
    //  }).then(function(){
    //      history.replace("/");
    //  })
    return (
        <div className="login-container">
            <div className="form">
                <h2>Welcome back to ZEE</h2>
                <p>Username</p>
                <input type="name" placeholder='UserName' onChange={handleUserChange} />
                <p>Password</p>
                <input type="password" placeholder='Password' onChange={handlePasswordChange} />
                {isPending ? <button disabled id="disabled">Logging In</button> : <button type="submit" onClick={login}>log in</button>}
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
            <p className="signup-sticker"><Link to='/signup'>Don't have an account? Sign up here</Link></p>
        </div>
    );
}

export default Login;