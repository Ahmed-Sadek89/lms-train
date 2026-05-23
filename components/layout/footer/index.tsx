import Copyright from "./copyright";
import FooterLinks from "./footer-links";
import RegisterOffer from "./register-offer";
import Stats from "./stats";

interface IPublicFooter {
    showStats?: boolean;
    showRegisterOffer?: boolean;
}

const PublicFooter = ({
    showStats = false,
    showRegisterOffer = false
}: IPublicFooter) => {
    return (
        <footer className="flex flex-col gap-[80px] bg-gray-900">
            {
                showStats && <Stats />
            }
            {
                showRegisterOffer && <RegisterOffer />
            }
            <FooterLinks />
            <Copyright />
        </footer>
    )
}

export default PublicFooter