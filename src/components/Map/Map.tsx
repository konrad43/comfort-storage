import { Wrapper, Status } from '@googlemaps/react-wrapper';
import { ReactElement, useEffect, useRef } from 'react';

import style from './Map.module.scss';
import { mapStyles, places } from './map.config';

const apiKey = process.env.REACT_APP_GOOGLE_MAPS;

const render = (status: Status) => {
    if (status === Status.LOADING) return <h3>{status} ..</h3>;
    if (status === Status.FAILURE) return <h3>{status} ...</h3>;
    return <></>;
};

export type MapProps = {
    center: google.maps.LatLngLiteral;
    zoom: number;
};

export function MyMapComponent({ center, zoom }: MapProps) {
    return <div className={style.map} id="map" />;
}

export const Map = ({ children }: { children: ReactElement }) => {
    if (!apiKey) {
        return null;
    }
    return (
        <Wrapper apiKey={apiKey} render={render}>
            {children}
        </Wrapper>
    );
};
