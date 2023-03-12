import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import css from "./Movies.module.css"

const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [query, setQuery] = useState(searchParams.get("query"));
    const [moviesArr, setmMoviesArr] = useState([]);
    const location = useLocation();

    const onInputChange = (e) => {
        setQuery(e.target.value.trim().toLowerCase())
    }

    const HandleSubmit = (e) => {
        e.preventDefault();
        setSearchParams({ query: query })
        fetchMovies();
    }

    const fetchMovies = () => {
        fetch(`
https://api.themoviedb.org/3/search/movie?api_key=c3f95f745a9082077133badef3071055&language=en-US&query=${query}`)
            .then(response => {
                if (response.ok) { return (response.json()) }
                return Promise.reject(new Error('Please provide valid search value'))
            })
            .then((data) => {
                setmMoviesArr(data.results)
            })
    }

    if (!moviesArr) {
        return
    }

    return (<>
        <form className={(css.inputWrap)}>
            <input type="text" placeholder="Please write movie name" className={(css.input)}
                onChange={onInputChange} />
            <button className={(css.inputBtn)} type="submit" onClick={HandleSubmit}>
                <FiSearch className={(css.searchIcon)} />
            </button>
        </form>
        <ul className={(css.MovieList)}>
            {moviesArr.map(({ title, id }) => {
                return <li key={id}>
                    <Link state={{ from: location }} className={(css.MovieItem)} to={`/${id}`}>{title} </Link >
                </li>
            })}
        </ul>
    </>
    );
}

export default Movies