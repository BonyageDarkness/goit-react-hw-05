import { useState } from 'react';
import { searchMovies } from '../../../services/api';
import MovieList from '../MovieList/MovieList';

const MoviesPage = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const handleSearch = async (e) => {
        e.preventDefault();
        const results = await searchMovies(query);
        setMovies(results);
    };

    return (
        <>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            <MovieList movies={movies} />
        </>
    );
};

export default MoviesPage;
