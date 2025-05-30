// use state hook is a componets that allows you add state in functional componnet
// what is state ?
// state is nothing just values or variables of our components
// in simple words if you want to update your state or variable then we used hook

import { useState } from "react"
const Usestate_Hook = () => {
  const [counter , setcounter] = useState(0) ; 
  const [visible , setVisible] = useState(false)

  let increment = ()=>{
    setcounter (counter +1)
  }
  let decremennt = ()=>{
    setcounter (counter -1)
  }
  let reset = ()=>{
    setcounter (0)
  }

  let handleVisible = ()=>{
    setVisible(!visible)
  }
  return (
    <div>
      {/* EX 01 counter app  */}
      <div>
      <h2>Counter :{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decremennt}>Decrment</button>
      <button onClick={reset}>Reset</button>
      </div>
      {/* 02 button toggle */}
      <div>
        {visible ? <p>Hello toggle</p> :<p>Hello im hidden</p> }
        <button onClick={handleVisible}>
 {visible ? 'Hide above para' : 'Show para'}</button>
      </div>

    
    </div>
  )
}

export default Usestate_Hook
