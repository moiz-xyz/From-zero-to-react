import React from 'react'
import { nameContext } from '../context/context'
import { useContext } from 'react'

const Button = () => {
    const name = useContext(nameContext)
  return (
    <div>
    <button>{name}</button>
    </div>
  )
}

export default Button
