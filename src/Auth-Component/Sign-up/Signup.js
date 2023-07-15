import { useState, useRef} from "react";
import { useHistory } from "react-router-dom";
import quotes from "../../Images/quotes.png";
import './Signup.css';
import mark from '../../Images/exclamation.png';
import Cookies from 'js-cookie';

const Signup = () => {

        // states regulating signing up

    const [name, setName] = useState('');
    const [validName, setvalidName] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [newsletter, setNewsletter] = useState(false);
    const history = useHistory();
    const timeoutRef = useRef()

    const handleNameChange = (e) => {
        setName(e.target.value);
        console.log("validation starting soon")
            isValidName(e.target.value);
    }

    // checking if the username already exists by cross-referencing with the API
     function isValidName(username){
      timeoutRef.current =  setTimeout(function(){
            console.log("validating username " , username);
        let ata = new FormData();
        ata.append('username',username);
        fetch('https://zeesblog.onrender.com/user/exists', {
                    method: 'POST',
                    credentials:"include",
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                      },
                    body: new URLSearchParams(ata),
                }).then(function(response){ 
                    return response.json()})
                  .then(function(res){
                    console.log(res);
                    setvalidName(res);
                    clearTimeout(timeoutRef.current);
                });
        },500);
        
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
    // collating sign up credentials
    let userInfo = { name, email, password }
    const data = new FormData();
    data.append("name",name);
    data.append("email",email);
    data.append("password",password);
    data.append("newsLetter",newsletter);

    // implementing newsletter functions

    const newsletterDets = async () => {
        let ata = new FormData();
        ata.append('email',email);
        let result = await fetch('https://zeesblog.onrender.com/blogs/newsletter', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              },
            body: new URLSearchParams(ata),
        }).then(function(){

        })
    }
// posting sign up credentials on the API
    const signUp = async (e) => {
        let result = await fetch('https://zeesblog.onrender.com/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              },
            body: new URLSearchParams(userInfo),
        }).then(function(){
            Cookies.set('email', email, { expires: 2 });
            history.push("/login");
            newsletterDets();
        })
    }


    return ( 
        <div className="signup-container">
            <div className="form">
                <h2>Sign Up for ZEE</h2>
                <p>Become a part of our subscribers.</p>
                <input type="text" value={name} onChange={handleNameChange} placeholder='Name'/>
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
                    <div className="quotes"><img src={quotes} alt="left quotes" /></div>
                    <div className="quotes"><img src={quotes} alt="right quotes" /></div>
                    <div className="text">Like gemstones, your enduring uniqueness makes you particularly beautiful.</div>
                </div>
            </div>
            <div className="marks mark-1"><img src={mark} alt="exclamation mark" /></div>
            <div className="marks mark-2"><img src={mark} alt="exclamation mark" /></div>
            <div className="marks mark-3"><img src={mark} alt="exclamation mark" /></div>
            <div className="marks mark-4"><img src={mark} alt="exclamation mark" /></div>
            <div className="marks mark-5"><img src={mark} alt="exclamation mark" /></div>
        </div>
     );
}
 
export default Signup;