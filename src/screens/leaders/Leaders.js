import React from 'react'
import GetaDemo from '../get_a_demo/GetaDemo'
import './leaders.css'
import LeadersSvg from "../../svg/Leaders.jsx"
import A from "./A.jsx"
import Computer from "../../svg/Computer.jsx"
import LeadersBackground from "../../svg/Leadersbackground.jsx"

const Leaders = () => {
    return (
        <div className="leaders">
            < LeadersBackground />
        <div className="container">

        <div className="leaders_head">
            <div className="leaders_head_content">
                <h2>Empowering <span>Leaders</span></h2>
                <h5>with continuous and meaningful security metrics</h5>
                <p>Measuring security can be chaotic but iTALOS can help you navigate, and offer meaningful and action-oriented security metrics. <br/> <br/> <br/>
                Our focus is to help leaders champion the change based on data and facts-replacing fear, uncertainty and doubt. Weconnect the dots by providing complete, concise, clear, relevant and transparent end-to-end security metrics; allowing leaders to focus on key areas to make security strategic investments and operational effectiveness across teams.</p>

            </div>
            <LeadersSvg/>
        </div>
        </div>
        <div  className="leaders_body">
            <div className="container">

            <div className="leaders_body_content">
                <div>
                    <h4>Monitor with ease</h4>
                    <A/>
                    <p className="leaders_body_content_p">iTALOS enables you to get a bird’s-eye and worm’s-eye view for executives’ KPIs to track the security hygiene, posture and risk for your company’s profile. All in one powerful platform. </p>
                </div>
                <div>
                    <h4>Measure through scorecards</h4>
                    <Computer />
                    <p>Our approach to KPIs is in the form of security scorecards, providing executives full visibility to organization’s risk posture, compliance assurance, security hygiene and developer's maturity. </p>
                </div>

            </div>
            <p className="main_p">We believe metrics to be beyond charts and numbers by adding context to every data and chart that is presented.</p>
            </div>
        </div>
        <GetaDemo />
        </div>

    )
}

export default Leaders
