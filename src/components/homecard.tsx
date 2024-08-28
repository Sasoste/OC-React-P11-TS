import { Link } from "react-router-dom";
import '../styles/components/homecard.scss';
import { Logement } from '../provider/LogementsProvider';

interface HomecardProps {
    logement: Logement;
}

const Homecard = ({ logement }: HomecardProps) => {
    return (
        <Link to={`/housing/${logement.id}`} className="cardLink">
            <div className="card">
                <div className="overlay"></div>
                <img className="cardImg" src={logement.cover} alt={logement.title} />
                <p className="cardTitle">{logement.title}</p>
            </div>
        </Link>
    );
}

export default Homecard;