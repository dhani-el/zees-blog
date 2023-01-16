import Bloglist from '../BlogList/Bloglist';
import Usefetch from "../TechnicalComponents/Usefetch";
import { useState } from "react";
import searchBtn from "../Images/searchbtn.png";
import Footer from "../App/Footer";
import { useParams } from "react-router-dom";


const Blog = () => {
    let { id } = useParams();
    const { data: blogs, IsPending, error } = Usefetch(`https://zeesblog.onrender.com/blogs/${id}`);
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
            <div className="sticky">
                <Footer />
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
        </div>
    );
}

export default Blog;

// if you still use facebook we want better for you
// https://zeesblog.onrender.com/blogs/0