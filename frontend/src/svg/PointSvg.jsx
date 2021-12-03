import React, {useState} from 'react'
import { Link } from 'react-scroll'


const PointSvg = (props) => {
    const [Bool , setbool] = useState(true)

    
    return ( 
        <>
        <div className= {props.show ? 'pointSvgs' : 'pointSvg'  } onClick={() => setbool(!Bool)}>
   {  Bool ?  <svg width="138" height="138" viewBox="0 0 138 138" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_1005:53330)">
<rect x="54" y="30" width="30" height="30" rx="15" fill="#256BF6"/>
<rect x="54.5" y="30.5" width="29" height="29" rx="14.5" stroke="#256BF6"/>
</g>
<circle cx="69" cy="45" r="6" fill="#75DFFF"/>
<defs>
<filter id="filter0_d_1005:53330" x="0" y="0" width="138" height="138" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
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
 : <div className="pointSvg_actie">
     <svg width="268" height="268" viewBox="0 0 268 268" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_1005:53297)">
<Link activeClass="active"spy={true} smooth={true} duration={500} offset={-70} to='vision_section'> <rect x="54" y="54" width="160" height="160" rx="80" fill="#051A4E"/></Link>
<rect x="54.5" y="54.5" width="159" height="159" rx="79.5" stroke="#256BF6" />
</g>
<g filter="url(#filter1_d_1005:53297)">
<Link activeClass="active"spy={true} smooth={true} duration={500} offset={-70} to='leaders_section'> <rect x="74" y="75" width="120" height="120" rx="60" fill="#051A4E" /> </Link>
<rect x="75.5" y="76.5" width="117" height="117" rx="58.5" stroke="#FFA641" strokeWidth={props.strokeL}/>
</g>
<g filter="url(#filter2_d_1005:53297)">
<Link activeClass="active"spy={true} smooth={true} duration={500} offset={-70} to='security_detail_section'><rect x="94" y="95" width="80" height="80" rx="40" fill="#051A4E" /> </Link>
<rect x="94.5" y="95.5" width="79" height="79" rx="39.5" stroke="#25C395" strokeWidth={props.strokeS}/>
</g>
<g filter="url(#filter3_d_1005:53297)">
<Link activeClass="active"spy={true} smooth={true} duration={500} offset={-70} to='developer_detail_section'> <rect x="114" y="114" width="40" height="40" rx="20" fill="#051A4E" /> </Link>
<rect x="114.5" y="114.5" width="39" height="39" rx="19.5" stroke="#F71735" strokeWidth={props.strokeD}/>
</g>
<g filter="url(#filter4_d_1005:53297)">
<rect x="60" y="60" width="30" height="30" rx="15" fill="#256BF6"/>
<rect x="60.5" y="60.5" width="29" height="29" rx="14.5" stroke="#256BF6"/>
</g>
<circle cx="75" cy="75" r="6" fill="#75DFFF"/>
<defs>
<filter id="filter0_d_1005:53297" x="0" y="0" width="268" height="268" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="27"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.458824 0 0 0 0 0.87451 0 0 0 0 1 0 0 0 0.2 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1005:53297"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1005:53297" result="shape"/>
</filter>
<filter id="filter1_d_1005:53297" x="20" y="21" width="228" height="228" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="27"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.458824 0 0 0 0 0.87451 0 0 0 0 1 0 0 0 0.2 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1005:53297"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1005:53297" result="shape"/>
</filter>
<filter id="filter2_d_1005:53297" x="40" y="41" width="188" height="188" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="27"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.458824 0 0 0 0 0.87451 0 0 0 0 1 0 0 0 0.2 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1005:53297"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1005:53297" result="shape"/>
</filter>
<filter id="filter3_d_1005:53297" x="60" y="60" width="148" height="148" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="27"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.458824 0 0 0 0 0.87451 0 0 0 0 1 0 0 0 0.2 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1005:53297"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1005:53297" result="shape"/>
</filter>
<filter id="filter4_d_1005:53297" x="6" y="30" width="138" height="138" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="24"/>
<feGaussianBlur stdDeviation="27"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.458824 0 0 0 0 0.87451 0 0 0 0 1 0 0 0 0.2 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1005:53297"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1005:53297" result="shape"/>
</filter>
</defs>
</svg>
 </div>
}

        </div>
        {!Bool && <div className="overlay" onClick={() => setbool(true)}></div>}
        </>
    )
}

export default PointSvg
