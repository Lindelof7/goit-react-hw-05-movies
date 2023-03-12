import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import nextId from "react-id-generator";
import css from "./Cast.module.css"
import NotFound from '../Photos/NotFound.jpg'

const Cast = () => {
    const params = useParams();
    const { movieId } = params;
    const [cast, setCast] = useState(null);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=c3f95f745a9082077133badef3071055&language=en-US&language=en-US`)
            .then(response => {
                if (response.ok) { return (response.json()) }
                return Promise.reject(new Error('Please provide valid search value'))
            })
            .then((data) => {
                setCast(data.cast);
            })
    }, [movieId])

    if (!cast) {
        return
    }

    return (
        <div className={(css.castWrap)}>
            {cast.map((cast) => <div key={nextId()}>
                <li className={(css.castElWrap)}>
                    {cast.profile_path ? <img src={`https://image.tmdb.org/t/p/original${cast.profile_path}`} width="150px" alt="Not available"></img>
                        : <img src={NotFound} width="150px" alt="Not available"></img>}
                    <p>{cast.name}</p>
                    <p>Character: {cast.character}</p>
                </li>
            </div>)}
        </div>
    )
}



export default Cast