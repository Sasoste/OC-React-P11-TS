import '../styles/components/header.scss';
import Navbar from './navbar';
import Logo from '/logo.png';
import { Link } from 'react-router-dom';
import { FC } from 'react';

const Header: FC = () => {
    return (
        <header>
            <Link to="/">
                <img src={Logo} alt="Logo Kasa" />
            </Link>
            <Navbar />
        </header>
    );
};

export default Header;