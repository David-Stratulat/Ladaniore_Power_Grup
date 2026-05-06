import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import DespreCompanie from './pages/DespreCompanie'
import Portfolio  from './pages/Portfolio'
import Services from './pages/Services/Services'
import Maintenance from './pages/Services/Maintenance'
import Installation from './pages/Services/Installation'
import Consultance from './pages/Services/Consultance'
import Contact from './pages/Contact'
import './App.css'

function App() {
  return (
    <>
      <NavBar />
    <main className="main-content">
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/despre-companie' element={<DespreCompanie />} />
      <Route path='/portofoliu' element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
      <Route path='/servicii' element={<Services />} />
      <Route path='/servicii/mentenanta' element={<Maintenance />} />
      <Route path='/servicii/instalare' element={<Installation />} />
      <Route path='/servicii/consultanta' element={<Consultance />} />  

    

    </Routes> 
    </main>
      
    </>
  )
}

export default App;
 

