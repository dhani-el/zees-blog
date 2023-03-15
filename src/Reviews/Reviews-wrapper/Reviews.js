import ReviewSlider from "../Reviews-slider/Reviews";
import "./Reviews.css";

const Reviews = () => {
    const reviewsDets = [
        {
            id: 1,
            review : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ipsam eius veniam fugit laudantium doloribus ducimus unde nulla error illo?",
            reviewer : '-Rashad'
        },
        {
            id: 2,
            review : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ipsam eius veniam fugit laudantium doloribus ducimus unde nulla error illo?",
            reviewer : '-Daniel'
        },
        {
            id: 3,
            review : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ipsam eius veniam fugit laudantium doloribus ducimus unde nulla error illo?",
            reviewer : '-Chi'
        }
    ]
    return ( 
        <div className="reviews-wrapper">
            <ReviewSlider slides={reviewsDets} parentWidth={"80"}/>
        </div>
     );
}
 
export default Reviews;