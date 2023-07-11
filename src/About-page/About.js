import typewriter from "../Images/type.png";
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
import './about.css';
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitText from "../TechnicalComponents/SplitText.min.js";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import { TimelineLite, Power2 } from "gsap";
import Footer from "../App/Footer";
import CSSPlugin from "gsap/CSSPlugin";

const About = () => {

    // opening animation 

    let container = useRef(null);
    let image = useRef(null);
    gsap.registerPlugin(CSSPlugin, CSSRulePlugin);
    let imageReveal = CSSRulePlugin.getRule(".zee .img-wrapper:after");

    const tl = new TimelineLite();
    useEffect(() => {
        tl.to(container, 1, { css: { visibility: "visible", overflow: "visible" } }).to(
            imageReveal,
            1,
            { height: "0%", ease: Power2.easeInOut }
        ).to(image, 2, { scale: 1, ease: Power2.easeInOut, delay: -1.6 });
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
            stagger: 0.05,
            ease: "power2",
            delay: .5
        });
        window.scrollTo(0, 0);
    }, [])
    // Newsletter Implementation

    const [btnState, setBtnstate] = useState(false);
    const [email, setEmail] = useState();
    const newsletterDets = async () => {
        let ata = new FormData();
        ata.append('email', email);
        let result = await fetch('https://zeesblog.onrender.com/blogs/newsletter', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams(ata),
        }).then(function () {
            setBtnstate(true);
        })
    }
    const form = useRef()
    const handleSubmit = (e) => {
        e.preventDefault();
        newsletterDets();
        form.current.reset();
    }
    return (
        <div className="about-wrapper">
            <div className={btnState ? 'sub-active' : 'sub-null'}>
                You're now an active subscriber!
            </div>
            <div className="about-container">
                <div className="zee">
                    <div ref={el => container = el} className="img-wrapper">
                        <img ref={el => image = el} src={typewriter} alt="Typewriter" />
                    </div>
                    <article>
                        <h2 id="split-text">about zee</h2>
                        <p id="split-text" className="lorem">Hello, my name is Adebayo Susan, I am a multifaceted creative (writer, marketer, designer and so much more)</p>
                        <ul>
                            <li className="aboutZee" id="split-text">I am an aspiring UI/UX writer/researcher.</li>
                            <li className="aboutZee" id="split-text">I have marketed, managed and helped create content for a company (Waist beads by Nora) that specializes in making luxurious adornment for women.</li>
                            <li className="aboutZee" id="split-text">Apart from my 9-5 jobs, I have a website where I share resources dedicated to helping young people everywhere become their best selves and to better hold themselves accountable.</li>
                        </ul>
                    </article>
                </div>
                <article className="article">
                    <p>
                        Whether they are discovering themself, finding their feet in a new career, navigating relationships, keeping up with academics, or exploring that new and thrilling hobby, they need support, even if it is just a little.
                    </p>
                    <p>
                        Zee is for them. Zee is for every twenty-something, by a twenty-something.
                    </p>
                    <p>
                        Zee provides guidance and inspiration to twenty-something-year-olds steering through life with intricately delivered how-to guides, inspiring features, and relatable firsthand accounts. Zee is rooting for every young person to have a well-balanced and fulfilling life and wants them always to remember that we are their biggest and loudest cheerleaders. In my free time, I'm a crochet designer.</p>
                </article>
            </div>
            <div className="newsletter-stn">
                <img className="m" src={m} alt="s curve" />
                <img src={m2} alt="s curve" className="m2" />
                <div className="graphics">
                    <div className="img-tile1">
                        <img className="newsletter-img-wrappers" src={newsletter2} alt="pencils" />
                        <div className="graphics-texts">
                            <p>susan</p>
                            <p>writer</p>
                            <div className="readers-stats">
                                <div className="user-avatars">
                                    <img src={avatar1} alt="profile images" />
                                    <img src={avatar2} alt="profile images" />
                                    <img src={avatar3} alt="profile images" />
                                    <img src={avatar4} alt="profile images" />
                                </div>
                                <span className="readers-no-stats">1.1389</span>
                                <div className="likes">
                                    <img src={like} alt="heart shape" />
                                    <span>11351</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="img-tile2">
                        <img className="newsletter-img-wrappers" src={newsletter1} alt="someone reading a blog post" />
                        <div className="graphics-texts">
                            <p>susan</p>
                            <p>writer</p>
                            <div className="readers-stats">
                                <div className="user-avatars">
                                    <img src={avatar1} alt="profile images" />
                                    <img src={avatar2} alt="profile images" />
                                    <img src={avatar3} alt="profile images" />
                                    <img src={avatar4} alt="profile images" />
                                </div>
                                <span className="readers-no-stats">1.1389</span>
                                <div className="likes">
                                    <img src={like} alt="heart shape" />
                                    <span>11351</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="newsletter-sub-stn">
                    <h2>subscribe to our newsletter</h2>
                    <p>Join many other lifestyle enthusiasts who receive our content in their inbox.</p>
                    <form action="" onSubmit={handleSubmit} ref={form}>
                        <input type="email" name="" id="" placeholder="Email" onChange={(e) => (setEmail(e.target.value))} />
                        <button> <span>Subscribe</span> <img src={arrow} alt="arrow" /> </button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default About;