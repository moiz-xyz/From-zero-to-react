import React from 'react'
import "../App.css"
import world from "/world.png?url"
import { FaArrowRight } from 'react-icons/fa'
import About from './About'
import Contact from './Contact'

const Home = () => {
  return (
    <div>
     <div className='parent'>
      <div className='first'>
      <h2>Explore the World One Country at a time </h2>
      <p>Discover he history culture and beauty of every nation.Sort search and filter through countries to find the details you need</p>
      <button className='btn1'>Start Exploring <FaArrowRight /></button>
      </div>
      <div className='second'>
<img src={world} alt="" srcset="" />
      </div>
     </div>
     <About/>
     <Contact/>
    </div>
  )
}

export default Home
