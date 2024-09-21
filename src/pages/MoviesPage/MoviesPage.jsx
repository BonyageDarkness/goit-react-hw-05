import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from '../../services/api';
import MovieList from '../MovieList/MovieList';

const MoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') ?? '';

    useEffect(() => {
        if (query === '') return;

        const fetchMovies = async () => {
            const results = await searchMovies(query);
            setMovies(results);
        };

        fetchMovies();
    }, [query]);

    const handleSearch = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const searchQuery = form.elements.search.value.trim();

        if (searchQuery === '') {
            setSearchParams({});
            return;
        }

        setSearchParams({ query: searchQuery });
    };

    return (
        <>
            <form onSubmit={handleSearch}>
                <input name="search" type="text" defaultValue={query} />
                <button type="submit">Search</button>
            </form>
            <MovieList movies={movies} />
        </>
    );
};

export default MoviesPage;
