import '../styles/components/housingMainInfo.scss';
import { Logement } from '../provider/LogementsProvider';

interface HousingInfoProps {
    title: Logement['title'],
    location: Logement['location'],
    tags: Logement['tags']
}

const HousingInfo = ({ title, location, tags }: HousingInfoProps) => {
    return (
        <article className="housing_info">
            <h1 className="title">{title}</h1>
            <p className="location">{location}</p>
            <div className="tags">
                {tags.map((tag, index) => (
                    <span key={index} className="tag">
                        {tag}
                    </span>
                ))}
            </div>
        </article>
    );
}

export default HousingInfo;