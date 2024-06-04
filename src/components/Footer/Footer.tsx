import clsx from 'clsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import logo from '../../assets/comfort storage logo 1.png';
// @ts-expect-error
import privacyPolicy from '../../assets/comfor-storage-polityka-prywatnosci.pdf';

import style from './Footer.module.scss';
import { SocialMedia } from './SocialMedia';
import { reservationLink } from '../../constants';

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
                        <Button
                            className="my-4"
                            variant="outline-light"
                            href={reservationLink}
                            target="_blank">
                            Rezerwuj teraz
                        </Button>
                        <SocialMedia />
                    </Col>
                    <Col className="mt-3 ms-lg-1 me-lg-5" lg={2} xs={12}>
                        <div className={clsx(style.footerSection, style.white)}>
                            <h6 className={clsx('mb-2', style.footerHeading)}>Kontakt</h6>
                            <p>hello@comfortstorage.eu</p>
                            <p>+48 789 030 980</p>
                        </div>
                    </Col>
                    <Col className="mt-3" lg={3} xs={12}>
                        <div className={clsx(style.footerSection, style.white)}>
                            <h6 className={clsx('mb-2', style.footerHeading)}>Placówki</h6>
                            <p>
                                ul. Jana Pawła II 45, <br /> 05-500 Piaseczno
                            </p>
                            ul. Bolesława Prusa 10,
                            <br /> 05-800 Pruszków
                        </div>
                    </Col>
                    <Col className="mt-3" lg={3} xs={12}>
                        <div className={clsx(style.footerSection, style.white)}>
                            <h6 className={clsx('mb-2', style.footerHeading)}>Dane firmy</h6>
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
                    <Col>
                        <div className={clsx(style.spacer, 'mb-4')} />
                        <div className={clsx(style.white, style.footerBottom, 'p-0 mb-3')}>
                            <p className={clsx('ps-0')}>
                                © 2024 Comfort Storage. All rights reserved.
                            </p>
                            <div className={style.footerLinksWrapper}>
                                <a
                                    className={style.footerLink}
                                    href={reservationLink}
                                    target="_blank">
                                    Cennik
                                </a>
                                {/* <a className={style.footerLink} href="#" target="_blank">
                                    Blog
                                </a> */}
                                <a className={style.footerLink} href="/contact">
                                    Kontakt
                                </a>
                                <a
                                    className={style.footerLink}
                                    href={privacyPolicy}
                                    target="_blank">
                                    Polityka Prywatności
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};
