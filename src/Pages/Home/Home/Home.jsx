import About from "../AboutSection/About";
import Banner from "../BannerSection/Banner";
import CallToAction from "../CallToAction/CallToAction";
import ContactSection from "../ContactSection/ContactSection";
import FaqSection from "../FAQ/FaqSection";
import FooterSection from "../FooterSection/FooterSection";
import MenuSection from "../MenuSection/MenuSection";
import Navbar from "../Navbar/Navbar";
import Services from "../ServicesSection/Services";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <MenuSection></MenuSection>
            <FaqSection></FaqSection>
            <CallToAction></CallToAction>
            <ContactSection></ContactSection>
            <FooterSection></FooterSection>
        </div>
    );
};

export default Home;