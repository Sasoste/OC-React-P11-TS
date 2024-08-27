import React from 'react';
import '../styles/components/housingMainInfo.scss';

interface Logement {
    title: string;
    location: string;
    tags: string[];
}

const HousingInfo: React.FC<Logement> = ({ title, location, tags }) => {
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