import React, {useState} from 'react'
import { Link } from 'react-scroll'
import HomeSvg from "./HomeSvg.jsx"
import Lens from '../svg/Lens.jsx'
import Shadow from '../svg/shadow.png'
import SmartData from '../svg/SmartData.jsx'

import {motion} from 'framer-motion'





const Consistent = (props) => {
    const [one, setOne] = useState(false)
    const [two, setTwo] = useState(false)
    const [three, setThree] = useState(false)
    
   
    const remove = () => {
        one && setOne(false)
        two && setTwo(false)
        three && setThree(false)
       
    }

    return (
        <>
            <div className="home_screen consistent_screen container" onClick ={() => remove()}>
           
          

                <div className="home_cercel">
                    <img src={Shadow} alt="sorry" className="svg_shadow"/>
                    <img src={Shadow} alt="sorry" className="svg_shadow_2"/>
                    
                    < HomeSvg fill1="#00113A" fill2="#00113A" fill4="#00113A" fill5="#00113A" fill7="#00113A" fill9="#00113A" fill3="#F71735" fill6="#F71735" fill8="#F71735" stroks1="2" stroks2="2" stroks3="2" stroks4="4"/>
                    <div className="home_one active" onClick={()=> props.change(4, 10)}>
                        <span onClick={() => setOne(true)} ></span>
                        <span onClick={() => setTwo(true)}></span>
                        <span onClick={() => setThree(true)}></span>
                            {one && <div className="one">
                            
                            <h4> <SmartData /> ML/AI</h4>
                            <p>Understanding the patterns of security issues and providing insights to users</p>
                            </div>
                            }
                            {two && <div className="two">
                            <h4> <Lens />  Security Assessment</h4>
                            <p>Aggregating data from all activities and analyzing security</p>
                            </div>
                            }
                            {three && <div className="three">
                            <h4><Lens /> T-Lens</h4>
                            <p>Search capability within iTALOS so you always find what you need</p>
                            </div>
                            }

                    </div>
                    <div className="home_two" onClick={()=> props.change(3, 10)}></div>
                    <div className="home_three" onClick={()=> props.change(2, 10)}></div>
                     <div className="home_four"onClick={()=> props.change(1, 10)} ></div>

                </div>
                <motion.div className="home_about" initial={{opacity: 0}} animate={{opacity: 1 }} transition={{delay:0.2, duration:2}}>
                    <h2>Empowering <span>Developers</span></h2>
                    <p>with intrinsic security capabilities to build and <br /> deliver secure software to the world</p>
                    <Link activeClass="active"spy={true} smooth={true} duration={500} offset={-70} to='developer_detail_section'><span className="spanVision"> KNOW MORE </span>  </Link>
                </motion.div>

             
        </div>

        </>
        
    )
}

export default Consistent
