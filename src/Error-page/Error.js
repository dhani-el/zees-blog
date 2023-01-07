import { Link } from "react-router-dom";
import "./Error.css";
import ErrorImg from "../Images/404.png";
import m2 from "../Images/m2.png";


const Error = () => {
    return ( 
        <div className="error-page-container">
            <div className="error-texts">
                <p>
                    <span>Page not found</span>
                </p>
                <h2>OH NO! Error 404</h2>
                <p className="description">We can't seem to find the page you're looking for</p>
                <Link to="/">Homepage</Link>
            </div>
            <div className="fun-image-container">
                <img src={ErrorImg} alt="" />
            </div>
            <img className="m2" src={m2} alt="" />
        </div>
     );
}
 
export default Error;