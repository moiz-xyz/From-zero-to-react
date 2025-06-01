import UseEffect_Hook from "./UseEffect_Hook"
import Use_ref from "./Use_ref"
import Usestate_Hook from "./Usestate_Hook"


const App = () => {
  return (
    <div>
      {/* Hooks are components that make functional componets work like class functions */}
      {/* 01 _ Use state hook */}
     <Usestate_Hook/>
      <UseEffect_Hook/>
      <Use_ref/>
    </div>
  )
}

export default App
