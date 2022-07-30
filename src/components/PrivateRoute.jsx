import { Navigate, Outlet } from 'react-router-dom'
import {UseAuthStatus} from '../hooks/useAuthStatus'
import Spinner from './Spinner'

const PrivateRoute = () => {
  const {loggedIn, checkingStatus} =UseAuthStatus
  if ( checkingStatus ) {
    return <Spinner/>
  }
  return loggedIn ? <Outlet/> : <Navigate to='/sing-in'/>
}

export default PrivateRoute