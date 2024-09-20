import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import NotFoundPage from './components/pages/NotFoundPage/NotFoundPage';

const HomePage = lazy(() => import('./components/pages/HomePage/HomePage'));
const MoviesPage = lazy(
    () => import('./components/pages/MoviesPage/MoviesPage'),
);
const MovieDetailsPage = lazy(
    () => import('./components/pages/MovieDetailsPage/MovieDetailsPage'),
);
const MovieCast = lazy(() => import('./components/MovieCast/MovieCast'));
const MovieReviews = lazy(
    () => import('./components/MovieReviews/MovieReviews'),
);

function App() {
    return (
        <Router>
            <Navigation />
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/movies" element={<MoviesPage />} />
                    <Route
                        path="/movies/:movieId"
                        element={<MovieDetailsPage />}
                    >
                        <Route path="cast" element={<MovieCast />} />
                        <Route path="reviews" element={<MovieReviews />} />
                    </Route>
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Suspense>
        </Router>
    );
}

export default App;
