import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import nextId from "react-id-generator";


const Reviews = () => {
    const params = useParams();
    const { movieId } = params;
    const [reviews, setReviews] = useState(null);

    useEffect(() => {
        fetch(`
https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=c3f95f745a9082077133badef3071055&language=en-US&language=en-US&page=1`)
            .then(response => {
                if (response.ok) { return (response.json()) }
                return Promise.reject(new Error('Please provide valid search value'))
            })
            .then((data) => {
                setReviews(data.results);
            })
    }, [movieId])

    if (!reviews) {
        return
    }

    return (
        <ul >
            {
                reviews.length === 0 ? <p>We don't have ane reviews for this movie</p> :
                    reviews.map((review) => <div key={nextId()}>
                        <li>
                            <h3>Author: {review.author}</h3>
                            <p>{review.content}</p>
                        </li>
                    </div>)
            }
        </ul>
    )
}

export default Reviews