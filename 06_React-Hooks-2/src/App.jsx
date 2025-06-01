import Navbar from "./Componets/Navbar"
import { nameContext } from "./context/context"
import { valuecontext } from "./context/context2"

const App = () => {
  return (
    <div>
      <nameContext.Provider value="I m passed fom main jsx componets to app componet">
        <valuecontext.Provider value="iam being passed to lists componetent">
        <Navbar/>
        </valuecontext.Provider>
      </nameContext.Provider>
    </div>
  )
}

export default App
