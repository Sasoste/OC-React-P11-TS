import '../styles/components/footer.scss';
import LogoFooter from '/logofooter.png';

const Footer = () => {
    return (
        <footer>
            <img src={LogoFooter} alt="Logo Kasa Blanc" />
            <span>© 2020 Kasa. All rights reserved</span>
        </footer>
    );
};

export default Footer;