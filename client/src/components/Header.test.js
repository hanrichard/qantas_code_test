import React from 'react';
import { shallow, configure } from 'enzyme';
import Header from './Header';
import Adapter from 'enzyme-adapter-react-16';
import Renderer from 'react-test-renderer';
configure({ adapter: new Adapter() });

function setup() {
    const shallowWrapper = shallow(<Header />);

    return {
        shallowWrapper,
    };
}

describe('Airport header', () => {
    const { shallowWrapper } = setup();
    it('should match snapshot', () => {
        const airportHeader = Renderer.create(`<BrowserRouter>shallowWrapper</BrowserRouter>`).toJSON();
        expect(airportHeader).toMatchSnapshot();
    });
});

describe('Header component', () => {
    it('should render', () => {
        const { shallowWrapper } = setup();
        expect(shallowWrapper.text().includes('Qantas airport datas')).toBe(true);
    });
});
