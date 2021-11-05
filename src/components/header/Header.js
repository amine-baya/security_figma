import React from 'react'
import './header.css' 
import  logo  from "../../svg/logo.svg";

const Header = () => {
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="logo"></img>
            </div>   
            <div className="nav_content">
                <ul>
                    <li>Resources</li>
                    <li>Login</li>
                    <li className="btn">Get a Demo</li>

                </ul>
            </div>       
        </header>
    )
}

export default Header
