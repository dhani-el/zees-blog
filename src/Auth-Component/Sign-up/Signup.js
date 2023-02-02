import { useState } from "react";
import { useHistory } from "react-router-dom";
import './Signup.css';

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
    const data = new FormData();
    data.append("name",name);
    data.append("email",email);
    data.append("password",password);

    const signUp = async (e) => {
        e.preventDefault();
         fetch('https://zeesblog.onrender.com/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              },
            body: new URLSearchParams(userInfo),
        }).then(function(){
            history.push("/")
        })
        // result = await result.json();
        // console.log("result", result);
        // store result in local storage
        // push hiistory to homepage
            // history.push("/");
            demo()
    }

    const demo = () => {
        history.push("/");
    }

    return ( 
        <div className="signup-container">
            <form action="" onSubmit={signUp}>
                <h2>Sign Up for ZEE</h2>
                <p>Become a part of our family.</p>
                <input type="text" value={name} onChange={updateName} placeholder='Name'/>
                <input type="email" value={email} onChange={updateEmail} placeholder='Email'/>
                <input type="password" value={password} onChange={updatePassword} placeholder='Password'/>
                <button type="submit" >sign me up!</button>
            </form>
            <div className="container2">
                demo
            </div>
        </div>
     );
}
 
export default Signup;