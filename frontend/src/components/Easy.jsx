import React,{useState} from 'react'
import { Link } from 'react-scroll'
import HomeSvg from "./HomeSvg.jsx"
import Shadow from '../svg/shadow.png'
import Sword from '../svg/Sword.jsx'
import Anti from '../svg/Anti.jsx'
import Modelin from '../svg/Modelin.jsx'
import {motion} from 'framer-motion'



const Easy = (props) => {

    const [four, setFour] = useState(false)
    const [five, setFive] = useState(false)
    const [six, setSix] = useState(false)
    
    const remove = () => {
      
        four && setFour(false)
        five && setFive(false)
        six && setSix(false)
       
      
    }
    return (
        <>

            <div className="home_screen easy_screen container" onClick ={() => remove()}>
           
    

                <div className="home_cercel">
                    <img  src={Shadow} alt="sorry" className="svg_shadow"/>
                    <img  src={Shadow} alt="sorry" className="svg_shadow_2"/>


                    < HomeSvg fill1="#00113A" fill2="#06D6A0" fill3="#00113A" fill4="#06D6A0" fill5="#06D6A0" fill6="#00113A" fill7="#00113A" fill8="#00113A" fill9="#00113A" stroks1="2" stroks2="2" stroks3="4" stroks4="2"/>
                    <div className="home_one" onClick={()=> props.change(4, 10)}></div>
                    <div className="home_two active" onClick={()=> props.change(3, 10)}>

                        <span onClick={() => setFour(true)} ></span>
                        <span onClick={() => setFive(true)}></span>
                        <span onClick={() => setSix(true)}></span>
                            {four && <div className="four">
                            <h4> <Sword /> Threat Attack Surface</h4>
                            <p>Identify external threat attack surface</p>
                            </div>
                            }
                            {five && <div className="five"> 
                            <h4> <Anti /> S-PaC</h4>
                            <p>Security requirements in a format that’s easy to integrate with a developers’ workflow</p>
                            </div>
                            }
                            {six && <div className="six">
                            <h4> <Modelin /> Threat Modelling</h4>
                            <p>Identifying potential threats from systems architecture</p>
                            </div>
                            }

                    </div>
                    <div className="home_three" onClick={()=> props.change(2, 10)}></div>
                    <div className="home_four" onClick={()=> props.change(1, 10)}></div>

                </div>
            <motion.div className="home_about" initial={{opacity: 0}} animate={{opacity: 1 }} transition={{delay:0.2, duration:2}}>
                    <h2>Empowering <span>Security Teams</span></h2>
                    <p>with intrinsic security capabilities to deliver<br /> consistent, effective and frictionless security</p>
                    <Link activeClass="active" spy={true} smooth={true} duration={500} offset={-70} to='security_detail_section' ><span className="spanVision"> KNOW MORE </span>  </Link>
                </motion.div>
        </div>
        
        </>
    )
}

export default Easy
