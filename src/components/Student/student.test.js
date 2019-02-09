import React from 'react';
import { shallow } from 'enzyme';
import Student from './student';
import { findByTestAttr } from '../../testUtils';

const setup = () => {
    return shallow(<Student />);
}

test ('renders without errors', () => {})

describe('Student ', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup();
    })

    test ('renders `Card` element', () => {
        const card = findByTestAttr(wrapper, "card-student");
        expect(card.length).toBe(1);
    })
})
