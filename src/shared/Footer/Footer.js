import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css';

const Footer = () => (
    <footer className="footer mt-top">
        <div className="container">
            <span className="text-muted">
                <FontAwesomeIcon icon={['far', 'copyright']} /> Classroom {new Date().getFullYear()}
            </span>
        </div>
    </footer>
)

export default Footer;