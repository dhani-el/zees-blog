import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Admin.css";
const Admin = () => {
    const [title, setTitle] = useState();
    const [body, setBody] = useState();
    const [genre, setGenre] = useState();
    const [readTime, setReadtime] = useState();
    const [date, setDate] = useState();
    const [IsPending, setIsPending] = useState(false);
    const history = useHistory();
    const [image, setImage] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, genre, readTime, date, image };
        fetch('https://zeesblog.onrender.com/admin/post', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(blog)
        })
            .then(() => {
                setIsPending(false);
                history.push("/")
            })
    }

    return ( 
        <div className="admin-container">
            <div className="h2">Hi Zee, what are we writing?</div>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">
                    blog title
                </label>
                <input type="text" name="" id="" 
                    required
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label htmlFor="">genre</label>
                <input type="text" 
                    required
                    onChange={(e) => setGenre(e.target.value)}
                />
                 <label htmlFor="">read time</label>
                <input type="text" 
                    required
                    onChange={(e) => setReadtime(e.target.value)}
                />
                <label htmlFor="">date</label>
                <input type="text" 
                    required
                    onChange={(e) => setDate(e.target.value)}
                />
                <label htmlFor="">Upload Image</label>
                <input type="file" name="" id=""
                    required
                    onChange={(e) => setImage(e.target.value)}
                 />  
                <label htmlFor="">blog body</label>
                <textarea
                    required
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
     
              {!IsPending &&  <button>add blog</button>}
              {IsPending &&  <button disabled>adding blog</button>}
            </form>
            <p>{title}</p>
            <p>{body}</p>
            <p>{genre}</p>
            <p>{readTime}</p>
            <p>{date}</p>
        </div>
     );
}
 
export default Admin;