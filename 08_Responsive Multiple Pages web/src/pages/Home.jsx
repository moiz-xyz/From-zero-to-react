import React from 'react'
import "../App.css"
import world from "../../public/world.png"
import { FaArrowRight } from 'react-icons/fa'

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
    </div>
  )
}

export default Home
