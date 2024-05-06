import clsx from 'clsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import style from './FAQ.module.scss';
import { QuestionAccordion } from './QuestionAccordion/QuestionAccordion';

const questions = Array.from({ length: 6 }, () => 1);

const QuestionContainer = () => {
    return (
        <div className={clsx(style.questionContainer, 'p-4')}>
            <Row>
                <Col>
                    <h4 className="heading-h4 mb-3">Przechowywanie</h4>
                </Col>
            </Row>
            <Row>
                <Col lg={6}>
                    <div className={clsx('me-2', style.mobileMargin)}>
                        {questions.map((_, idx) => (
                            <QuestionAccordion key={idx} />
                        ))}
                    </div>
                </Col>
                <Col lg={6}>
                    <div className={(style.leftMargin3, style.mobileMargin)}>
                        {questions.map((_, idx) => (
                            <QuestionAccordion key={idx} />
                        ))}
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export const FAQ = () => {
    return (
        <Container className={clsx(style.wrapper, 'mt-5')}>
            <Row>
                <Col>
                    <h3 className="h3 mb-3">Najczęściej zadawane pytania</h3>
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
                                <div className="px-4">
                                    {questions.map((_, idx) => (
                                        <QuestionAccordion key={idx} />
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
                                <div className="px-4">
                                    {questions.map((_, idx) => (
                                        <QuestionAccordion key={idx} />
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
