import { useParams } from "react-router-dom";
import Usefetch from "../TechnicalComponents/Usefetch";
import { useHistory, Link } from "react-router-dom";
import zeehead from "../Images/zeehead.png";
import './blogdetails.css';
import Share from "../TechnicalComponents/Share";
import React, { useState, useEffect, useRef } from "react";
import NavBar from "../Navbar/Navbar";
import insta from "../Images/instalogo.png";
import tweet from "../Images/twitterlogo.png";
import Like from "../Like-Component/likes"
import Comments from "../CommentSection/Comments/Comments"
import commentsBtn from "../Images/comments.svg";
import { formatDistanceToNowStrict, isDate } from "date-fns"
import { gsap } from "gsap";
import closeButton from "../Images/close.svg";

const BlogDetails = () => {
    const cBlock = useRef();
    const tl = useRef();
    const { id } = useParams();
    const { data: blog, IsPending, error } = Usefetch(`https://zeesblog.onrender.com/blogs/post/${id}`);
    const history = useHistory();
    const handleDelete = () => {
        fetch(`https://zeesblog.onrender.com/admin/delete/${id}`, {
            method: 'DELETE'
        })
            .then(() => {
                history.push("/blogs/0")
            })
    }
    const [copied, setCopied] = useState(false);
    const [commentPage, setCommentPage] = useState(0);
    const handleCopy = () => {
        setCopied(true);
    }
    const [closed, setClosed] = useState(false);
    const handleOpen = () => {
        setClosed(!closed);
    }
    useEffect(() => {
        window.scrollTo(0, 0);
        tl.current = gsap.timeline({
            paused: true
        })
            tl.current.fromTo(cBlock.current, {
                x: "100%",
                duration: 0
            }, {
                x: "0%",
                duration: 0.5,
                ease:'power3.inOut'
            })

    }, [blog]);
    useEffect(() => {
        closed ? console.log('played') : console.log('reversed');
        closed ? tl.current.play() : tl.current.reverse();
    }, [closed]);

    return (
        <div className="blog-details-container">
            <NavBar />
            <div className="blog-details-container-2">
                <div className="blog-details">
                    {IsPending && <div className="load-msg">ZEE.</div>}
                    {error && <div className="err-msg">{error}</div>}
                    {blog && <article>
                        <div className="blog-nav">
                            <div className="blog-stuff">
                                <div className="zee-img-wrapper">
                                    <div className="zee-head-wrapper">
                                        <img src={zeehead} alt="" />
                                    </div>
                                    <div className="name">susan omono</div>
                                </div>
                                <div className="blog-stats">
                                    <div className="date">{new Date(blog[0].date).toString() === "Invalid Date" ? blog[0].date : formatDistanceToNowStrict(new Date(blog[0].date))} ago</div>
                                    <span className="dot">.</span>
                                    <div className="read-time">{blog[0].readTime} read</div>
                                </div>
                            </div>
                            <Share handleCopy={handleCopy} />
                        </div>
                        <h2>{blog[0].title}</h2>
                        <div className="header-image-wrapper">
                            {/* <div className="header-image" style={{ backgroundImage: `url(${blog[0].image})` }}></div> */}
                            <img src={blog[0].image} alt="" className="header-image"/>
                        </div>
                        <p>{blog[0].body}</p>
                        <button onClick={handleDelete}>delete blog</button>
                        <div className="like-comment-hover">
                            <Like blogTitle={blog[0].title} />
                            <div className="comments-btn-wrapper" onClick={handleOpen}><img src={commentsBtn} alt="" /></div>
                        </div>
                        <div ref={cBlock} className={closed ? 'comments-wall played' : 'comments-wall reversed'}>
                            <Comments title={blog[0].title} pag={commentPage}/>
                            <div className="close-button-wrapper" onClick={handleOpen}><img src={closeButton} alt="" /></div>
                        </div>
                    </article>}
                    {copied && <div className="copy-alert">Copied to Clipboard!</div>}
                </div>
                <div className="sticky-footer-container">
                    <div className="name">Susan O.</div>
                    <p>Join many other lifestyle enthusiasts who receive our content in their inbox.</p>
                    <div className="links-wrapper">
                        <div className="socials-wrapper">
                            <a href="https://instagram.com/existentialcrisisgirl_?r=nametag" target="_blank" rel="noopener noreferrer" className="socials">
                                <img src={insta} alt="" />
                            </a>
                            <a href="https://mobile.twitter.com/jupiter_knows" target="_blank" rel="noopener noreferrer" className="socials">
                                <img src={tweet} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="nav">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/blogs/0">Blog</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogDetails;

//comments should be closed by default - query on click 
// api for all the comments - blog title for specific comments
// same thing for likes
