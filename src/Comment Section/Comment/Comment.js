const Comment = ({ comments }) => {
    return ( 
        <div className="comment-wrapper">
            { comments.map((comment) => {
                <div className="comment-stn" key={comment.id}>
                    {comment}
                </div>
            }) }
        </div>
     );
}
 
export default Comment;