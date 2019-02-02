import React from 'react';
import { shallow } from 'enzyme';
import Login from './index';
import { findByTestAttr } from '../../testUtils';

const setup = () => {
    return shallow(<Login />);
}

test ('renders without errors', () => {    
})
describe('Login page', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup();
    })

    test ('has `Form` element', () => {
        const form = findByTestAttr(wrapper, "login-form");
        expect (form.length).toBe(1);
    })

    test ('has label "Username"', () => {
        const lblUsername = findByTestAttr(wrapper, "label-username");
        expect (lblUsername.length).toBe(1);
    })
    test ('has label with text "Username"', () => {
        const lblUsername = findByTestAttr(wrapper, "label-username");
        expect (lblUsername.text()).toEqual("Username");
    })
    test ('has input of type "text"', () => {
        const username = findByTestAttr(wrapper, "input-username");
        expect (username.prop('type')).toEqual("text");
    })
    test ('should render a placeholder "Enter Username"', () => {
        const placeholderText = "Enter Username";
        const username = findByTestAttr(wrapper, "input-username");
        expect (username.prop('placeholder')).toEqual(placeholderText);
    })

    test ('has label "Password"', () => {
        const lblPassword = findByTestAttr(wrapper, "label-password");
        expect (lblPassword.length).toBe(1);
    })
    test ('has label with text "Password"', () => {
        const lblPassword = findByTestAttr(wrapper, "label-password");
        expect (lblPassword.text()).toEqual("Password");
    })
    test ('has input of type "password"', () => {
        const password = findByTestAttr(wrapper, "input-password");
        expect (password.prop('type')).toEqual("password");
    })
    test ('should render a placeholder "Enter Password"', () => {
        const placeholderText = "Enter Password";
        const password = findByTestAttr(wrapper, "input-password");
        expect (password.prop('placeholder')).toEqual(placeholderText);
    })
})