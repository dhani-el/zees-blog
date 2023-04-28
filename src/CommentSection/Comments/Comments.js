import { useState, useEffect } from "react";
import Usefetch from "../../TechnicalComponents/Usefetch";
import Comment from "../Comment/Comment";
import CommentForm from "../Comment Form/CommentForm";
import './Comments.css';


const Comments = ({title , pag}) => {
    const { data: comments, IsPending, error ,setdata } = Usefetch(`https://zeesblog.onrender.com/comments/${title}/${pag}`);
    return (
        <div className="comments-wrapper">
            {IsPending ? <div>Loading...</div> : <div className="header">Comments</div> }
            {error && <div className="err-msg">{error}</div>}
            <CommentForm title = {title} updateFunc = {setdata}/>
            { comments && <Comment comments={comments}/> }
        </div>
    );
}

export default Comments;