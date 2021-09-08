import React from 'react';
import './Nav.css';

function Nav() {
    return (
        <div className="nav">
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
