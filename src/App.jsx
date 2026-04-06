import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/home'
import DespreCompanie from './pages/DespreCompanie'
import Portofoliu  from './pages/portofoliu'
import Servicii from './pages/servicii/Servicii'
import Mentenanta from './pages/servicii/Mentenanta'
import Instalare from './pages/servicii/Instalare'
import Consultanta from './pages/servicii/Consultanta'

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
      <Route path='/servicii' element={<Servicii />} />
      <Route path='/servicii/mentenanta' element={<Mentenanta />} />
      <Route path='/servicii/instalare' element={<Instalare />} />
      <Route path='/servicii/consultanta' element={<Consultanta />} />  

    

    </Routes> 
    </main>
      
    </>
  )
}

export default App;
 

