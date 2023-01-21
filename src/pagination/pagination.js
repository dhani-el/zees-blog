import { Link } from "react-router-dom";


export default function Pagination(props){
    return<div className="pagination">
    <button onClick={props.previouse}>prev</button>
    {/* <button>{props.currentPage}</button>  dont need it */}
    <button onClick={props.next}>next</button>
    </div>
}