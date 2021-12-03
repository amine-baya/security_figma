import React from 'react'
import './org.css'
import HomeSvg from "../HomeSvg.jsx"
import Shadow from '../../svg/shadow.png'
import { Link } from 'react-scroll'



const Org = (props) => {

     

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

        <div className="home_screen container"> 
           
                <div className="home_cercel" id="home_cercel">  
                    <img initial={{opacity: 0 }}  src={Shadow} alt="sorry" className="svg_shadow"/>
                    <img initial={{opacity: 0 }}  src={Shadow} alt="sorry" className="svg_shadow_2"/>

                     
                    < HomeSvg  stroks1="4" stroks2="2" stroks3="2" stroks4="2"/>
                    <div  className="home_one" onClick={()=> props.change(4,10)} ></div>
                    <div className="home_two" onClick={()=> props.change(3,10)} ></div>
                    <div className="home_three" onClick={()=> props.change(2,10)} ></div>
                     <div className="home_four active" onClick={()=> props.change(1,10)}></div>
                </div>
                <div className="home_about"  >
                    <h2>Empowering <span>Organizations</span></h2>
                    <p>to build and deliver secure systems <br /> and applications</p>
                    
                    <Link activeClass="active"spy={true} smooth={true} duration={500} offset={-70} to='vision_section'>
                        <span  variants={buttonVariants} whilehover="hover" className="spanVision">  iTALOS VISION </span>
                    </Link>
                </div>
            
        </div>
        
        </>
    )
}

export default Org
