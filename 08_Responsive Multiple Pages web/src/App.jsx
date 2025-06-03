import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Router from './routes/Router'

const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Router/>
    </BrowserRouter> 
    </div>
  )
}

export default App
