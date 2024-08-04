import reactLogo from "./assets/react.svg"
import viteLogo from '/vite.svg'
import "./index.css"
import { Button } from "@/components/ui/button"
import { Card } from './components/ui/card'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Gobiggohome from "./pages/Gobiggohome"
import FormPagefile from "./pages/FormPagefile"
import Dropdowngoals from "./pages/Dropdowngoals"
import Dropdownassets from "./pages/Dropdownassets"
import Dropdownlia from "./pages/Dropdownlia"
import Educationpage from "./pages/Educationpage"
import Profile from "./pages/Profile"

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route index element={<Login/>} Login/>
      <Route path="/signup" element={<Signup/>} Signup/>
      <Route path="/home" element={<Gobiggohome/>} Gobiggohome/>
      <Route path="/formpagefile" element={<FormPagefile/>} FormPagefile/>
      <Route path="/dropdown" element={<Dropdowngoals/>} Dropdowngoals/>
      <Route path="/dropasset" element={<Dropdownassets/>} Dropdownassets/>
      <Route path="/droplia" element={<Dropdownlia/>} Dropdownlia/>
      <Route path="/education" element={<Educationpage/>} Educationpage/>
      <Route path="/profile" element={<Profile/>} Profile/>

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
