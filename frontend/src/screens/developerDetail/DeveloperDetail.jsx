import React from 'react'
import Hero from "../../svg/Hero.jsx"
import Empower from "../../svg/Empower.jsx"
import Office from "../../svg/Office.jsx"
import Lock from "../../svg/Lock.jsx"
import LeadersBackground from "../../svg/Leadersbackground.jsx"
import ServerSecurityOff from "../../svg/ServerSecurityOff.jsx"
import './developerDetail.css'
 
const DeveloperDetail = ({history}) => { 
   


    return (
          <div className="developer" id="developer_detail_section"> 
          
            < LeadersBackground /> 
        <div className="container">
        <div className="developer_head">
            <div className="developer_head_content">

                <h2 className="developer_title">Empowering <span className="developers">Developers</span></h2>
                <h5>to set up trends!</h5>
                <p>
               We believe developers are the center of a universe called software. Software became so prominent that it is ingrained into every part of our daily lives. As developers are focused on building and delivering software at an accelerated pace, the importance of Software Security becomes so crucial that it must be in intrinsic to developers' experience and seamlessly integrated into the software development environment and ecosystem.​ We designed and built iTALOS to match the scale and speed of developer’s world. 
                 </p>

            </div>
            <Hero/>
        </div>
        </div>
        <div  className="developer_body">
            <div className="container">

            <div className="developer_body_content">
                <div>
                    <h4>Be empowered</h4>
                    <Empower />
                    <p>
                        By integrating security intrinsically into your world at every stage; now, we have simplified all things software security explicitly built for developers. We feel the pain and we took charge to question the dogmatic approaches of how software security is and has been practiced for the past decade. 
                    </p>
                </div>
                <div>
                    <h4>Experience transparency</h4>
                    <Office />
                    <p>
                        With iTALOS we give developers the confidence and control to assess security of your software at scale and speed through “Security as Code” delivered “API first approach” - we adopted your style to solve security problems. -  Just the way you’d like it to be. 
                    </p>
                </div>
                <div>
                    <h4>Scale at speed</h4>
                    <Lock/>
                    <p>
                        Robust, simple and effective security delivered. We believe security is all about “Connecting the dots”, creating the contextual risk awareness map providing insights to developers to take right actions to remediate and/or eliminate the risk at the speed in which they operate. 
                    </p>
                </div>
            </div>
            <div className="developer_body_content_two"> 
                <div className="developer_body_content_two_list">
                      <h3>How the platform works for <br /> <span className="developers" >Developers</span></h3>
                      <ul>
                          <li>Developer builds software</li>
                          <li>Integrates with iTALOS to build & <br /> deliver secure software</li>
                          <li>Continues development</li>
                          <li>Remediates security findings <br /> identified by iTALOS</li>
                          <li>Code launch ready to production</li>
                      </ul>
                </div>
                <div className="developer_body_content_two_image">
                    <ServerSecurityOff />
                </div> 

            </div>
            
            </div>
        </div>
       
        </div>
    )
}

export default DeveloperDetail
