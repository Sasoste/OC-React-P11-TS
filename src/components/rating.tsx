import { useParams } from "react-router-dom";
import "../styles/components/rating.scss";
import Logements from "../assets/logements.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

interface Logement {
    id: string;
    rating: string;
}

const Rating: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const item = Logements.find((logement: Logement) => logement.id === id);

    if (!item) {
        return <div>Logement non trouvé</div>;
    }

    const rating: number = parseInt(item.rating, 10);
    const stars: JSX.Element[] = [];

    for (let i = 0; i < rating; i++) {
        stars.push(<FontAwesomeIcon key={i} icon={faStar} className="active" />);
    }
    for (let i = rating; i < 5; i++) {
        stars.push(<FontAwesomeIcon key={i} icon={faStar} className="inactive" />);
    }

    return (
        <div className="rating">
            {stars}
        </div>
    );
}

export default Rating;