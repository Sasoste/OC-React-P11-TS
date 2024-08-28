import '../styles/components/housingSecondaryInfo.scss';
import Dropdown from './dropdown';
import { Logement } from '../provider/LogementsProvider';

interface HousingSecondaryInfoProps {
    description: Logement['description'];
    equipments: Logement['equipments'];
}

const HousingSecondaryInfo = ({ description, equipments }: HousingSecondaryInfoProps) => {
    return (
        <section className="dropdowns">
            <Dropdown title="Description" content={description} />
            <Dropdown title="Équipements" content={equipments} />
        </section>
    );
}

export default HousingSecondaryInfo;