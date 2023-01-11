import { Link } from "react-router-dom";
import '../Blog-page/blog.css';
import './BlogList.css';

    const Bloglist = ({ blogs }) => {
    return ( 
        <div className="bloglist">
                    {blogs.map((blog) => (
                        <div className="blog-preview" key={blog._id}>
                            <div className="blog-text">
                                <div className="writer"><div className="author">zee</div><div className="point">.</div> <div className="date">{blog.date}</div></div>
                                <Link to={`/blog/${blog.title}`}>
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
                                <div style={{ backgroundImage: `url(${blog.image})` }}></div>
                            </div>
                        </div>
                    ))}
        </div>
     );
}
 
export default Bloglist;