
import { Outlet, Route, Routes } from 'react-router'
import './App.css'
import About from './Components/About'
import Drive from './Components/Drive'
import Banner from './Pages/Homepage/Banner'
import Bannerform from './Pages/Homepage/Bannerform'
import Drivehompage from './Pages/Homepage/Drivehompage'
import Footer from './Pages/Homepage/Footer'
import Home from './Pages/Homepage/Home'
import Navbar from './Pages/Homepage/Navbar'
import Rentcar from './Pages/Homepage/Rentcar'
import Suggestions from './Pages/Homepage/Suggestions'
import Valanbusiness from './Pages/Homepage/Valanbusiness'
import Chooseride from './Pages/Login/Chooseride'
import Login from './Pages/Login/Login'
import Options from './Pages/Login/Options'
import Rider from './Pages/Login/Rider'
import DriverRegister from './Pages/Register/DriverRegister'
import RiderRegister from './Pages/Register/RiderRegister'


function App() {
 
  return (
    
     <>
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<Home />} />
      </Route>
        <Route path='login' element={<Options />} />
        <Route path='signup' element={<Options />} />
        <Route path='to-driver' element={<DriverRegister />} />
        <Route path='to-rider' element={<RiderRegister />} />
        <Route path='to-drive' element={<Rider/>} />
        <Route path='to-ride' element={<Chooseride/>} />
        <Route path='to-drivee' element={<Drive/>}/>
        

    </Routes>
     </>
      
    
  )
}

export default App


function Layout() {
  return(
    <>
     <Navbar/>
<Outlet />
    <Footer />
    </>
  )
}