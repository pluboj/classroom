import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import Navbar from 'react-bootstrap/Navbar';

const setup = () => {
    return shallow(<Header />);
}

test ('renders without errors', () => {    
})
test ('contains `Navbar.Brand` component', () => {
    const wrapper = setup();
    const nav_brand = wrapper.find(Navbar.Brand);
    expect (nav_brand.length).toBe(1);
})
test ('Navbar.Brand has text `Classroom`', () => {
    const wrapper = setup();
    const nav_brand = wrapper.find(Navbar.Brand);
    expect (nav_brand.text()).toContain("Classroom");
})
