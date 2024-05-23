import clsx from 'clsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import style from './FAQ.module.scss';
import { QuestionAccordion } from './QuestionAccordion/QuestionAccordion';
import { storage } from './questions/storage';
import { contract } from './questions/contract';
import { payments } from './questions/payments';

const storageLeft = storage.slice(0, 6);
const storageRight = storage.slice(6);

const QuestionContainer = () => {
    return (
        <div className={clsx(style.questionContainer, 'p-lg-4 p-2')}>
            <Row>
                <Col>
                    <h4 className="heading-h4 mb-3">Przechowywanie</h4>
                </Col>
            </Row>
            <Row>
                <Col lg={6}>
                    <div className={clsx('me-2', style.mobileMargin)}>
                        {storageLeft.map((q, idx) => (
                            <QuestionAccordion question={q} key={idx} />
                        ))}
                    </div>
                </Col>
                <Col lg={6}>
                    <div className={(style.leftMargin3, style.mobileMargin)}>
                        {storageRight.map((q, idx) => (
                            <QuestionAccordion question={q} key={idx} />
                        ))}
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export const FAQ = () => {
    return (
        <Container className={clsx(style.wrapper)}>
            <Row>
                <Col>
                    <h3 className="h3 mb-3 heading-h3">Najczęściej zadawane pytania</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <QuestionContainer />
                </Col>
            </Row>
            <Row>
                <Col lg={6} className={style.containerColor}>
                    <div className={clsx(style.questionContainer, 'my-4')}>
                        <Row>
                            <Col>
                                <h4 className="heading-h4 mb-3 pt-3 ps-3">Umowa</h4>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="px-lg-4 px-2">
                                    {contract.map((q, idx) => (
                                        <QuestionAccordion question={q} key={idx} />
                                    ))}
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col lg={6}>
                    <div className={clsx(style.questionContainer, 'my-4 ms-lg-2')}>
                        <Row>
                            <Col>
                                <h4 className="heading-h4 mb-3 pt-3 ps-3">Płatności</h4>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="px-lg-4 px-2">
                                    {payments.map((q, idx) => (
                                        <QuestionAccordion question={q} key={idx} />
                                    ))}
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};
