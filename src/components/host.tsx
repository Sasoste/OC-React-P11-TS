import { FC } from 'react';
import Rating from './rating';
import '../styles/components/host.scss';

interface HostInfoProps {
    hostName: string;
    hostPicture: string;
}

const HostInfo: FC<HostInfoProps> = ({ hostName, hostPicture }) => {
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