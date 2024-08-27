import React from 'react';
import { useParams } from "react-router-dom";
import HostInfo from '../components/host';
import HousingInfo from '../components/housingMainInfo';
import HousingSecondaryInfo from '../components/housingSecondaryInfo';
import Carrousel from '../components/carrousel';
import Logements from "../assets/logements.json";
import Error from '../components/error';
import '../styles/pages/housing.scss';

interface Logement {
    id: string;
    title: string;
    location: string;
    tags: string[];
    host: {
        name: string;
        picture: string;
    };
    pictures: string[];
    description: string;
    rating: string;
    equipments: string[];
}

const Housing: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const logement = Logements.find((item: Logement) => item.id === id);

    if (!logement) {
        return <Error />;
    }

    return (
        <main>
            <Carrousel />
            <section className="housing-main">
                <HousingInfo title={logement.title} location={logement.location} tags={logement.tags} />
                <HostInfo hostName={logement.host.name} hostPicture={logement.host.picture} />
            </section>
            <HousingSecondaryInfo
                description={logement.description}
                equipments={logement.equipments}
            />
        </main>
    );
}

export default Housing;