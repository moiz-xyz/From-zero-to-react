import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Country from '../pages/Country'

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element= {<Home/>}></Route>
        <Route path='/about' element= {<About/>}></Route>
        <Route path='/contact' element= {<Contact/>}></Route>
        <Route path='/country' element= {<Country/>}></Route>
      </Routes>
    </div>
  )
}

export default Router
