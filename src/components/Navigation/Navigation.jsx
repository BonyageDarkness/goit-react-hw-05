import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <NavLink to="/" style={{ marginRight: '20px' }}>
                Home
            </NavLink>
            <NavLink to="/movies">Movies</NavLink>
        </nav>
    );
};

export default Navigation;
