import { Link } from "react-router-dom";
import hero from "../Images/hero.png";
import f1 from "../Images/f1.png";
import f2 from "../Images/f2.png";
import f3 from "../Images/f3.png";
import lap from "../Images/lap.png";
import newsletter1 from "../Images/newsletter1.png";
import newsletter2 from "../Images/newsletter2.png";
import avatar1 from "../Images/avatar1.png";
import avatar2 from "../Images/avatar2.png";
import avatar3 from "../Images/avatar3.png";
import avatar4 from "../Images/avatar4.png";
import like from "../Images/like.png";
import m from "../Images/m.png";
import m2 from "../Images/m2.png";
import arrow from "../Images/Arrow 1.png";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitText from "../TechnicalComponents/SplitText.min.js";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import { TimelineLite, Power2 } from "gsap";
import Footer from "./Footer";
const Home = () => {

    let container = useRef(null);
    let image = useRef(null);
    let imageReveal = CSSRulePlugin.getRule(".hero-stn-img-wrapper:after");

    const tl = new TimelineLite();

    useEffect(()=> {
        tl.to(container, 1, { css: { visibility: "visible", overflow: "visible" }}).to(
            imageReveal,
            1,
            { height: "0%", ease: Power2.easeInOut, delay: 6 }
        ).to(image, 2, {scale: 1, ease: Power2.easeInOut, delay: -1.6});
        const split = new SplitText("#split-text", {
            type: "lines",
            linesClass: "lineChildren"
        });
        const splitParent = new SplitText("#split-text", {
            type: "lines",
            linesClass: "lineParent"
        });
        gsap.to(split.lines, {
            duration: 1,
            y: 0,
            opacity: 1,
            stagger: 0.1,
            ease: "power2",
            delay: 6.5
        });
        const split2 = new SplitText("#split-text2", {
            type: "lines",
            linesClass: "lineChildren"
        });
        const splitParent2 = new SplitText("#split-text2", {
            type: "lines",
            linesClass: "lineParent"
        });
        gsap.to(split2.lines, {
            duration: 1,
            y: 0,
            opacity: 1,
            stagger: 0.1,
            ease: "power2",
            delay: 6.6
        });
    }, [])    
    const [btnState, setBtnstate] = useState(false);

    const handleSubmit = (e) => {
        setBtnstate(true);
        e.preventDefault();
    }
    let toggleClassCheck = btnState ? 'sub-active' : null;
    return ( 
        <div className="home-stn">
            <div className={`sub-msg-alert ${toggleClassCheck}`}>
                fuck you
            </div>
            <div className="hero-stn">
                <div className="hero-stn-texts">
                    <h1 id="split-text">Confused about living as a twenty<span id="raleway">-something</span>? You're not alone!</h1>
                    <p id="split-text2">Get in touch with Zee’s lifestyle rants for the imperfect twenty-somethings!</p>
                    <Link to="/blogs">explore</Link>
                </div>
                <div className="hero-stn-img-wrapper2">
                    <div  ref={el => container = el} className="hero-stn-img-wrapper">
                        <img ref={el => image = el} src={ lap } alt="" />
                    </div>
                        <div className="ellipses1">
                            <div className="ellipse">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div className="ellipse">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div className="ellipse">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div className="ellipse">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div className="ellipse">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div className="ellipse">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div className="ellipse">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div className="ellipse">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div className="ellipse">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div className="ellipse">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                        <div className="ellipses2">
                            <div className="ellipse">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div className="ellipse">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div className="ellipse">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div className="ellipse">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div className="ellipse">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div className="ellipse">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div className="ellipse">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div className="ellipse">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div className="ellipse">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div className="ellipse">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                </div>
            </div>
            <div className="reviews-stn">
                <h2>reviews</h2>
                <div className="review-cards">
                    <div className="review-card">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dolorem, nihil et sunt dolorum eaque earum iusto suscipit nam!</p>
                        <div className="reviewer">
                            <img src="" alt="" />
                            <div className="reviewer-details">
                                <div className="reviewer-name">
                                    Tiamiyu Mubarak
                                </div>
                                <div className="job-description">
                                    verified artist
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="review-card">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dolorem, nihil et sunt dolorum eaque earum iusto suscipit nam!</p>
                        <div className="reviewer">
                            <img src="" alt="" />
                            <div className="reviewer-details">
                                <div className="reviewer-name">
                                    Tiamiyu Mubarak
                                </div>
                                <div className="job-description">
                                    verified artist
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="review-card">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dolorem, nihil et sunt dolorum eaque earum iusto suscipit nam!</p>
                        <div className="reviewer">
                            <img src="" alt="" />
                            <div className="reviewer-details">
                                <div className="reviewer-name">
                                    Tiamiyu Mubarak
                                </div>
                                <div className="job-description">
                                    verified artist
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="circle"></div>
                </div>
            </div>
            <div className="newsletter-stn">
                <div className="graphics">
                    <img className="m" src={m} alt="" />
                    <div className="img-tile1">
                        <img className="newsletter-img-wrappers" src={newsletter2} alt="" />
                        <div className="graphics-texts">
                            <p>susan</p>
                            <p>writer</p>
                            <div className="readers-stats">
                                <div className="user-avatars">
                                    <img src={avatar1} alt="" />
                                    <img src={avatar2} alt="" />
                                    <img src={avatar3} alt="" />
                                    <img src={avatar4} alt="" />
                                </div>
                                <span className="readers-no-stats">1.1389</span>
                                <div className="likes">
                                    <img src={like} alt="" />
                                    <span>11351</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="img-tile2">
                    <img className="newsletter-img-wrappers" src={newsletter1} alt="" />
                        <div className="graphics-texts">
                            <p>susan</p>
                            <p>writer</p>
                            <div className="readers-stats">
                                <div className="user-avatars">
                                    <img src={avatar1} alt="" />
                                    <img src={avatar2} alt="" />
                                    <img src={avatar3} alt="" />
                                    <img src={avatar4} alt="" />
                                </div>
                                <span className="readers-no-stats">1.1389</span>
                                <div className="likes">
                                    <img src={like} alt="" />
                                    <span>11351</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="newsletter-sub-stn">
                    <img src={m2} alt="" />
                    <h2>subscribe to our newsletter</h2>
                    <p>Keep in the loop with the latest gossip and happenings around the world</p>
                    <form action="" onSubmit={handleSubmit}>
                        <input required type="email" name="" id="" placeholder="Email"/>
                        <button> <span>Subscribe</span> <img src={arrow} alt="" /> </button>
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
     );
}
 
export default Home;