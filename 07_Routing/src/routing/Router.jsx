import React from 'react'
import { Route , Routes } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import About from '../pages/About'
import Team from '../pages/Team'
import Contact from '../pages/Contact'

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/team' element={<Team/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
    </div>
  )
}

export default Router
