import { Suspense } from "react";
import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { Audio } from 'react-loader-spinner';
import nextId from "react-id-generator";
import css from './MovieDetails.module.css'

const MovieDetails = () => {
    const params = useParams();
    const { movieId } = params;
    const [genres, setGenres] = useState(null);
    const location = useLocation();
    const [locLink, setLocLink] = useState(null)

    useEffect(() => {
        if (locLink) {
            return
        }

        const linkRef = location.state?.from ?? '/';
        setLocLink(linkRef)
    }, [locLink, location.state?.from]);


    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=c3f95f745a9082077133badef3071055&language=en-US`)
            .then(response => {
                if (response.ok) { return (response.json()) }
                return Promise.reject(new Error('Please provide valid search value'))
            })
            .then((data) => {
                setMovie(data); setGenres(data.genres)
            })
    }, [movieId])

    const [movie, setMovie] = useState({});

    if (!genres) {
        return null;
    }
    return (<>
        <div className={(css.goBackBtn)} >
            <Link to={locLink} >
                Go back
            </Link>
        </div>
        <div className={(css.movieDetailsWrap)}>
            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                className={(css.img)} alt="123" width="270px" />
            <div className={(css.movieDetailsTextWrap)}>
                <h1>{movie.original_title}</h1>
                <p>User score: {Math.round(movie.vote_average * 10)}%</p>
                <h2>Overview</h2>
                <p>{movie.overview}</p>
                <h2>Genres</h2>
                <ul className={(css.genresList)}>{genres.map((genre) => <li key={nextId()}>{genre.name}</li>)}</ul>
            </div>
        </div >
        <div className={(css.addInfoWrap)}>
            <p className={(css.addInfo)}>Additional information</p>
            <ul>
                <li>
                    <Link to="cast">Cast</Link>
                </li>
                <li>
                    <Link to="reviews">Reviews</Link>
                </li>
            </ul>
        </div>
        <Suspense fallback={<Audio
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="loading"
        />}>
            <Outlet />
        </Suspense>
    </>
    );
}

export default MovieDetails