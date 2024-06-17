import clsx from 'clsx';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Col from 'react-bootstrap/Col';

import style from './Navbar.module.scss';
import logo from '../../assets/comfort storage logo 1.png';
import { rentLink, reservationLink } from '../../constants';

export const MainNavbar = () => (
    <Navbar
        data-bs-theme="light"
        collapseOnSelect
        expand="lg"
        className={clsx(style.mobile, style.navbar)}
        sticky="top">
        <Container>
            <Navbar.Brand href="/home">
                <img src={logo} alt="logo" className={style.logo} />
                <span className="semi-bold">Comfort Storage</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Offcanvas id="responsive-navbar-nav" placement="end">
                <Offcanvas.Header closeButton className={style.mobileNav}>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
                        <Navbar.Brand href="/home">
                            <img src={logo} alt="logo" className={style.logo} />
                            <span className="semi-bold">Comfort Storage</span>
                        </Navbar.Brand>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className={clsx(style.navBody)}>
                    <Col className="d-flex justify-content-center" lg={7}>
                        <Nav className="d-flex mb-3 mb-lg-0">
                            <Nav.Link
                                className={clsx('mx-2 mb-3 mb-lg-0', style.navLink)}
                                href="/home#locations">
                                <span className={style.link}>Lokalizacje</span>
                            </Nav.Link>
                            <Nav.Link
                                className={clsx('mx-2 mb-3 mb-lg-0', style.navLink)}
                                href={reservationLink}
                                target="_blank">
                                <span className={style.link}>Cennik</span>
                            </Nav.Link>
                            <Nav.Link
                                className={clsx('mx-2 mb-3 mb-lg-0', style.navLink)}
                                href="/contact">
                                <span className={style.link}>Kontakt</span>
                            </Nav.Link>
                        </Nav>
                    </Col>
                    <Col className="mt-lg-0 mt-xs-4" lg={5}>
                        <div className={style.mobileNav}>
                            <Button
                                className={clsx(style.navBtn, 'mb-4 mb-lg-0')}
                                variant="danger"
                                href={reservationLink}
                                target="_blank">
                                Wynajmij teraz
                            </Button>
                        </div>
                        <div className={style.mobileNav}>
                            <Button
                                className={clsx(style.navBtn, 'mb-3 mb-lg-0 me-lg-2')}
                                variant="outline-dark"
                                href={rentLink}
                                target="_blank">
                                Moje wynajmy
                            </Button>
                        </div>
                    </Col>
                </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Container>
    </Navbar>
);
