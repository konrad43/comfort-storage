import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import search from '../../assets/icons/search.svg';
import { useEffect, useRef, useState } from 'react';
import { LatLng } from './cards';

interface TopFormProps {
    // map: google.maps.Map;
    centerMap: (position: LatLng) => void;
}

export const TopForm = (props: TopFormProps) => {
    const { centerMap } = props;

    let autocomplete: google.maps.places.Autocomplete;
    const [location, setLocation] = useState<LatLng>();
    const infoContent = useRef<HTMLDivElement>(null);
    const input = useRef<HTMLInputElement>(null);
    const options = {
        fields: ['formatted_address', 'geometry', 'name'],
        strictBounds: false
    };

    useEffect(() => {
        async function loadInfoWindow() {
            if (!window.google.maps || !google.maps.places) {
                return;
            }
            const infoWindow = new window.google.maps.InfoWindow();
            infoWindow.setContent(infoContent.current);

            if (input.current) {
                autocomplete = new google.maps.places.Autocomplete(input.current, options);

                autocomplete.addListener('place_changed', () => {
                    infoWindow.close();
                    const place = autocomplete.getPlace();
                    setLocation(place.geometry?.location?.toJSON());
                });
            }
        }

        loadInfoWindow();
    }, []);

    const onSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();

        location && centerMap(location);
    };

    return (
        <Form className="my-4" onSubmit={onSubmit}>
            <Form.Group className="mb-3 d-flex" controlId="map-form">
                <Form.Label hidden>Address</Form.Label>
                <InputGroup>
                    <Form.Control ref={input} type="text" placeholder="wpisz adres..." />
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
