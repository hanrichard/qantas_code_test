import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Header from './Header';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

function setup() {
    const shallowWrapper = shallow(<Header />);

    return {
        shallowWrapper,
    };
}

describe('Header component', () => {
    it('should render self and its subcomponents', () => {
        const { shallowWrapper } = setup();
        expect(shallowWrapper.text().includes('Qantas airport datas')).toBe(true);
    });
});
