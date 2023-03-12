import { useEffect, useState } from "react";
import css from "./Home.module.css"
import { Link, useLocation } from "react-router-dom";

const Home = () => {
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=c3f95f745a9082077133badef3071055&per_page=20`)
            .then(response => {
                if (response.ok) { return (response.json()) }
                return Promise.reject(new Error('Please provide valid search value'))
            })
            .then((data) => { setMovieArr(data.results) })
    }, [])

    const [movieArr, setMovieArr] = useState([]);
    const location = useLocation();

    return (<div>
        <h1 className={(css.homeTitle)}>Trending today</h1>
        <ul className={(css.MovieList)}>
            {movieArr.map(({ title, id }) => {
                return <li key={id}>
                    <Link state={{ from: location }} className={(css.MovieItem)} to={`/${id}`}>{title} </Link >
                </li>
            })}
        </ul>
    </div >
    );
}

export default Home