import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Explore from './pages/Explore'
import Offers from './pages/Offers'
import Profile from './pages/Profile'
import SignIn from './pages/SignIn'
import SingUp from './pages/SingUp'
import ForgotPassword from './pages/ForgotPassword'
import Navbar from './components/Navbar'

function App () {
  return (
    <>
      <Router>

        <Routes>
          <Route path={'/'} element={<Explore/>}/>
          <Route path={'/offers'} element={<Offers/>}/>
          <Route path={'/profile'} element={<Profile/>}/>
          <Route path={'/sing-in'} element={<SignIn/>}/>
          <Route path={'/sing-up'} element={<SingUp/>}/>
          <Route path={'/forgot-password'} element={<ForgotPassword/>}/>
        </Routes>
        <Navbar/>
      </Router>
      <ToastContainer/>

    </>
  )
}

export default App
