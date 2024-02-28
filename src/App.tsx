import logo from './logo.svg';
import './App.scss';
import { MainNavbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { MainVideo } from './components/MainVideo/MainVideo';
import { Cards } from './components/Cards/Cards';

function App() {
    return (
        <div className="">
            <MainNavbar />
            <Hero />
            <MainVideo />
            <Cards />
        </div>
    );
}

export default App;
