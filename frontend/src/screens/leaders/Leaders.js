import React from 'react'
import './leaders.css'
import LeadersSvg from "../../svg/Leaders.jsx"
import Computer from "../../svg/Computer.jsx"
import LeadersBackground from "../../svg/Leadersbackground.jsx"
import Board from './Board'


const Leaders = () => {
    return (
        <div className="leaders" id="leaders_section">
              

            < LeadersBackground />
        <div className="container">

        <div className="leaders_head" >
            <div className="leaders_head_content">
                <h2>Empowering <span>Leaders</span></h2>
                <h5>with continuous and meaningful security metrics</h5>
                <p><span className="br"> Measuring security can be chaotic but iTALOS can help </span> <span className="br"> you navigate, and offer meaningful and action-oriented </span> <span className="br"> security metrics.</span>  <span className="br"></span> <span className="br"></span> <span className="br"></span>
                <span className="br"> Our focus is to help leaders champion the change based </span> <span className="br"> on data and facts-replacing fear, uncertainty and doubt.</span> <span className="br">  We connect the dots by providing complete, concise,</span> <span className="br">  clear, relevant and transparent end-to-end security </span> <span className="br"> metrics; allowing leaders to focus on key areas to make </span> <span className="br"> security strategic investments and operational </span> <span className="br"> effectiveness across teams. </span></p>

            </div>
            <LeadersSvg/>
        </div> 
        </div>
        <div  className="leaders_body">
            <div className="container">

            <div className="leaders_body_content">
                <div>
                    <h4>Monitor with ease</h4>
                    <Board/>
                    <p className="leaders_body_content_p">iTALOS enables you to get a bird’s-eye and worm’s-eye view for executives’ KPIs to track the security hygiene, posture and risk for your company’s profile. All in one powerful platform. </p>
                </div>
                <div>
                    <h4>Measure through scorecards</h4>
                    <Computer />
                    <p>Our approach to KPIs is in the form of security scorecards, providing executives full visibility to organization’s risk posture, compliance assurance, security hygiene and developer's maturity. </p>
                </div>

            </div>
            <p className="main_p"> <span className="br"> We believe metrics to be beyond charts and </span>  <span className="br">  numbers by adding context to every data and </span> chart that is presented.</p>
            </div>
        </div>
        </div>

    )
}

export default Leaders
