import Navbar from '../componets/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../componets/Footer'

const Layout = () => {
  return (
    <div>
      <Navbar/>
        <main>
      <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

export default Layout
