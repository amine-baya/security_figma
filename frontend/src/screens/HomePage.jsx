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
import conf from '../configuration.json'
import Typewriter from 'typewriter-effect'


const HomePage = ({history}) => {

    const [bool] = useState(true)
    const [bool1, setbool1] = useState(1)
    const [showPointSvg, setShowPointSvg] = useState(true)
    
  
    
    let mehdi;
    
    useEffect(() => {


        

            mehdi = setTimeout(() => {
                    if (bool1 === 4) {
                        setbool1(1)
                        
    
                    } else {
                        
                        setbool1(bool1+ 1)
                       
                    }
                    
                }, 4000 );
                
               
              
            }, [bool1])       
            
            
            useEffect(() => {

                window.addEventListener('scroll', () => {
                    
                    if(window.scrollY > 300){
                        setShowPointSvg(false)
                        
                    }else{
                        setShowPointSvg(true)
                    }

                  });
               
            },window.scrollY)


        
        const handeller = (a, b) => {
            clearTimeout(mehdi)
            setbool1(a)
           
        }

       

     

    return (
        <div>
            < PointSvg show={showPointSvg} />  
            
            <div className="homePage_h1"><h1>Security made <Typewriter  options={{strings: conf.text, autoStart: true, loop: true}}/> </h1></div>
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
