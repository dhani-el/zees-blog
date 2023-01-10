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

    const data = new FormData();
    data.append("title",title);
    data.append("body",body);
    data.append("genre",genre);
    data.append("readTime",readTime);
    data.append("date",date);
    data.append("image",image);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://zeesblog.onrender.com/admin/post', {
            method: 'POST',
            body: data,
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
                <input type="file" name="image" id="image"
                    required
                    onChange={(e) => setImage(e.target.files[0])}
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