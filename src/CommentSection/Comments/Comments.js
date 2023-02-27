import { useState, useEffect } from "react";
import Usefetch from "../../TechnicalComponents/Usefetch";
import Comment from "../Comment/Comment";
import Skeleton from '../../Skeleton-Screens/Skeleton';
import CommentForm from "../Comment Form/CommentForm"

const Comments = ({title , pag}) => {
    const { data: comment, IsPending, error ,setdata } = Usefetch(`https://zeesblog.onrender.com/comments/${title}/${pag}`);
    console.log("these are the comments ",comment);
    return (
        <div className="comments-wrapper">
            {IsPending && <Skeleton />}
            {error && <div className="err-msg">{error}</div>}
            <CommentForm title = {title} updateFunc = {setdata}/>
            { comment && <Comment comments={comment}/> }
        </div>
    );
}

export default Comments;