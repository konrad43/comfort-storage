import { useLocation } from 'react-router-dom';
import { Cards } from '../components/Cards/Cards';
import { FAQ } from '../components/FAQ/FAQ';
import { Footer } from '../components/Footer/Footer';
import { Hero } from '../components/Hero/Hero';
import { MapSection } from '../components/MapSection/MapSection';
import { MobileButton } from '../components/MobileButton/MobileButton';
import { MainNavbar } from '../components/Navbar/Navbar';
import { Offer } from '../components/Offer/Offer';
import { PhotoSection } from '../components/PhotoSection/PhotoSection';
import { Referrals } from '../components/Referrals/Referrals';
import { useEffect } from 'react';

export const Root = () => {
    const { hash } = useLocation();

    useEffect(() => {
        const element = hash && document.querySelector(hash);

        if (element) {
            element.scrollIntoView();
        }
    }, [hash]);

    return (
        <div className="">
            <MainNavbar />
            <Hero />
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
