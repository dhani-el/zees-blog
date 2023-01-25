import { useState } from "react";
import { useHistory } from "react-router-dom";
import quotes from "../../Images/quotes.png";
import './Signup.css';
import mark from '../../Images/exclamation.png';

const Signup = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const updateName = (e) => {
        setName(e.target.value)
    }
    const updateEmail = (e) => {
        setEmail(e.target.value)
    }
    const updatePassword = (e) => {
        setPassword(e.target.value)
    }
    let userInfo = { name, email, password }

    const signUp = async () => {
        let result = await fetch('https://zeesblog.onrender.com/auth/signup', {
            method: 'POST',
            body: JSON.stringify(userInfo),
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        })
        result = await result.json();
        console.log("result", result);
        // store result in local storage
        // push hiistory to homepage
            history.push("/");
    }

    const demo = () => {
        history.push("/");
    }

    return ( 
        <div className="signup-container">
            <form action="" onSubmit={signUp}>
                <h2>Sign Up for ZEE</h2>
                <p>Become a part of our subscribers.</p>
                <input type="text" value={name} onChange={updateName} placeholder='Name'/>
                <input type="email" value={email} onChange={updateEmail} placeholder='Email'/>
                <input type="password" value={password} onChange={updatePassword} placeholder='Password'/>
                <button type="submit" onClick={demo}>sign me up!</button>
            </form>
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
 
export default Signup;