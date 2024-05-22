import Image from 'react-bootstrap/Image';

import facebook from '../../assets/icons/facebook.svg';
import yt from '../../assets/icons/youtube.svg';
import instagram from '../../assets/icons/instagram.svg';

import style from './Footer.module.scss';

interface SocialIcons {
    src: string;
    href: string;
}

const socialIcons: SocialIcons[] = [
    { src: facebook, href: 'https://www.facebook.com/profile.php?id=100086562558151' },
    {
        src: instagram,
        href: 'https://www.instagram.com/comfortstorage_eu?igsh=MXBpNnU4d2Fxd3cxYg=='
    },
    { src: yt, href: '#' }
];

export const SocialMedia = () => {
    const components = socialIcons.map(({ href, src }) => (
        <a href={href} key={href} target="_blank">
            <Image src={src} className="me-3 mb-4" />
        </a>
    ));
    return <div>{components}</div>;
};
