import '../styles/components/banner.scss'
import { useLocation } from 'react-router-dom';

type BannerProps = {
    imgSrc: string;
    imgAlt: string;
}

const Banner = ({ imgSrc, imgAlt }: BannerProps) => {

    const location = useLocation();
    const isHomePage = location.pathname === "/";

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
