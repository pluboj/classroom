import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

const setup = () => {
    return shallow(<Footer />);
}

test('renders without crashing', () => { 
});
describe('Footer', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup();
    })

    test ('has div.container', () => {
        const container = wrapper.find('div.container');
        expect(container.length).toBe(1);
    })
})
