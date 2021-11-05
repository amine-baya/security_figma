import React, {useState} from 'react'

const PointSvg = () => {
    const [Bool , setbool] = useState(true)

    return (
        <div className="pointSvg" onClick={() => setbool(false)}>
   {  Bool ?  <svg width="138" height="138" viewBox="0 0 138 138" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_1005:53330)">
<rect x="54" y="30" width="30" height="30" rx="15" fill="#256BF6"/>
<rect x="54.5" y="30.5" width="29" height="29" rx="14.5" stroke="#256BF6"/>
</g>
<circle cx="69" cy="45" r="6" fill="#75DFFF"/>
<defs>
<filter id="filter0_d_1005:53330" x="0" y="0" width="138" height="138" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="24"/>
<feGaussianBlur stdDeviation="27"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.458824 0 0 0 0 0.87451 0 0 0 0 1 0 0 0 0.2 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1005:53330"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1005:53330" result="shape"/>
</filter>
</defs>
</svg>
 : <div className="point_cercls">
        <div className="home_one"></div>
        <div className="home_two"></div>
        <div className="home_three"></div>
        <div className="home_four"></div>
 </div>
}

        </div>
    )
}

export default PointSvg
