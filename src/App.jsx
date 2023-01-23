import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Menu from "./pages/Menu"
import Rewards from "./pages/Rewards"

function App() {

  return (
  <>
  <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/menu" element={<Menu/>}/>
      <Route path="/rewards" element={<Rewards/>}/>
    </Routes>
    <Footer/>
  </>
  )
}

export default App
