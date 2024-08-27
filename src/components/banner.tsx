import '../styles/components/banner.scss'
import { FC } from 'react';
import { useLocation } from 'react-router-dom';

interface BannerProps {
    imgSrc: string;
    imgAlt: string;
}

const Banner: FC<BannerProps> = ({ imgSrc, imgAlt }) => {

    const location = useLocation(); // Quel typage?
    const isHomePage: boolean = location.pathname === "/";

    return (
        <section className="banner">
            <img src={imgSrc} alt={imgAlt} />
            {isHomePage && (
                <>
                    <div className="overlay"></div>
                    <span className="text_on_banner">
                        Chez vous,<span className="mobile-line-break"></span> partout et ailleurs
                    </span>
                </>
            )}
        </section>
    );
};

export default Banner;
