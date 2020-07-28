import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo"src={Logo} alt="Logo do otakusflix"/>
            </a>

            <Button as="a" className="ButtonLink" href="/">
                prop especifica chamado children
            </Button>
        </nav>
    );
}

export default Menu;