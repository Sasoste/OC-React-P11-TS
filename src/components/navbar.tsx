import '../styles/components/navbar.scss';
import { NavLink } from 'react-router-dom';
import { FC } from 'react';

const Navbar: FC = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/" className={(nav) => (nav.isActive ? "active-style" : 'none')}>
                        Accueil
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={(nav) => (nav.isActive ? "active-style" : 'none')}>
                        A Propos
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;