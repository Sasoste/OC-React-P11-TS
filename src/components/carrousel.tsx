import { useState, FC } from 'react';
import { useParams } from 'react-router-dom';
import Logements from '../assets/logements.json';
import '../styles/components/carrousel.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

interface Logement {
    id: string;
    title: string;
    pictures: string[];
}

const Carrousel: FC = () => {
    const { id } = useParams<{ id: string }>();
    const item = Logements.find((logement: Logement) => logement.id === id);

    if (!item) {
        return <div>Logement non trouvé</div>;
    }

    const [index, setIndex] = useState<number>(0);
    const length = item.pictures.length;

    function handlePrevious() {
        setIndex(index === 0 ? length - 1 : index - 1);
    }

    function handleNext() {
        setIndex(index === length - 1 ? 0 : index + 1);
    }

    return (
        <div className='carousel'>

            {length > 1 && (
                <button className='leftButton' onClick={handlePrevious}>
                    <FontAwesomeIcon icon={faChevronLeft} className="icon-chevron" />
                </button>
            )}
            <img src={item.pictures[index]} alt={item.title} />
            {length > 1 && (
                <button className='rightButton' onClick={handleNext}>
                    <FontAwesomeIcon icon={faChevronRight} className="icon-chevron" />
                </button>
            )}
            {length > 1 && (
                <p className='counter'>
                    {index + 1} / {length}
                </p>
            )}

        </div>
    );
}

export default Carrousel;