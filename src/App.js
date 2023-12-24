import {Routes,Route} from 'react-router-dom'

// components
import Header from "./components/Header"

// pages
import Home from "./pages/Home"
import Services from "./pages/Services"
import Projects from "./pages/Projects"
import Contacts from "./pages/Contacts"

const App = () => {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
    </div>
  )
}

export default App
