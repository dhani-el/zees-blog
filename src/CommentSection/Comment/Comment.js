const Comment = ({ comments }) => {
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
//make id key value pair
 
export default Comment;