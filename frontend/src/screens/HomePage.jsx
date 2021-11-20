import React, { useEffect, useState } from 'react'
import PointSvg from '../svg/PointSvg'
import Consistent from '../components/Consistent'
import DeveloperDetail from './developerDetail/DeveloperDetail'
import Org from '../components/org/Org'
import Easy from '../components/Easy'
import Effective from '../components/Effective'
import Leaders from './leaders/Leaders'
import SecurityDetail from './securityDetail/SecurityDetail'
import Vision from './vision/Vision'
import test from '../test.json'
import Typewriter from 'typewriter-effect'


const HomePage = ({history}) => {

    const [bool, setbool] = useState(true)
    const [bool1, setbool1] = useState(1)
    let delay = 6000
    
    let mehdi
    
    useEffect(() => {
            mehdi = setTimeout(() => {
                    if (bool1 === 4) {
                        setbool1(1)
                        
    
                    } else {
                        
                        setbool1(bool1+ 1)
                       
                    }
                    
            
                }, 10000 );
                
              
            }, [bool1])           


        
        const handeller = (a, b) => {
            clearTimeout(mehdi)
            setbool1(a)
           
        }
        

    return (
        <div>
            < PointSvg />
            
            <div className="homePage_h1"><h1>Security <Typewriter  options={{strings: test.text, autoStart: true, loop: true}}/> </h1></div>
            {bool  && <> 
             {bool1 === 1 && < Org change={(a,b) => handeller(a, b) } />}
             {bool1 === 2 && <Effective change={(a,b)=> handeller(a, b)}/>}
             {bool1 === 3 && <Easy change={(a,b) => handeller(a, b)}/>}
             {bool1 === 4 && <Consistent change={(a,b)=> handeller(a, b) }/>}
            <Vision/>
            <Leaders/>
            <SecurityDetail/>
            <DeveloperDetail history={history}/>
            </>}
        </div>
    )
}

export default HomePage
