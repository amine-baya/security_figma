import React from 'react'
import HomeSvg from "../components/HomeSvg.jsx"
import Shadow from '../svg/shadow.png'


const Easy = ({history}) => {
    return (
        
            <div className="home_screen easy_screen container">
           
                <h1>Security made <span>easy</span></h1>
                <div className="home_cercel">
                    <img src={Shadow} alt="sorry" className="svg_shadow"/>

                    < HomeSvg fill2="#06D6A0" fill4="#06D6A0" fill5="#06D6A0" stroks1="2" stroks2="2" stroks3="4" stroks4="2"/>
                    <span className="home_one" onClick={() => history.push("consistent")}></span>
                    <span className="home_two active" onClick={() =>  history.push("easy")}></span>
                    <span className="home_three" onClick={() =>  history.push("effective")}></span>
                     <span className="home_four" onClick={() =>  history.push("/")}></span>

                </div>
            <div className="home_about">
                    <h2>Empowering <span>Security Teams</span></h2>
                    <p>to build and deliver secure software</p>
                    <span className="span">iTALOS VISION</span>
                </div>
        </div>
        
    )
}

export default Easy
