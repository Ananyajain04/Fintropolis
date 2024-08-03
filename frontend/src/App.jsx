import reactLogo from "./assets/react.svg"
import viteLogo from '/vite.svg'
import "./index.css"
import { Button } from "@/components/ui/button"
import { Card } from './components/ui/card'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from "./pages/Login"
import Home from "./pages/Home"
import Signup from "./pages/Signup"
import Gobiggohome from "./pages/Gobiggohome"
import FormPagefile from "./pages/FormPagefile"

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route index path="/login" element={<Login/>} Login/>
      <Route path="/main" element={<Home/>} Home/>
      <Route path="/signup" element={<Signup/>} Signup/>
      <Route path="/home" element={<Gobiggohome/>} Gobiggohome/>
      <Route path="/formpagefile" element={<FormPagefile/>} FormPagefile/>

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
