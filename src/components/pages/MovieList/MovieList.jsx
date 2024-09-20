import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
    const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

    return (
        <ul>
            {movies.map((movie) => (
                <li key={movie.id}>
                    <Link to={`/movies/${movie.id}`}>
                        <h2>{movie.title}</h2>

                        {movie.poster_path ? (
                            <img
                                src={`${BASE_IMAGE_URL}${movie.poster_path}`}
                                alt={movie.title}
                                width="150"
                            />
                        ) : (
                            <p>No image available</p>
                        )}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

MovieList.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            poster_path: PropTypes.string,
        }),
    ).isRequired,
};

export default MovieList;
