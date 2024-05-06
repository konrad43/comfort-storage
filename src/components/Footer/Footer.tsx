import clsx from 'clsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import style from './Footer.module.scss';
import logo from '../../assets/comfort storage logo 1.png';
import { SocialMedia } from './SocialMedia';

export const Footer = () => {
    return (
        <Container fluid className={clsx(style.container, 'mt-5')}>
            <Container className="" as="footer">
                <Row>
                    <Col className="me-lg-4" lg={3} xs={12}>
                        <div className={style.logoContainer}>
                            <div className={style.logoWrapper}>
                                <Image src={logo} className={style.logo} />
                                <h3 className={style.logoText}>Comfort Storage</h3>
                            </div>
                        </div>
                        <Button className="my-4" variant="outline-light">
                            Rezerwuj teraz
                        </Button>
                        <SocialMedia />
                    </Col>
                    <Col className="mt-3 ms-lg-5" lg={3} xs={12}>
                        <div className={clsx(style.footerSection, style.white)}>
                            <h6 className="mb-2">Kontakt</h6>
                            <p>hello@comfortstorage.eu</p>
                            <p>+48 789 030 980</p>
                        </div>
                    </Col>
                    <Col className="mt-3" lg={3} xs={12}>
                        <div className={clsx(style.footerSection, style.white)}>
                            <h6 className="mb-2">Placówki</h6>
                            <p>
                                ul. Jana Pawła II 45, <br /> 05-500 Piaseczno
                            </p>
                            ul. Bolesława Prusa 10,
                            <br /> 05-800 Pruszków
                        </div>
                    </Col>
                    <Col className="mt-3" lg={2} xs={12}>
                        <div className={clsx(style.footerSection, style.white)}>
                            <h6 className="mb-2">Dane firmy</h6>
                            <p>
                                Comfort Storage Sp. z o.o.
                                <br />
                                ul. Jana Pawła II 41,
                                <br />
                                05-500 Piaseczno
                                <br />
                                REGON: 523108178
                                <br />
                                NIP: 1231518424
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <div className={clsx(style.spacer, 'mb-4')} />
                    <div className={clsx(style.white, style.footerBottom, 'p-0')}>
                        <p className={clsx('ps-0')}>
                            © 2024 Comfort Storage. All rights reserved.
                        </p>
                        <div>
                            <a className={style.footerLink} href="#">
                                Cennik
                            </a>
                            <a className={style.footerLink} href="#">
                                Blog
                            </a>
                            <a className={style.footerLink} href="#">
                                Kontakt
                            </a>
                        </div>
                    </div>
                </Row>
            </Container>
        </Container>
    );
};
