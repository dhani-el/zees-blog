import { useState, useRef, useEffect } from "react";
import './CommentForm.css';

const CommentForm = ({title , updateFunc}) => {

    const [comment, setComment] = useState()
    const [IsPending, setIsPending] = useState(false);
    const data = new FormData();
    data.append("title", title);
    data.append("comment", comment);

    const form = useRef()
        const handleSubmit = (e) => {
                e.preventDefault();
                form.current.reset();
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
        }

        useEffect(function(){
            console.log("re render was here");
        })

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