import Copyright from "./components/copyright";
import FooterLinks from "./components/footer-links";
import RegisterOffer from "./components/register-offer";
import Stats from "./components/stats";

interface IPublicFooter {
    showStats?: boolean;
    showRegisterOffer?: boolean;
}

const PublicFooter = ({
    showStats = false,
    showRegisterOffer = false
}: IPublicFooter) => {
    return (
        <footer className="flex flex-col text-white bg-gray-900">
            {showStats && <Stats />}
            {showRegisterOffer && <RegisterOffer />}
            <FooterLinks />
            <Copyright />
        </footer>
    )
}

export default PublicFooter