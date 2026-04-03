import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/home'
import DespreCompanie from './pages/DespreCompanie'
import Portofoliu  from './pages/portofoliu'

import Contact from './pages/contact'
import './App.css'

function App() {
  return (
    <>
      <NavBar />
    <main className="main-content">
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/despre-companie' element={<DespreCompanie />} />
      <Route path='/portofoliu' element={<Portofoliu />} />
      <Route path='/contact' element={<Contact />} />

    </Routes> 
    </main>
      
    </>
  )
}

export default App;
 

