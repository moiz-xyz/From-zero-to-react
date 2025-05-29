import React from 'react'
import ListRedering from './ListRedering'
import ConditionalRendering from './ConditionalRendering'

const App = () => {
  return (
    <div>
      <ListRedering/>
      <ConditionalRendering isLoggedin ={false} username = "Moiz"/>
      
    </div>
  )
}

export default App
