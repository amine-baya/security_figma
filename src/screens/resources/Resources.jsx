import React from 'react'
import "./resources.css"
import background from "../../svg/background.svg"
import resources from "../../svg/resources.svg"
import github from "../../svg/github.svg"
import twitter from "../../svg/twitter.svg"
import meta from "../../svg/meta.svg"


const Resources = () => {
    return (
        <div className="resources container">
            <img className="background" src={background} alt="web"/>
            <div className="resources_content">
                <img className="img_content" src={resources} alt="" />
                <div className="content">
                        <h2>We’re coding hard <br/>  to get you this content</h2>
                        <p>In the meantime, explore our social content:</p>
                        <div className="resources_logo">
                            <img src={github} alt="github" />
                            <img src={twitter} alt="twitter" />
                            <img src={meta} alt="meta" />

                        </div>
                </div>
            </div >
        </div>
    )
}

export default Resources

