import '../styles/components/error.scss';
import { Link } from 'react-router-dom';
import { FC } from 'react';

const Error: FC = () => {
    return (
        <section className="error_message">
            <span className="number">404</span>
            <span className="error_text">Oups! La page que<span className="mobile_break"></span> vous demandez n'existe pas.</span>
            <Link to="/" className="link_home">Retourner sur la page d'accueil</Link>
        </section>
    );
};

export default Error;