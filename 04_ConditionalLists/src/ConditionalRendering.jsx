import React from 'react'

const ConditionalRendering = (props) => {
  
  if (props.isLoggedin){
    return <h2>Welcome {props.username} To the interface</h2>
  } else {
    return <h2>Please login to view the detaills</h2>
  }
}

export default ConditionalRendering
