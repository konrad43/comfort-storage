import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Col from 'react-bootstrap/Col';

import style from './Navbar.module.scss';
import logo from '../../assets/comfort storage logo 1.png';
import clsx from 'clsx';

export const MainNavbar = () => (
    <Navbar data-bs-theme="light" collapseOnSelect expand="lg" className={style.mobile}>
        <Container>
            <Navbar.Brand href="/">
                <img src={logo} alt="logo" className={style.logo} />
                <span className="semi-bold">Comfort Storage</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Offcanvas id="responsive-navbar-nav" placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
                        <Navbar.Brand href="#home">
                            <img src={logo} alt="logo" className={style.logo} />
                            Comfort Storage
                        </Navbar.Brand>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className={clsx(style.navBody)}>
                    <Col className="d-flex justify-content-lg-center" lg={10}>
                        <Nav className="d-flex mb-3 mb-lg-0">
                            <Nav.Link className="mx-2 mb-3 mb-lg-0" href="/#locations">
                                <span className={style.link}>Lokalizacje</span>
                            </Nav.Link>
                            <Nav.Link className="mx-2 mb-3 mb-lg-0" href="#features">
                                <span className={style.link}>Cennik</span>
                                Cennik
                            </Nav.Link>
                            <Nav.Link className="mx-2 mb-3 mb-lg-0" href="/contact">
                                <span className={style.link}>Kontakt</span>
                            </Nav.Link>
                        </Nav>
                    </Col>
                    <Col className="mt-lg-0 mt-xs-4" lg={2}>
                        <div className="elo">
                            <Button variant="danger">Rezerwuj teraz</Button>
                        </div>
                    </Col>
                </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Container>
    </Navbar>
);
