import { Link } from "react-router-dom";
import '../Blog-page/blog.css';
import man from "../Images/man.jpeg"

    const Bloglist = ({ blogs }) => {
    return ( 
        <div className="bloglist">
                    {blogs.map((blog) => (
                        <div className="blog-preview">
                            <div className="blog-text">
                                <div className="writer"><div className="author">zee</div><div className="point">.</div> <div className="date">{blog.date}</div></div>
                                <Link to={`/blog/${blog.id}`}>
                                    <div className="blog-title">{blog.title}</div>
                                    <p>{blog.body.slice(0, 200)}...</p>
                                </Link>
                                <div className="blog-stuff">
                                    <div className="blog-stats">
                                        <Link to={`/genre?name=${blog.genre}`}>
                                            <div className="genre">{blog.genre}</div>   
                                        </Link>
                                        <span className="read-time">{blog.readTime}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-preview-img-wraper">
                                <img src={man} alt="" />
                            </div>
                        </div>
                    ))}
        </div>
     );
}
 
export default Bloglist;