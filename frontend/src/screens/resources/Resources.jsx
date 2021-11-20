import React, {useEffect} from 'react'
import "./resources.css"
import background from "../../svg/background.svg"
import resources from "../../svg/resources.svg"
import github from "../../svg/github.svg"
import twitter from "../../svg/twitter.svg"
import Meta from '../../svg/Meta'


const Resources = () => {
    useEffect(() => {
        clearTimeout()
    }, [])

    return (
        <div className="resources container" id="resources_section">
         <img className="background" src={background} alt="web"/>
            <div className="resources_content">
                <img className="img_content" src={resources} alt="" />
                <div className="content">
                        <h2><span className="br"> We’re coding hard </span> to get you this content</h2> 
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

export default Resources

