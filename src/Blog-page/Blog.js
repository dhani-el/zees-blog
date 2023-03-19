import Bloglist from '../BlogList/Bloglist';
import Usefetch from "../TechnicalComponents/Usefetch";
import Pagination from '../pagination/pagination';
import { useState , useEffect} from "react";
import searchBtn from "../Images/searchbtn.png";
import Footer from "../App/Footer";
import { useParams , useHistory, Link} from "react-router-dom";
import Skeleton from '../Skeleton-Screens/Skeleton';



const Blog = () => {
    let { id } = useParams();
    const history = useHistory()
    let { data: blogs, IsPending, error, setdata } = Usefetch(`https://zeesblog.onrender.com/blogs/${id}`, id);
    const [btnState, setBtnstate] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (e) => {
        setBtnstate(true);
        e.preventDefault();
    }
    const handleSearch = async (e) => {
        setSearchTerm(e.target.value);
         searchQuery(e.target.value)
        .then(function(dat){
            return dat.json()
        }).then(function(result){
            setdata(result)
        }).catch(function(error){
            console.log("error",error.name);
        })
    }
    
    async function searchQuery(searchterm){
       let result = await fetch(`https://zeesblog.onrender.com/blogs/search/${searchterm}`,{
            credentials:"include"
        });
        return result
    }
    let toggleClassCheck = btnState ? 'sub-active' : null;
    function next(){
        const nextId  = Number(id) + 1
        // console.log(nextId);
        history.push(`/blogs/${nextId}`);
    }
    function previouse(){
        const previouseId = Number(id) -1
        if (id <= 0) {
         return
        }
        history.push("/blogs/"+previouseId);
    }
    useEffect(() => {
        window.scrollTo(0,0);
    }, [id]);
    return (
        <div className="blogs-container">
            <div className="sticky">
                <Footer />
            </div>
            <div className="search-bar">
                <input onChange={handleSearch} placeholder="Search" type="search" />
                <button>
                    <img src={searchBtn} alt="" />
                </button>
            </div>
            {IsPending && <Skeleton/> }
            {error && <div className="err-msg">{error}</div>}
            {blogs && <Bloglist
                blogs={blogs}
            />}
            <Pagination currentPage={id} next = {next} previouse={previouse}  />
        </div>
    );
}

export default Blog;

// if you still use facebook we want better for you
// https://zeesblog.onrender.com/blogs/0