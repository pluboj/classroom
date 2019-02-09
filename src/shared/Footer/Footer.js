import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from 'react-bootstrap/Navbar';
import './Footer.css';

const Footer = () => (
    <Navbar sticky="bottom" expand="lg" variant="light" bg="light">
        <div className="container page-footer">
             <span className="text-muted footer-content">
                 <FontAwesomeIcon icon={['far', 'copyright']} /> Classroom {new Date().getFullYear()}
             </span>
         </div>
    </Navbar>
)

export default Footer;