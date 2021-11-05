import React from 'react'
import './footer.css' 
import github from '../../svg/github.svg'
import twitter from '../../svg/twitter.svg'
import meta from '../../svg/meta.svg'
import logo from '../../svg/footerLogo.svg'



const Footer = () => {
    return (
        <footer>
            <div className="footer_content">
                <ul>
                    <li>Request a Demo</li>
                    <li>Privacy</li>
                    <li>Terms</li>

                </ul>
                <div>
                    contact@italos.com
                </div>
            </div>
            <div className="footer_logo">
                <img src={logo} alt="logo"/>
            </div>
            <div className="footer_link">
                <ul>
                    <li><img src={github} alt="github"/></li>
                    <li><img src={twitter} alt="twitter"/></li>
                    <li><img src={meta} alt="meta"/></li>

                </ul>
                <div>
                   (c) 2021 iTalos. All rights reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer
