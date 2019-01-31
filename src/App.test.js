import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Navbar from 'react-bootstrap/Navbar';

const setup = () => {
    return shallow(<App />);
}

test('renders without crashing', () => {
  
});
test ('contains `Navbar` element', () => {
    const wrapper = setup();
    const navbar = wrapper.find(Navbar);
    expect (navbar.length).toBe(1);
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
