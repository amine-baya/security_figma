import React,{useState} from 'react'
import { Link } from 'react-scroll'
import HomeSvg from "../components/HomeSvg.jsx"
import Alert from '../svg/Alert.jsx'
import ChatBox from '../svg/ChatBox.jsx'
import Conti from '../svg/Conti.jsx'
import Shadow from '../svg/shadow.png'
import {motion} from 'framer-motion'




const Effective = (props) => {

    const [seven, setSeven] = useState(false)
    const [eight, setEight] = useState(false)
    const [nine, setNine] = useState(false)




    const remove = () => {
        
        seven && setSeven(false)
        eight && setEight(false)
        nine && setNine(false)
      
    }

    const buttonVariants ={
        hover: {
            scale:1.1,
            transition:{
                yoyo:10
            }
        }
    }

    return ( 
        <>

             <div className="home_screen effective_screen container" onClick ={() => remove()}>

                <div className="home_cercel">
                    <img src={Shadow} alt="sorry" className="svg_shadow"/>
                    <img src={Shadow} alt="sorry" className="svg_shadow_2"/>
                    
                    < HomeSvg fill1="#FFA641" fill2="#00113A" fill3="#00113A" fill4="#00113A" fill5="#00113A" fill6="#00113A" fill7="#FFA641" fill8="#00113A" fill9="#FFA641" stroks1="2" stroks2="4" stroks3="2" stroks4="2"/>
                    <div className="home_one" onClick={()=> props.change(4, 10)}></div>
                    <div className="home_two" onClick={()=> props.change(3, 10)}></div>
                    <div className="home_three active" onClick={()=> props.change(2, 10)}>
                    <span onClick={() => setSeven(true)} ></span>
                        <span onClick={() => setEight(true)}></span>
                        <span onClick={() => setNine(true)}></span>
                            {seven && <div className="seven">
                            <h4> <Conti /> Continuous Metrics </h4>
                            <p>Enabling the team with actionable metrics</p>
                            </div>
                            }
                            {eight && <div className="eight">
                            <h4> <Alert /> Risk Score</h4>
                            <p>Measuring the software security risk posture</p>
                            </div>
                            }
                            {nine && <div className="nine">
                            <h4> <ChatBox /> Chat Bot</h4>
                            <p>Questions leading to easier navigation</p>
                            </div>
                            }

                    </div>
                    <div className="home_four" onClick={()=> props.change(1, 10)}></div>

                </div>
                    <motion.div className="home_about" initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay:0.2, duration:2}} >
                    <h2>Empowering <span>Leaders</span></h2>
                    <p>to continuously monitor and measure the holistic <br /> security posture of their organizations</p>
                    <Link  activeClass="active"spy={true} smooth={true} to="leaders_section" duration={500} offset={-70}>
                        <motion.span variants={buttonVariants} whilehover="hover" className="spanVision"> KNOW MORE </motion.span>  </Link>
                </motion.div>
        </div>
        
        </>
        
    )
}

export default Effective
