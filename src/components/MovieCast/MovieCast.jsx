import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../../services/api';

const MovieCast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        fetchMovieCast(movieId).then(setCast);
    }, [movieId]);

    return (
        <ul>
            {cast.map((actor) => (
                <li key={actor.id}>{actor.name}</li>
            ))}
        </ul>
    );
};

export default MovieCast;
