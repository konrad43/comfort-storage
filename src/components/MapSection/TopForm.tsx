import { useEffect, useRef, useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import clsx from 'clsx';

import search from '../../assets/icons/search.svg';
import { LatLng } from './cards';

import style from './MapSection.module.scss';

interface TopFormProps {
    map?: google.maps.Map;
    centerMap: (position: LatLng) => void;
}

export const TopForm = (props: TopFormProps) => {
    const { centerMap, map } = props;

    let autocomplete: google.maps.places.Autocomplete;

    const [marker, setMarker] = useState<google.maps.Marker>();
    const [location, setLocation] = useState<LatLng>();
    const infoContent = useRef<HTMLDivElement>(null);
    const input = useRef<HTMLInputElement>(null);
    const options = {
        fields: ['formatted_address', 'geometry', 'name'],
        strictBounds: false
    };

    useEffect(() => {
        async function loadInfoWindow() {
            if (!window.google.maps) {
                console.log('no map');
                return;
            }

            const places = (await google.maps.importLibrary('places')) as google.maps.PlacesLibrary;
            const { Autocomplete } = places;
            const infoWindow = new window.google.maps.InfoWindow();
            infoWindow.setContent(infoContent.current);

            if (input.current) {
                autocomplete = new Autocomplete(input.current, options);

                autocomplete.addListener('place_changed', () => {
                    infoWindow.close();
                    const place = autocomplete.getPlace();
                    if (place) {
                        const currentLocation = place.geometry?.location?.toJSON();
                        setLocation(currentLocation);
                        map && placeMarker(currentLocation);
                        currentLocation && centerMap(currentLocation);
                    }
                });
            }
        }

        loadInfoWindow();
    }, []);

    const placeMarker = async (position?: LatLng) => {
        if (!position) {
            return;
        }
        const markerLib = (await window.google.maps.importLibrary(
            'marker'
        )) as google.maps.MarkerLibrary;

        if (marker) {
            marker.setPosition(position);
        } else {
            setMarker(new markerLib.Marker({ map, position }));
        }
    };

    const onSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();

        map && placeMarker(location);
        location && centerMap(location);
    };

    return (
        <Form className="my-4" onSubmit={onSubmit}>
            <Form.Group className="mb-3 d-flex" controlId="map-form">
                <Form.Label hidden>Address</Form.Label>
                <InputGroup>
                    <Form.Control
                        className={clsx(style.input, 'ps-3')}
                        ref={input}
                        type="text"
                        placeholder="Wpisz adres..."
                    />
                    <InputGroup.Text>
                        <Image src={search} />
                    </InputGroup.Text>
                </InputGroup>
                <Button className="mx-2" variant="danger" type="submit">
                    Szukaj
                </Button>
                <div className="info" ref={infoContent}></div>
            </Form.Group>
        </Form>
    );
};
