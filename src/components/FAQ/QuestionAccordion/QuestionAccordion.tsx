import { FC, ReactNode, useContext } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import AccordionContext from 'react-bootstrap/AccordionContext';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

import plus from '../../../assets/icons/plus.svg';
import minus from '../../../assets/icons/minus.svg';

import style from './QuestionAccordion.module.scss';
import clsx from 'clsx';

interface AccordionToggleProps {
    children: ReactNode;
    eventKey: string;
    callback?: (...args: any[]) => void;
}

function AccordionToggle({ children, eventKey, callback }: AccordionToggleProps) {
    const { activeEventKey } = useContext(AccordionContext);

    const decoratedOnClick = useAccordionButton(eventKey, () => callback && callback(eventKey));

    const isCurrentEventKey = activeEventKey === eventKey;

    return (
        <button
            className={clsx(style.button, { [style.active]: isCurrentEventKey }, 'ms-lg-4')}
            type="button"
            onClick={decoratedOnClick}>
            <Image src={isCurrentEventKey ? minus : plus} />
        </button>
    );
}

export interface Question {
    title: string;
    desc: string;
}

export const QuestionAccordion: FC<{ question: Question }> = ({ question }) => {
    const { title, desc } = question;
    return (
        <Accordion defaultActiveKey="1">
            <Card className={clsx(style.questionCard, 'my-2')}>
                <Card.Header className={style.questionHeader}>
                    <h6 className={style.heading}>{title}</h6>
                    <AccordionToggle eventKey="0">+</AccordionToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body className="cardText">
                        <p className="px-3">{desc}</p>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    );
};
