import { useState, useEffect } from "react";
import Usefetch from "../../TechnicalComponents/Usefetch";
import Comment from "../Comment/Comment";

const Comments = () => {
    const { data: comments, IsPending, error } = Usefetch(url);

    return (
        <div className="comments-wrapper">
            {IsPending && <Skeleton />}
            {error && <div className="err-msg">{error}</div>}
            { comments && <Comment comments={comments}/> }
        </div>
    );
}

export default Comments;