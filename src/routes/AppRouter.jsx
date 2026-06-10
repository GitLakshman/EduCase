import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import AccountDetails from '../pages/AccountDetails'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/profile" element={<AccountDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter