const Comment = ({ comments }) => {
    console.log("the received comment is ", comments);
    return ( 
        <div className="comment-wrapper">
            { comments.map((comment) => (
                <div className="comment-stn" key={comment.id}>
                    <h3>{comment.username}</h3>
                    <p>{comment.body}</p>
                </div>
            )) }
        </div>
     );
}
 
export default Comment;