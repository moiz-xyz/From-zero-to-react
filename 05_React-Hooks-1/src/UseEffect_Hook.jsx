//  use Effet is used to perfom side effects in ou componets

import { useEffect, useState } from "react";

// what is side effect ?
// those actions that are perfomed outside the componet
//  example
// fetching data 
// updating dom 
// set time out and all the  timer funtions


const UseEffect_Hook = () => {
   const [count, setCount] = useState(0);
   const [message , setMessge] = useState(false);
  //  basic timer that will show greeting mesg after 3 seconds
   useEffect (()=>{
    const timer = setTimeout(() => {
      setMessge(true)
    }, 3000);

    return ()=> clearTimeout(timer)
   }, [])
  useEffect(() => {
    console.log('Component rendered or count updated:', count);
  });

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>

{/* basic timer that will show greeting mesg after 3 sec */}
      <div>
        {message ?<h2>Welcome user</h2> : <p>Loading ...</p>}
      </div>


    
    </div>
  )
}

export default UseEffect_Hook
