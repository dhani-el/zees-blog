import { useState, useRef, useEffect } from "react";
import './CommentForm.css';
import Cookies from 'js-cookie';

const CommentForm = ({title , updateFunc}) => {

    const [comment, setComment] = useState()
    const [IsPending, setIsPending] = useState(false);
    const data = new FormData();
    data.append("title", title);
    data.append("comment", comment);

    const loginStatus = Cookies.get('loginStatus');

    const form = useRef()
        const handleSubmit = (e) => {
                e.preventDefault();
                form.current.reset();
                if (loginStatus) {
                    setIsPending(true);
                    fetch("https://zeesblog.onrender.com/comments/post", {
                        method: 'POST',
                        credentials:"include",
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                          },
                        body: new URLSearchParams(data),
                    }).then((value) => value.json())
                        .then((newVal) => {
                            updateFunc(newVal);
                            // setIsPending(false);
                        }).then(() => {
                            setIsPending(false);
                        }); 
                } else {
                    alert('you need to be logged in love!')
                }
        }


    return (
        <div className="comment-form-container">
            <form action="" onSubmit={handleSubmit} ref={form}>
                <textarea type="text" name="" id="" placeholder="Leave a comment..." onChange={(e) => { setComment(e.target.value) }}></textarea>
                {!IsPending && <button>send</button>}
                {IsPending && <button disabled id="disabled">sending</button>}
            </form>
        </div>
    );
}

export default CommentForm;