import { Link } from "react-router-dom";
import insta from "../Images/instalogo.png";
import tweet from "../Images/twitterlogo.png";

const Footer = () => {
    return ( 
        <footer className="footer">
            <article>
                <div className="logo">Susan o.</div>
                <p>Keep in the loop with the latest gossip and happenings.</p>
                <div className="socials-wrapper">
                    <a href="https://instagram.com/existentialcrisisgirl_?r=nametag" target="_blank" rel="noopener noreferrer" className="socials">
                        <img src={insta} alt="" />
                    </a>
                    <a href="https://mobile.twitter.com/jupiter_knows" target="_blank" rel="noopener noreferrer" className="socials">
                        <img src={tweet} alt="" />
                    </a>
                </div>
            </article>
            <article>
                <div className="footer-stn">
                    <h2>features</h2>
                    <p>sexcapades</p>
                    <p>Poems</p>
                    <p>series</p>
                    <p>true life</p>
                </div>
                <div className="footer-stn">
                    <h2>resources</h2>
                    <p>FAQs</p>
                    <p>Privacy</p>
                    <p>Terms and Conditions</p>
                </div>
                <div className="footer-stn">
                    <h2>me</h2>
                    <p>about</p>
                    <p>features</p>
                    <p>contacts</p>
                </div>
            </article>
        </footer>
     );
}
 
export default Footer;