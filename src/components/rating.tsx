import { useParams } from "react-router-dom";
import "../styles/components/rating.scss";
import { useLogements } from '../provider/LogementsProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Error from "./error";

const Rating = () => {

    const { logements } = useLogements();
    const { id } = useParams();
    const item = logements.find((logement) => logement.id === id);

    if (!item) {
        return <Error />;
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