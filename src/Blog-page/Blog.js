import m2 from "../Images/m2.png";
import arrow from "../Images/Arrow 1.png";
import newsletter1 from "../Images/newsletter1.png";
import newsletter2 from "../Images/newsletter2.png";
import avatar1 from "../Images/avatar1.png";
import avatar2 from "../Images/avatar2.png";
import avatar3 from "../Images/avatar3.png";
import avatar4 from "../Images/avatar4.png";
import like from "../Images/like.png";
import m from "../Images/m.png";
import Bloglist from '../BlogList/Bloglist';
import Usefetch from "../TechnicalComponents/Usefetch";
import { useState } from "react";
import searchBtn from "../Images/searchbtn.png";
import Footer from "../App/Footer";


const Blog = () => {
    const { data: blogs, IsPending, error } = Usefetch('https://zeesblog.onrender.com/blogs/0');
    const [btnState, setBtnstate] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    // 

    const handleSubmit = (e) => {
        setBtnstate(true);
        e.preventDefault();
    }
    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }
    let toggleClassCheck = btnState ? 'sub-active' : null;

    return (
        <div className="blogs-container">
            <div className={`sub-msg-alert ${toggleClassCheck}`}>
                fuck you
            </div>
            <div className="search-bar">
                <input onChange={handleChange} placeholder="Search" type="search" />
                <button>
                    <img src={searchBtn} alt="" />
                </button>
            </div>
            {IsPending && <div className="load-msg">Loading...</div>}
            {error && <div className="err-msg">{error}</div>}
            {blogs && <Bloglist
                blogs={blogs.filter((blog) => {
                    if (searchTerm === '') {
                        return blog
                    } else if (blog.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return blog
                    }
                })}
            />}
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
                    <form onSubmit={handleSubmit}>
                        <input type="email" name="" id="" placeholder="Email" />
                        <button> <span>Subscribe</span> <img src={arrow} alt="" /> </button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Blog;

// if you still use facebook we want better for you
// https://zeesblog.onrender.com/blogs/0