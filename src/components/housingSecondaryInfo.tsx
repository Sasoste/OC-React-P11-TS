import React from 'react';
import '../styles/components/housingSecondaryInfo.scss';
import Dropdown from './dropdown';

interface HousingSecondaryInfoProps {
    description: string;
    equipments: string[];
}

const HousingSecondaryInfo: React.FC<HousingSecondaryInfoProps> = ({ description, equipments }) => {
    return (
        <section className="dropdowns">
            <Dropdown title="Description" content={description} />
            <Dropdown title="Équipements" content={equipments} />
        </section>
    );
}

export default HousingSecondaryInfo;