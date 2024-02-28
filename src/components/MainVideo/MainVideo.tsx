import Container from 'react-bootstrap/Container';

import style from './MainVideo.module.scss';

export const MainVideo = () => (
    <Container className="py-5">
        <div className={style.video}></div>
    </Container>
);
