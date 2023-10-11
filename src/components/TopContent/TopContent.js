import React from 'react'
import {Link} from "react-scroll"
import "./TopContent.css"

const TopContent = () => {
  return (
    <div className='topContent'>
        <div className='topContent__Container'>
            <h1>Kanagaraj R</h1>
            <p>A Professional Web and App Developer</p>
            <a href='https://drive.google.com/file/d/196fAgy0rz95BKiidr7UCIiu9pDGCZe0a/view'>
                <button className='topContent__DownloadButton'>Download CV</button>
            </a>
            <Link to ="projects" smooth ={true} duration ={500}>
                <button className='topContent__MyworkButton'>My Work</button>
            </Link>
        </div>
      
    </div>
  )
}

export default TopContent
