import React from 'react';
import { shallow, configure } from 'enzyme';
import AirportDetails from './AirportDetails';
import Adapter from 'enzyme-adapter-react-16';
import Card from '@material-ui/core/Card';
configure({ adapter: new Adapter() });

function setup() {
    const props = {
        airportId: 'AAA',
        airports: [
            {
                airportCode: 'AAA',
                airportName: 'Anaa',
                location: {
                    latitude: '17.25',
                    longitude: '145.3',
                },
                city: {
                    timeZoneName: 'Pacific/Tahiti',
                },
                country: {
                    countryName: 'French Polynesia',
                },
            },
        ],
    };

    const shallowWrapper = shallow(<AirportDetails {...props} />);

    return {
        props,
        shallowWrapper,
    };
}

describe('Airport item component', () => {
    it('should render self and its subcomponents', () => {
        const { shallowWrapper } = setup();

        expect(shallowWrapper.text().includes('Anaa')).toBe(true);
        expect(shallowWrapper.text().includes('17.25')).toBe(true);
        expect(shallowWrapper.text().includes('145.3')).toBe(true);
    });
});
