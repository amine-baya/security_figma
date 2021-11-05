import React from 'react'
import HomeSvg from "../components/HomeSvg.jsx"
import Shadow from '../svg/shadow.png'

const Effective = ({history}) => {
    return (
        
             <div className="home_screen effective_screen container">
           
                <h1>Security made <span>effective</span></h1>
                <div className="home_cercel">
                    <img src={Shadow} alt="sorry" className="svg_shadow"/>
                    
                    < HomeSvg fill1="#FFA641" fill7="#FFA641" fill9="#FFA641" stroks1="2" stroks2="4" stroks3="2" stroks4="2"/>
                    <span className="home_one" onClick={() => history.push("consistent")}></span>
                    <span className="home_two" onClick={() =>  history.push("easy")}></span>
                    <span className="home_three active" onClick={() =>  history.push("effective")}></span>
                     <span className="home_four" onClick={() =>  history.push("/")}></span>

                </div>
            <div className="home_about">
                    <h2>Empowering <span>Leaders</span></h2>
                    <p>to build and deliver secure software</p>
                    <span className="span">iTALOS VISION</span>
                </div>
        </div>
        
    )
}

export default Effective
