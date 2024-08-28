import { useParams } from "react-router-dom";
import { useLogements } from '../provider/LogementsProvider';
import HostInfo from '../components/host';
import HousingInfo from '../components/housingMainInfo';
import HousingSecondaryInfo from '../components/housingSecondaryInfo';
import Carrousel from '../components/carrousel';
import Error from '../components/error';
import '../styles/pages/housing.scss';


const Housing = () => {
    const { id } = useParams();
    const { logements } = useLogements();

    const logement = logements.find((item) => item.id === id);

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