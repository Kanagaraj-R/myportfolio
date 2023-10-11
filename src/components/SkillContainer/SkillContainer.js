import React from 'react'
import { Element } from 'react-scroll'
import skillimg from "../Assets/myapp/skillsimg.jpg"
import Linerprogress from "@material-ui/core/LinearProgress";
import "./SkillContainer.css"
const SkillContainer = () => {
  return (
    <Element className='skillContainer' id='skills'>
        <div className='skillContainer__image'>
        <img src={skillimg}alt='' />   
        </div>
        <div className='skillContainer__text'>
            <h2>SKILLSET</h2>
            <div className='skillContainer__skillset'>
            <h5>React</h5> 
            <div className='skillContainer__slider skillContainer__slider1'>
                <Linerprogress variant='determinate' value={90} />
                
                </div>  
            </div>
            <div className='skillContainer__skillset'>
            <h5>Javascript</h5> 
            <div className='skillContainer__slider skillContainer__slider2'>
                <Linerprogress variant='determinate' value={90} />
                
                </div>  
            </div>
            <div className='skillContainer__skillset'>
            <h5>Html</h5> 
            <div className='skillContainer__slider skillContainer__slider3'>
                <Linerprogress variant='determinate' value={90} />
                
                </div>  
            </div>
            <div className='skillContainer__skillset'>
            <h5>css</h5> 
            <div className='skillContainer__slider skillContainer__slider4'>
                <Linerprogress variant='determinate' value={90} />
                
                </div>  
            </div>
            <div className='skillContainer__skillset'>
            <h5>NodeJs</h5> 
            <div className='skillContainer__slider skillContainer__slider5'>
                <Linerprogress variant='determinate' value={60} />
                
                </div>  
            </div>
            <div className='skillContainer__skillset'>
            <h5>MangoDb</h5> 
            <div className='skillContainer__slider skillContainer__slider6'>
                <Linerprogress variant='determinate' value={60} />
                
                </div>  
            </div>
            <div className='skillContainer__skillset'>
            <h5>AWS</h5> 
            <div className='skillContainer__slider skillContainer__slider7'>
                <Linerprogress variant='determinate' value={50} />
                
                </div>  
            </div>
        </div>

    </Element>
    
      
    
  )
}

export default SkillContainer
