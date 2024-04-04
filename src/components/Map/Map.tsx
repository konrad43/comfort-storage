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
    const ref = useRef<HTMLDivElement>(null);
    let map: google.maps.Map;

    useEffect(() => {
        async function getMapLibrary() {
            const { Marker } = (await google.maps.importLibrary(
                'marker'
            )) as google.maps.MarkerLibrary;
            return { Marker };
        }

        if (ref.current) {
            map = new window.google.maps.Map(ref.current, {
                center,
                zoom
            });

            map.setOptions({ styles: mapStyles });

            getMapLibrary().then(({ Marker }) => {
                places.forEach(position => {
                    new Marker({
                        map: map,
                        position: position,
                        title: 'Elo'
                    });
                });
            });
        }
    });

    return (
        <div className={style.map} ref={ref as React.MutableRefObject<HTMLDivElement>} id="map" />
    );
}

export const Map = (props: MapProps) => {
    if (!apiKey) {
        return null;
    }
    return (
        <Wrapper apiKey={apiKey} render={render}>
            <MyMapComponent {...props} />
        </Wrapper>
    );
};
