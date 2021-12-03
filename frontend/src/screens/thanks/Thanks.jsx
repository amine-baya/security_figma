import React from 'react'
import "./thanks.css"
import github from "../../svg/github.svg"
import twitter from "../../svg/twitter.svg"
import Meta from '../../svg/Meta'

const Thanks = () => {
    return (
       <div className="thanks container">
            
            <div className="thanks_content">
        
                <div className="content">
                        <h2><span className="thanks_span"> Thanks </span> <br/> You'll hear from us soon!</h2>
                        <p>In the meantime, explore our social content:</p>
                        <div className="resources_logo">
                            <img src={github} alt="github" />
                            <img src={twitter} alt="twitter" />
                            <Meta/>

                        </div>
                </div>  
            </div >
        </div>
    )
}

export default Thanks
