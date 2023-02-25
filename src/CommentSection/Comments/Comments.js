import { useState, useEffect } from "react";
import Usefetch from "../../TechnicalComponents/Usefetch";
import Comment from "../Comment/Comment";
import Skeleton from '../../Skeleton-Screens/Skeleton';

const Comments = ({title , pag}) => {
    const { data: comments, IsPending, error } = Usefetch(`https://zeesblog.onrender.com/comments/${title}/${pag}`);
    console.log("these are the comments ",comments);
    return (
        <div className="comments-wrapper">
            {IsPending && <Skeleton />}
            {error && <div className="err-msg">{error}</div>}
            { comments && <Comment comments={comments}/> }
        </div>
    );
}

export default Comments;