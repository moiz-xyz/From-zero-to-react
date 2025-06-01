import React from 'react'
import { valuecontext } from '../context/context2'
import { useContext } from 'react'

const Lists = () => {
    const value = useContext(valuecontext)
  return (
    <div>
        <ul>
       <li>Home</li>
        <li>About</li>
        <li>Contact</li> <br />
        {value}
        </ul>

    </div>
  )
}

export default Lists
