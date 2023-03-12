import { Routes, Route, NavLink } from "react-router-dom";
import css from "App.module.css"
import { lazy, Suspense } from "react";
import { Audio } from 'react-loader-spinner';

const Home = lazy(() => import('components/Home/Home'));
const Movies = lazy(() => import('./Movies/Movies'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Cast = lazy(() => import("./Cast/Cast"));
const Reviews = lazy(() => import("./Reviews/Reviews"));

export const App = () => {
  return (
    <div>
      <Suspense fallback={<Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="loading"
      />}>
        <nav className={(css.navWrap)}>
          <NavLink to="/" id="sidebar">Home</NavLink>
          <NavLink to="/movies" id="sidebar">Movies</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/:movieId" element={<MovieDetails />} >
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};

// api key c3f95f745a9082077133badef3071055

// https://api.themoviedb.org/3/trending/movie/week?api_key=c3f95f745a9082077133badef3071055