import React, { useState } from 'react'

// This is a React functional component named State
const State = () => {

  // useState is a React Hook used to create state in functional components
  // 'fruit' is the current value of the state
  // 'setFruit' is the function used to update the state
  const [fruit, setFruit] = useState("Apple") // Initial value is "Apple"

  // This function will be called when the button is clicked
  // It updates the state value to "Mango"
  const handleFruit = () => {
    setFruit("Mango")
  }

  return (
    <div>
      {/* Heading of the component */}
      <h1>THIS IS FROM STATE COMPONENT</h1>

      {/* Display the current fruit stored in state */}
      <h1>Fruit is {fruit}</h1>

      {/* When this button is clicked, it calls handleFruit function to update the state */}
      <button onClick={handleFruit}>Update fruit</button>

      {/* Explanation of state for other developers */}
      <h3>What is state?</h3>
      <p>
        State is a way to store and manage data inside a component.<br />
        When the state changes, React automatically re-renders the component to show the updated data.<br />
        In this example, clicking the button updates the fruit from "Apple" to "Mango".
      </p>
    </div>
  )
}

export default State
