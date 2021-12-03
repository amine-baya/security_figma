import React from 'react'

import './security.css'
import SecuritySvg from "../../svg/SecuritySvg.jsx"
import ServerMaint from "../../svg/ServerMaint.jsx"
import Cost from "../../svg/Cost.jsx"
import Frictionless from "../../svg/Frictionless.jsx"
import LeadersBackground from "../../svg/Leadersbackground.jsx"
import ServerSecurityOn from "../../svg/ServerSecurityOn.jsx" 

 
const SecurityDetail = () => {
    return (
          <div className="security" id="security_detail_section">
              
            < LeadersBackground /> 
        <div className="container  ">
        <div className="security_head">
            <div className="security_head_content">
                <h2 className="security_title" >Empowering <span className="security_teams">Security Teams</span></h2>
                <h5>to deliver simple, consistent, effective and measurable security</h5>
                <p>Applying traditional and conventional security is no longer acceptable; development practices and technologies continue to evolve and for security organizations this is a constant battle as the threat landscape is always changing at an accelerated pace. At iTALOS, we are working hard to simplify the experience to make security intrinsic by empowering developers and security teams to work frictionlessly. </p>

            </div>
            <SecuritySvg/> 
        </div>
        </div>
        <div  className="security_body">
            <div className="container">

            <div className="security_body_content">
                <div>
                    <h4>Reduce skill gap</h4>
                    <ServerMaint />
                    <p className="leaders_body_content_p">
                        Catching up on technology trends is tough, which is why you can count on us to stay and bring your teams ahead of the curve. Time to market is very important and we understand there’s absolutely no time to lose in the ever competitive world. 
                    </p>
                </div>
                <div>
                    <h4>Frictionless</h4>
                    <Frictionless /> 
                    <p>
                        At iTALOS we firmly believe in empowering organizations to perform security activities at speed and scale by reducing human interventions. Our approach is “Security as Code” where security teams can consistently, effectively measure continuous security end-to-end.
                    </p>
                </div>
                <div>
                    <h4>Operational cost savings</h4>
                    <Cost/>
                    <p>
                        We want to reduce the toil in your security organizations through automation and eliminating friction points; allowing your security team members to focus on strategic and high priority activities instead of spending their time on routine security activities.
                    </p>
                </div>
            </div>
            <div className="security_body_content_two">
                <div className="security_body_content_two_list">  
                      <h3>How the platform works for <br /> <span className="security_teams">Security Teams</span></h3>
                      <ul>
                          <li>Developer builds software</li>
                          <li>Integrates with iTALOS to build & <br /> deliver secure software</li>
                          <li>Security team reviews the security <br /> assessments and security findings</li>
                          <li>Continues development</li>
                          <li>Remediates security findings <br /> identified by iTALOS</li>
                          <li>Code launch ready to production</li>
                      </ul>
                </div>
                <div className="security_body_content_two_image">
                    <ServerSecurityOn />
                </div> 

            </div>
            
            </div>
        </div>
        <div>
        </div>
        </div>
    ) 
}

export default SecurityDetail
