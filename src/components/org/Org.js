import React from 'react'
import './org.css'
import HomeSvg from "../../components/HomeSvg.jsx"
import Shadow from '../../svg/shadow.png'


const Org = ({history}) => {
    return (
        <div className="home_screen container">
           
                <h1>Security made <span>consistent</span></h1>
                <div className="home_cercel">
                    <img src={Shadow} alt="sorry" className="svg_shadow"/>
                    
                    < HomeSvg stroks1="4" stroks2="2" stroks3="2" stroks4="2"/>
                    <span className="home_one" onClick={() => history.push("consistent")}></span>
                    <span className="home_two" onClick={() =>  history.push("easy")}></span>
                    <span className="home_three" onClick={() =>  history.push("effective")}></span>
                     <span className="home_four active" onClick={() =>  history.push("/")}></span>

                </div>

                <div className="home_about">
                    <h2>Empowering <span>Organizations</span></h2>
                    <p>to build and deliver secure software</p>
                    <span className="span">iTALOS VISION</span>
                </div>
            
        </div>
    )
}

export default Org
