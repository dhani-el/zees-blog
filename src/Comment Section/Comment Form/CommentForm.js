import { useState, useEffect } from "react";

const CommentForm = () => {

    const [comment, setComment] = useState()
    const [IsPending, setIsPending] = useState(false);
    const data = new FormData();
    data.append("comment", comment);

        const handleSubmit = (e) => {
                e.preventDefault();
                fetch(url, {
                    method: 'POST',
                    body: data,
                })
                    .then(() => {
                        setIsPending(false);
                    });
        }


    return (
        <div className="comment-form-container">
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name="" id="" placeholder="Leave a comment..." onChange={(e) => { setComment(e.target.value) }} />
                {!IsPending && <button>send</button>}
                {IsPending && <button disabled>sending</button>}
            </form>
        </div>
    );
}

export default CommentForm;