import { Route, Routes } from 'react-router-dom'
import Navigatie from './components/Navigatie'
import Acasa from './pages/Acasa'
import DespreCompanie from './pages/DespreCompanie'
import Portofoliu from './pages/Portofoliu'
import Servicii from './pages/Servicii/Servicii'
import Mentenanta from './pages/Servicii/Mentenanta'
import Instalare from './pages/Servicii/Instalare'
import Consultanta from './pages/Servicii/Consultanta'
import Contact from './pages/Contact'
import './App.css'

function App() {
  return (
    <>
      <Navigatie />
    <main className="main-content">
    <Routes>
      <Route path='/' element={<Acasa />} />
      <Route path='/despre-companie' element={<DespreCompanie />} />
      <Route path='/portofoliu' element={<Portofoliu />} />
      <Route path="/contact" element={<Contact />} />
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
 
