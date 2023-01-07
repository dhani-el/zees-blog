import { useState } from "react";

const Signup = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
        let result = await fetch(url, {
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
    }
    return ( 
        <div className="signup-container">
            <form action="">
                <input type="text" value={name} onChange={updateName}/>
                <input type="email" value={email} onChange={updateEmail}/>
                <input type="password" value={password} onChange={updatePassword}/>
                <button>sign up</button>
            </form>
        </div>
     );
}
 
export default Signup;