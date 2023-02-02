import quotes from "../../Images/quotes.png";
import mark from '../../Images/exclamation.png';
import './Login.css';


const Login = () => {
    return ( 
        <div className="login-container">
            <div className="form">
                <h2>Welcome back to ZEE</h2>
                <input type="email" placeholder='Email'/>
                <input type="password" placeholder='Password'/>
                <button type="submit">log in</button>
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
     )
}
 
export default Login;