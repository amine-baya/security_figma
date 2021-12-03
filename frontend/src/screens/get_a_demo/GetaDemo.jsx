import React, {useState} from 'react'
import background from "../../svg/background.svg"
import Open from "../../svg/OpenSvg"
import { motion } from 'framer-motion'
import axios from 'axios' 
import './getaDemo.css'





const GetaDemo = (props) => {
 
    const [email,setEmail]=useState('')


    const handleSubmit = e =>{
        e.preventDefault()

        let data ={email}

    
        axios.post('/api/email',data).then(res=>{
         
       }).catch(()=>{
         console.log('message not sent');
       })
 
        setTimeout(() => {
            props.history.push("/thanks")
            
        }, 1500);
    }

    const handleEmail=(e)=>{
        setEmail(e.target.value)
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
        <div className="getaDemo " id="getademo_section">
        <div className="container getaDemoContainer ">
           
            <img className="background" src={background} alt="web"/> 
            
            <div className="getaDemo_content">
                <div className="getaDemo_image">
                    <Open/>
                </div>
                <div className="getaDemo_form" >
                        <h2> <span className="br"> We connect the dots,</span> <span className="wondering_span" > wondering how? </span> </h2>
                        <form onSubmit={handleSubmit} >
                        <input type="email" name="email" placeholder={"Enter your email"} value={email} onChange={handleEmail} required={true} />
                         <motion.button type="submit" variants={buttonVariants} whilehover="hover" className="request"> Request a demo  </motion.button>                  
                              
                        </form>
                </div>
            </div >
        </div>
        </div> 
    )
}

export default GetaDemo
