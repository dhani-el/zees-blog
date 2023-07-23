import { useState, useRef } from "react";
import './CommentForm.css';
import Cookies from 'js-cookie';
import LogReminder from "../../BlogDetails/LogReminder/LogReminder";


const CommentForm = ({ title, updateFunc }) => {

    const [comment, setComment] = useState()
    const [IsPending, setIsPending] = useState(false);
    const [IsRendering, setIsRendering] = useState(false);
    const [reminder, setReminder] = useState(false);
    const data = new FormData();
    data.append("title", title);
    data.append("comment", comment);

    const loginStatus = Cookies.get('loginStatus');

    const fetchComments = async () => {
        setIsPending(true);
            let newData = await fetch("https://zeesblog.onrender.com/comments/post", {
                method: 'POST',
                credentials: "include",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: new URLSearchParams(data),
            }).then((value) => {
                return value.json();
            }).then((newData)=> {
                setIsPending(false);
                updateFunc(newData);
            })
        .catch((err)=> {
            setIsPending(false);
        });
    }

    const form = useRef()
    // posting a comment to the API
    const handleSubmit = (e) => {
        e.preventDefault();
        form.current.reset();
        if (loginStatus) {
            fetchComments();
        } else {
            setReminder(true);
        }
    }


    return (
        <div className="comment-form-container">
            <form action="" onSubmit={handleSubmit} ref={form}>
                <textarea type="text" name="" id="" placeholder="Leave a comment..." onChange={(e) => { setComment(e.target.value) }}></textarea>
                {!IsPending && <button>send</button>}
                {IsPending && <button disabled id="disabled">sending</button>}
            </form>
            {reminder && <LogReminder reminder={reminder} setReminder={setReminder} />}
        </div>
    );
}

export default CommentForm;