import './App.scss';
import { MainNavbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { MainVideo } from './components/MainVideo/MainVideo';
import { Cards } from './components/Cards/Cards';
import { Offer } from './components/Offer/Offer';
import { MapSection } from './components/MapSection/MapSection';
import { PhotoSection } from './components/PhotoSection/PhotoSection';
import { Referrals } from './components/Referrals/Referrals';
import { FAQ } from './components/FAQ/FAQ';
import { Footer } from './components/Footer/Footer';

function App() {
    return (
        <div className="">
            <MainNavbar />
            <Hero />
            <MainVideo />
            <Cards />
            <Offer />
            <MapSection />
            <PhotoSection />
            <Referrals />
            <FAQ />
            <Footer />
        </div>
    );
}

export default App;
