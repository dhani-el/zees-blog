import { useState, useEffect } from "react"


function Like({blogTitle}){
    const [like , setLike] = useState(true);
    const [no_Of_Likes , set_no_of_likes] = useState(0); 

    const data = new FormData();
    data.append("title",blogTitle);

    function handleLike(){
        fetch("https://zeesblog.onrender.com/likes/post", {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              },
            body: new URLSearchParams(data)
        }).then(function(){
            setLike((like)=> !like);
        })
    }

    function handleUnLike(){
        fetch("https://zeesblog.onrender.com/likes/delete", {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              },
            body: new URLSearchParams(data)
        }).then(function(){
            setLike((like)=> !like);
        })
    }

    useEffect(()=>{
        fetch(`https://zeesblog.onrender.com/likes/${blogTitle}`, {
            method: "GET",
            credentials:"include"
        }).then((value)=>{
            console.log("value is " , value);
            // set_no_of_likes(value);
        });
    }, [like, blogTitle])

    return <>
                <button onClick={like ? handleLike: handleUnLike}> {like ? "like" : "unlike"} </button> <p>{no_Of_Likes} likes</p>
            </>
}

export default Like