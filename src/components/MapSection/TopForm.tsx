import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import search from '../../assets/icons/search.svg';
import { useEffect, useRef } from 'react';

interface TopFormProps {
    // map: google.maps.Map;
}

export const TopForm = (props: TopFormProps) => {
    let autocomplete: google.maps.places.Autocomplete;
    // const { map } = props;
    const infoContent = useRef<HTMLDivElement>(null);
    const input = useRef<HTMLInputElement>(null);
    const options = {
        fields: ['formatted_address', 'geometry', 'name'],
        strictBounds: false
    };
    useEffect(() => {
        async function getMapLibrary() {
            const { Autocomplete } = (await google.maps.importLibrary(
                'places'
            )) as google.maps.PlacesLibrary;

            const infoWindow = new window.google.maps.InfoWindow();

            infoWindow.setContent(infoContent.current);

            if (input.current) {
                autocomplete = new google.maps.places.Autocomplete(input.current, options);

                autocomplete.addListener('place_changed', () => {
                    infoWindow.close();

                    const place = autocomplete.getPlace();
                    console.log('🚀 ~ place:', place);
                });
            }
            return { Autocomplete };
        }

        getMapLibrary();

        // return () => {
        //     autocomplete
        // }
    }, []);

    const onSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();

        console.log('🚀 ~ event:', event);
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
                <Button className="mx-2" variant="danger">
                    Szukaj
                </Button>
                <div className="info" ref={infoContent}></div>
            </Form.Group>
        </Form>
    );
};
