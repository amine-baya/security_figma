import React from 'react'
import Map from "../../svg/Map.jsx"
import Server from "../../svg/Server.jsx"
import Discover from "../../svg/Discover.jsx"
import Modeling from "../../svg/Modeling.jsx"
import Antivirus from  "../../svg/Antivirus.jsx"
import Layers from "../../svg/Layers.jsx"
import './vision.css'
import Smart from '../../svg/Smart.jsx'
import Continious from '../../svg/Continious'

const Vision = () => {
    return (
      <div className="vision" id="vision_section">
            < Map />
        <div className="container">
        <div className="vision_head">
            <div className="vision_head_content">
                <h2> <span className="br" > Our vision is to </span> <span className="br" > empower organizations </span> <span> to build and deliver secure software </span> </h2>
                <p className="vision_head_content_p1" >
                    We intend to change the broken software security industry. Today’s security solutions are built to solve a specific problem using traditional approaches; but, technology has evolved so much that we need to look at security holistically end-to-end (e2e) at all layers keeping it simple, efficient and to ground reality of current operating needs.
                </p>
                 <p className="vision_head_content_p2" >
                    Our way of empowering organizations is by enabling them with security capabilities that provides end-to-end security visibility and measure the risk:
                </p>
            </div>
        <div className="server_container">
            <Server />

        </div>

            
        </div>
        </div> 
        <div  className="vision_body">
            <div className="container">

            <div className="vision_body_options">
               <div className="option">
                   <div className="option_layer">
                        <Discover />
                        <Layers />
                   </div>
                        <h4>discover</h4> 
                        <p>Identify the inventory</p>
               </div>
                <div className="option">
                   <div className="option_layer">
                        <Continious/>
                        <Layers />
                   </div>
                        <h4>discover</h4>
                        <p>Identify the inventory</p>
               </div>
                <div className="option">
                   <div className="option_layer">
                        <Smart/>
                        <Layers />
                   </div>
                        <h4>discover</h4>
                        <p>Identify the inventory</p>
               </div>
                <div className="option">
                   <div className="option_layer">
                        <Modeling/>
                        <Layers />
                   </div>
                        <h4>discover</h4>
                        <p>Identify the inventory</p>
               </div>
                <div className="option">
                   <div className="option_layer">
                       <Antivirus/>
                        <Layers />
                   </div>
                        <h4>discover</h4>
                        <p>Identify the inventory</p>
               </div>
               
            </div>
            <p className="vision_body_p">"iTalos delivers e2e intrinsic software security at speed and scale for every developer to focus on accelerate go to market strategy by bringing forward secure products; and empowers security teams to assess and measure security consistently, effectively by reducing the operational cost."</p>
            <h3 className="vision_body_h3">-- John Doe, CTO, Voyager</h3>
            
            </div>
        </div>
        </div>
    )
}

export default Vision
