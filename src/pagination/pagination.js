import { Link } from "react-router-dom";


export default function Pagination(props){
    return<>
    <button onClick={props.previouse}>prev</button>
    <button>{props.currentPage}</button>
    <button onClick={props.next}>next</button>
    </>
}