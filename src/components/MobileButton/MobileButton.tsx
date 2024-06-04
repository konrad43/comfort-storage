import Button from 'react-bootstrap/Button';
import style from './MobileButton.module.scss';
import { reservationLink } from '../../constants';

export function MobileButton() {
    return (
        <div className={style.wrapper}>
            <Button
                className={style.actionButton}
                variant="danger"
                href={reservationLink}
                target="_blank">
                <span className={style.buttonText}>Rezerwuj teraz</span>
            </Button>
        </div>
    );
}
