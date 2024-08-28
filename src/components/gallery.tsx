import Homecard from './homecard';
import { useLogements } from '../provider/LogementsProvider';
import "../styles/components/gallery.scss";

const Gallery = () => {
    const { logements } = useLogements();

    return (
        <div className="gallery">
            {logements.map((logement) => (
                <Homecard key={logement.id} logement={logement} />
            ))}
        </div>
    );
}

export default Gallery;