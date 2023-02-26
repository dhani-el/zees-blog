import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import quotes from "../../Images/quotes.png";
import './Signup.css';
import mark from '../../Images/exclamation.png';

const Signup = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [newsletter, setNewsletter] = useState(false);
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
    const updateNewsletter = () => {
        setNewsletter(!newsletter)
    }
    let userInfo = { name, email, password }
    const data = new FormData();
    data.append("name",name);
    data.append("email",email);
    data.append("password",password);
    data.append("newsLetter",newsletter);

    const signUp = async (e) => {
        let result = await fetch('https://zeesblog.onrender.com/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              },
            body: new URLSearchParams(userInfo),
        }).then(function(){
            // history.push("/")
        })
        result = await result.json();
        console.log("result", result);
        // store result in local storage
        // push hiistory to homepage
            // history.push("/");
    }


    useEffect(() => {
      
        let value = setTimeout(() => {
            //functions to validate form (checking if it already exists in the database and checking if the structure is valid )
                fetch('https://zeesblog.onrender.com/user/exists', {
                    method: 'POST',
                    body: name,
                })
                    .then(() => {

                    })
        
        }, 500);
    
      return () => {
        clearTimeout(value);
      }
    }, [])

    return ( 
        <div className="signup-container">
            <div className="form">
                <h2>Sign Up for ZEE</h2>
                <p>Become a part of our subscribers.</p>
                <input type="text" value={name} onChange={updateName} placeholder='Name'/>
                <input type="email" value={email} onChange={updateEmail} placeholder='Email'/>
                <input type="password" value={password} onChange={updatePassword} placeholder='Password'/>
                <label>
                <input type="checkbox"  onChange={updateNewsletter}/> i want newsLetters
                </label>
                <button type="submit" onClick={signUp}>sign me up!</button>
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
 
export default Signup;