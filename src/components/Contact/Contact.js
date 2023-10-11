import { IconButton } from '@material-ui/core'
import React from 'react'
import { Element } from 'react-scroll'
import {Email, GitHub, LinkedIn}from "@material-ui/icons"
import "./Contact.css"

const Contact = () => {
  return (
    <Element className='contact' id='contact'>
        <h1>Contact</h1>
        <div className='contact__Container'>
            <p>
                Email:<span>kanagarajram88@gmail.com</span>
            </p>
            <p>
                Github username:<span>Kanagaraj_R</span>  
            </p>
            <div className='contact__Icons'>
            <a href='https://www.kanagarajram88@gmail.com'>
                    <IconButton>
                        <Email/>
                    </IconButton>
                </a>
                <a href='https://www.linkedin.com/in/kanagaraj-r/'>
                    <IconButton>
                        <LinkedIn/>
                    </IconButton>
                </a>
                <a href='https://github.com/Kanagaraj-R'>
                    <IconButton>
                        <GitHub/>
                    </IconButton>
                </a>
            </div>
        </div>
    </Element>
  )
}

export default Contact
