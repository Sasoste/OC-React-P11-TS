import Rating from './rating';
import '../styles/components/host.scss';
import { Logement } from '../provider/LogementsProvider';

interface HostInfoProps {
    hostName: Logement['host']['name'];
    hostPicture: Logement['host']['picture'];
}

const HostInfo = ({ hostName, hostPicture }: HostInfoProps) => {
    const [firstName, lastName] = hostName.split(" ");

    return (
        <article className="host_info">
            <div className="host">
                <p className="hostName">
                    {firstName} <br />
                    {lastName}
                </p>
                <img className="hostImage" src={hostPicture} alt="host" />
            </div>
            <Rating />
        </article>
    );
}

export default HostInfo;