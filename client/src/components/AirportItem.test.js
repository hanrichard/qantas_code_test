import React from 'react';
import { shallow, configure } from 'enzyme';
import AirportItem from './AirportItem';
import Adapter from 'enzyme-adapter-react-16';
import Card from '@material-ui/core/Card';
import Renderer from 'react-test-renderer';

configure({ adapter: new Adapter() });

function setup() {
    const props = {
        airport: {
            airportName: 'syd',
            country: {
                countryName: 'aus',
            },
            airportCode: 'aaa',
        },
    };

    const shallowWrapper = shallow(<AirportItem {...props} />);

    return {
        props,
        shallowWrapper,
    };
}

describe('Airport item', () => {
    const { shallowWrapper } = setup();
    it('should match snapshot', () => {
        const airportItem = Renderer.create(`<BrowserRouter>shallowWrapper</BrowserRouter>`).toJSON();
        expect(airportItem).toMatchSnapshot();
    });
});

describe('Airport item component', () => {
    it('should render self and its subcomponents', () => {
        const { shallowWrapper } = setup();

        expect(shallowWrapper.find(Card)).toHaveLength(1);
        expect(shallowWrapper.text().includes('syd')).toBe(true);
        expect(shallowWrapper.text().includes('aus')).toBe(true);
        expect(shallowWrapper.find('.AirportList__card')).toHaveLength(1);
        expect(shallowWrapper.find('.AirportList__link')).toHaveLength(1);
        expect(shallowWrapper.find('.AirportList__link-airportName')).toHaveLength(1);
        expect(shallowWrapper.find('.AirportList__link-countryName')).toHaveLength(1);
    });
});
