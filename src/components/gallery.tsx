import Homecard from './homecard';
import Logements from "../assets/logements.json";
import "../styles/components/gallery.scss";

interface Logement {
    id: string;
    title: string;
    cover: string;
}

const Gallery: React.FC = () => {
    return (
        <div className="gallery">
            {Logements.map((logement: Logement) => (
                <Homecard key={logement.id} logement={logement} />
            ))}
        </div>
    );
}

export default Gallery;