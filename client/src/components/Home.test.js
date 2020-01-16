import React from 'react';
import { shallow, configure } from 'enzyme';
import Home from './Home';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

function setup() {
    const props = {
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

    const shallowWrapper = shallow(<Home {...props} data-test="test" />);

    return {
        props,
        shallowWrapper,
    };
}

describe('Airport item component', () => {
    const { shallowWrapper } = setup();

    it('should render', () => {
        expect(shallowWrapper.find('.AirportList__list')).toHaveLength(1);
        expect(shallowWrapper.find('.AirportList__pagination')).toHaveLength(1);
    });
});
