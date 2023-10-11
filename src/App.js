import React from 'react'
import Header from './components/Header/Header'
import ProjectContainer from './components/ProjectContainer/ProjectContainer'
import SkillContainer from './components/SkillContainer/SkillContainer'
import TopContainer from './components/TopContainer/TopContainer'
import "./App.css"
import Contact from './components/Contact/Contact'


const App = () => {
  return (
    <div>
      <Header/>
      <TopContainer/>
      <SkillContainer/>
      <ProjectContainer/> 
      <Contact/>
    </div>
  )
}

export default App
