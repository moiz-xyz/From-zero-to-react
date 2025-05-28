import React from 'react'
import Props from './Props'
import Jsx from './Jsx'
import State from './State'

const App = () => {
  return (
    <div>
      this is parent app.jsx component
     {/* sending value from parent to child  props component */}
   <Props name ="Ali" age="30" />

   {/*  calling jsx component */}
   <Jsx/>

{/* callinfg state component */}
<State/>
    </div>
  )
}

export default App
