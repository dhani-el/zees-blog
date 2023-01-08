import { useParams } from "react-router-dom";
import Usefetch from "../TechnicalComponents/Usefetch";
import { useHistory } from "react-router-dom";
import zeehead from "../Images/zeehead.png";
import './blogdetails.css';
import Share from "../TechnicalComponents/Share";
import React, { useState} from "react";

const BlogDetails = () => {
    const { id } = useParams();
    // console.log(id);
    const { data:blog, IsPending, error } = Usefetch(`https://zeesblog.onrender.com/blogs/post/${id}`);
    // console.log(blog);
    const history = useHistory();
    const handleDelete = () => {
        fetch('https://zeesblog.onrender.com/blogs/post/${id}', {
            method: 'DELETE'
        })
            .then(() => {
                history.push("/blogs")
            })
    }
    const [copied, setCopied] = useState(false);
    const handleCopy = () => {
        setCopied(true);
    }
    console.log(copied);
    return ( 
        <div className="blog-details">
            {IsPending && <div className="load-msg">Loading...</div> }
            {error && <div className="err-msg">{error}</div> }
            {blog && <article>
                <div className="blog-nav">
                    <div className="blog-stuff">
                        <div className="zee-img-wrapper">
                            <div className="zee-head-wrapper">
                                <img src={ zeehead } alt="" />
                            </div>
                            <div className="name">susan omono</div>
                        </div>
                        <div className="blog-stats">
                            <div className="date">{blog[0].date}</div>
                            <span className="dot">.</span>
                            <div className="read-time">{blog[0].readTime}</div>
                        </div>
                    </div>
                    <Share handleCopy={handleCopy}/>
                </div>
                <h2>{ blog[0].title }</h2>
                <p>{ blog[0].body }</p>
                <button onClick={handleDelete}>delete blog</button>
            </article> }
            { copied && <div className="copy-alert">Copied to Clipboard!</div> }
        </div> 
    );
}
 
export default BlogDetails;