import React from 'react';
import { shallow, configure } from 'enzyme';
import AirportDetails from './AirportDetails';
import Adapter from 'enzyme-adapter-react-16';
import Button from '@material-ui/core/Button';
import Renderer from 'react-test-renderer';

configure({ adapter: new Adapter() });

function setup() {
    const props = {
        airport: {
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
    };

    const shallowWrapper = shallow(<AirportDetails {...props} />);

    return {
        props,
        shallowWrapper,
    };
}

describe('Airport', () => {
    const { shallowWrapper } = setup();
    it('should match snapshot', () => {
        const airport = Renderer.create(`<BrowserRouter>shallowWrapper</BrowserRouter>`).toJSON();
        expect(airport).toMatchSnapshot();
    });
});

describe('Airport details component', () => {
    const { shallowWrapper } = setup();
    it('should render self and its subcomponents', () => {
        expect(shallowWrapper.text().includes('Anaa')).toBe(true);
        expect(shallowWrapper.text().includes('17.25')).toBe(true);
        expect(shallowWrapper.text().includes('145.3')).toBe(true);
        expect(shallowWrapper.text().includes('Pacific/Tahiti')).toBe(true);
        expect(shallowWrapper.find(Button)).toHaveLength(1);
    });

    it('should render no results, when id is wrong', () => {
        shallowWrapper.setProps({ airport: null });
        expect(shallowWrapper.text().includes('145.3')).toBe(false);
        expect(shallowWrapper.text().includes('No result')).toBe(true);
    });
});
