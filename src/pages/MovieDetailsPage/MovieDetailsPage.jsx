import { useEffect, useState } from 'react';
import {
    useParams,
    Link,
    Outlet,
    useNavigate,
    useLocation,
} from 'react-router-dom';
import { fetchMovieDetails } from '../../services/api';

const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

    // Для возврата на предыдущую страницу
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        fetchMovieDetails(movieId).then(setMovie);
    }, [movieId]);

    if (!movie) return <div>Loading...</div>;

    const handleGoBack = () => {
        navigate(location.state?.from || '/movies');
    };

    return (
        <div>
            <button onClick={handleGoBack}>Go back</button>

            <h1>{movie.title}</h1>

            {movie.poster_path ? (
                <img
                    src={`${BASE_IMAGE_URL}${movie.poster_path}`}
                    alt={movie.title}
                    width="300"
                />
            ) : (
                <p>No image available</p>
            )}

            <p>{movie.overview}</p>

            <Link to="cast">Cast</Link>
            <Link to="reviews">Reviews</Link>

            <Outlet />
        </div>
    );
};

export default MovieDetailsPage;
