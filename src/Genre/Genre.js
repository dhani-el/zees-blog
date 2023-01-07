import React from "react";
import Bloglist from '../BlogList/Bloglist';
import Usefetch from "../TechnicalComponents/Usefetch";
import './genre.css';
// import { useParams } from "react-router-dom";
import {
  BrowserRouter as Router,
  Link,
  useLocation
} from "react-router-dom";
import Footer from "../App/Footer";

const Genre = () => {
    function useQuery() {
        const { search } = useLocation();
      
        return React.useMemo(() => new URLSearchParams(search), [search]);
    }
    let query = useQuery();
    let name=query.get("name");
    // const { genre } = useParams();
    const { data:blogs, IsPending, error } = Usefetch('https://zeesblog.onrender.com/blogs/0');
    return ( 
        <div className="genre-container">
            <h2 className="genre-header">{name}</h2>
            {IsPending && <div className="load-msg">Loading...</div> }
            {error && <div className="err-msg">{error}</div> }
            {blogs && <Bloglist blogs={blogs.filter((blog) => blog.genre === name)}/> }
            <Footer/>
        </div>
     );
}
 
export default Genre;