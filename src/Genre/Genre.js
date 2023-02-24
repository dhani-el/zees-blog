import React, {  useEffect} from "react";
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
import Skeleton from "../Skeleton-Screens/Skeleton";

const Genre = () => {
    function useQuery() {
        const { search } = useLocation();

        return React.useMemo(() => new URLSearchParams(search), [search]);
    }
    let query = useQuery();
    let name = query.get("name");
    // const { genre } = useParams();
    const { data: blogs, IsPending, error } = Usefetch('https://zeesblog.onrender.com/blogs/genres/:genre');
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    return (
        <div className="genre-container">
            <h2 className="genre-header">{name}</h2>
            <div className="genre-container-2">
                {IsPending && <Skeleton />}
                {error && <div className="err-msg">{error}</div>}
                {blogs && <Bloglist blogs={blogs.filter((blog) => blog.genre.toLowerCase() === name.toLowerCase())} />}
                <Footer />
            </div>
        </div>
    );
}

export default Genre;