import { useLocation } from 'react-router';
import { Cards } from '../components/Cards/Cards';
import { FAQ } from '../components/FAQ/FAQ';
import { Footer } from '../components/Footer/Footer';
import { Hero } from '../components/Hero/Hero';
import { MainVideo } from '../components/MainVideo/MainVideo';
import { MapSection } from '../components/MapSection/MapSection';
import { MobileButton } from '../components/MobileButton/MobileButton';
import { MainNavbar } from '../components/Navbar/Navbar';
import { Offer } from '../components/Offer/Offer';
import { PhotoSection } from '../components/PhotoSection/PhotoSection';
import { Referrals } from '../components/Referrals/Referrals';

export const Root = () => {
    const { state } = useLocation();
    return (
        <div className="">
            <MainNavbar />
            <Hero />
            {/* <MainVideo /> */}
            <Cards />
            <Offer />
            <MapSection />
            <PhotoSection />
            <Referrals />
            <FAQ />
            <Footer />
            <MobileButton />
        </div>
    );
};
