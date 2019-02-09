import React from 'react';
import { shallow } from 'enzyme';
import Subbar from './Subbar';
import { testUtils, findByTestAttr } from '../../../src/testUtils'; 

const setup = () => {
    return shallow(<Subbar />);
}

describe('Subbar element', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup();
    })

    test ('renders without issues', () => {
    })

    test ('has 6 nav items', () => {
        const items = findByTestAttr(wrapper, "nav-item");
        expect (items.length).toBe(6);
    })
})

