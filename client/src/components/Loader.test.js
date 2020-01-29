import React from 'react';
import { shallow, configure } from 'enzyme';
import Loader from './Loader';
import Adapter from 'enzyme-adapter-react-16';
import CircularProgress from '@material-ui/core/CircularProgress';
import Renderer from 'react-test-renderer';
configure({ adapter: new Adapter() });

function setup() {
    const shallowWrapper = shallow(<Loader />);

    return {
        shallowWrapper,
    };
}
describe('Airport loader', () => {
    const { shallowWrapper } = setup();
    it('should match snapshot', () => {
        const airportLoader = Renderer.create(`<BrowserRouter>shallowWrapper</BrowserRouter>`).toJSON();
        expect(airportLoader).toMatchSnapshot();
    });
});
describe('Loader component', () => {
    it('should render self and its subcomponents', () => {
        const { shallowWrapper } = setup();

        expect(shallowWrapper.find(CircularProgress)).toHaveLength(1);
    });
});
