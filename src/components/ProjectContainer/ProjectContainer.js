import React from 'react'
import {Element} from "react-scroll"
import Project from '../Project/Project';
import "./ProjectContainer.css"


const ProjectContainer = () => {
    const projects = [
    {
        img:"https://github.com/Kanagaraj-R/crud-app/assets/133184925/8b2e5d02-9eac-416d-882c-d218c2ea9ef1",
        title:"My-Portfolio",
        desc:"its used for many people connect to new friends and family",
        link:"www.google.com",
     },
     {
        img:"",
        title:"blog",
        desc:"its i am understanding the frontend programing small blog",
        link:"",
     },
     {
        img:"https://github.com/Kanagaraj-R/formvalidation/assets/133184925/7e5ac025-5d0c-4b9b-bc95-68134b8d56a0",
        title:"Library Management System",
        desc:"its used for many people connect to new friends and family",
        link:"www.google.com",
     },
     {
        img:"https://github.com/Kanagaraj-R/crud-app/assets/133184925/47519753-0cc8-40f8-b73d-7a29a834d444",
        title:"Curd App",
        desc:"its used for many people connect to new friends and family",
        link:"https://unique-kleicha-ac8560.netlify.app/",
     },
     {
        img:"https://user-images.githubusercontent.com/133188448/257780758-1dba93a4-6e80-4779-b91e-a3b05a4a9198.png",
        title:"redux-cart",
        desc:"its used for select item in cart iincress and decress the cart",
        link:" https://bespoke-tanuki-18deb9.netlify.app/",
     },
     {
      img:"https://github.com/Kanagaraj-R/Weather-App/assets/133184925/ed6050ec-d2a3-4d8a-8d82-2a808b659ad5",
      title:"Weather-App",
      desc:"its used for  what is the weather position to search",
      link:"https://weathereactjs.netlify.app/",
   },
     {
        img:"https://github.com/Kanagaraj-R/kanagu-blog/assets/133184925/c4df96cc-8990-4d24-b469-999e82275ad7",
        title:"blog",
        desc:"this project create a blog ",
        link:"https://resilient-kataifi-7b8aea.netlify.app/",
     },
     {
        img:"https://github.com/Kanagaraj-R/passwordreset-backend/assets/133184925/1ee63d00-0b3c-4678-a09f-7fa1535d9234",
        title:"Todo App",
        desc:"its used for create a name and describe to work ",
        link:"https://master--tubular-treacle-d66bd2.netlify.app/",
     },

];
  return (
    <Element className="projectContainer" id ="projects">
        <h1>projects</h1>
        <p>Here are some projects which I done for making lives of people easy</p>
    <div className='projectContainer__projects'>{
    projects.map((project,index)=>{
        return(
            <Project
            key={index}
            img={project.img}
            
            title={project.title}
            desc={project.desc}
            link={project.link}
            />
        );
        
    })}
        
      
    </div>
    </Element>
  )
}   

export default ProjectContainer
