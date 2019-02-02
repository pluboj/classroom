import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Header from './shared/Header/Header';
import Footer from './shared/Footer/Footer';

const setup = () => {
    return shallow(<App />);
}

test('renders without crashing', () => {
  
});
test ('contains `Header` element', () => {
    const wrapper = setup();
    const hdr = wrapper.find(Header);
    expect (hdr.length).toBe(1);
})
test ('contains `Footer` element', () => {
    const wrapper = setup();
    const ftr = wrapper.find(Footer);
    expect (ftr.length).toBe(1);
})

