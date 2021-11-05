import React from 'react'
import background from "../../svg/background.svg"
import open from "../../svg/open.svg"
import './getaDemo.css'


const GetaDemo = () => {
    return (
        <div className="getaDemo ">
        <div className="container">
            <img className="background" src={background} alt="web"/>
            <div className="getaDemo_content">
                <div className="getaDemo_image">
                    <img  src={open} alt="open computer" />
                </div>
                <div className="getaDemo_form">
                        <h2>We connect the dots,<br/> <span className="wondering_span" > wondering how? </span> </h2>
                        <input type='text' placeholder={"Enter your email"} />
                        <button className="request"> Request a demo </button>                    
                </div>
            </div >
            </div>
        </div>
    )
}

export default GetaDemo
