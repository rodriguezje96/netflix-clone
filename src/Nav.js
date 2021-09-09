import React, { useState, useEffect } from 'react';
import './Nav.css';

function Nav() {
    const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);


    return (
        <div className={`nav ${show && "nav-black"}`}>
            <img className="nav-logo"
                src="https://1000marcas.net/wp-content/uploads/2020/01/Netflix-simbolo.jpg"
                alt="netflix logo" />
            <div className="container">
                <img clasname="nav-avatar"
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                    alt="Cat Avatar" />
            </div>
        </div>
    )
}

export default Nav
