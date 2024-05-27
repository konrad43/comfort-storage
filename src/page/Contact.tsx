import { ToastContainer, toast } from 'react-toastify';

import { ContactForm } from '../components/ContactForm/ContactForm';
import { Footer } from '../components/Footer/Footer';
import { MainNavbar } from '../components/Navbar/Navbar';

import 'react-toastify/dist/ReactToastify.css';

export const Contact = () => {
    return (
        <>
            <MainNavbar />
            <ContactForm />
            <Footer />
            <ToastContainer />
        </>
    );
};
