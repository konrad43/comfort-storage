import Button from 'react-bootstrap/Button';
import style from './MobileButton.module.scss';

export function MobileButton() {
    return (
        <div className={style.wrapper}>
            <Button href="#" className={style.actionButton} variant="danger">
                <span className={style.buttonText}>Rezerwuj teraz</span>
            </Button>
        </div>
    );
}
