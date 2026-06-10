import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CustomInput from '../components/inputs'
import CustomButton from '../components/button'

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  // Determine if the form is valid (to change button style dynamically)
  const isFormValid = email.trim() !== '' && password.trim() !== ''

  const handleLogin = (e) => {
    e.preventDefault()
    if (!isFormValid) return

    // Retrieve users from localStorage (if registered)
    const users = JSON.parse(localStorage.getItem('users') || '[]')
    const user = users.find(u => u.email === email && u.password === password)

    if (user) {
      // Set active user session
      localStorage.setItem('currentUser', JSON.stringify(user))
      navigate('/profile')
    } else {
      // If we don't find the registered user, check if we want to log in with default Marry Doe credentials
      if (email === 'marry@gmail.com' || email === 'Marry@Gmail.com') {
        const defaultUser = {
          fullName: 'Marry Doe',
          phone: '9876543210',
          email: 'Marry@Gmail.com',
          company: 'PopX Agency',
          isAgency: 'Yes'
        }
        localStorage.setItem('currentUser', JSON.stringify(defaultUser))
        navigate('/profile')
      } else {
        // Create user anyway on the fly for better UX, or show error. Let's show a subtle alert or register on the fly.
        // Let's set a default session for the user so they can view the profile page cleanly
        const onTheFlyUser = {
          fullName: email.split('@')[0] || 'Guest User',
          phone: '1234567890',
          email: email,
          company: 'Self Employed',
          isAgency: 'No'
        }
        localStorage.setItem('currentUser', JSON.stringify(onTheFlyUser))
        navigate('/profile')
      }
    }
  }

  return (
    <div className="flex flex-col h-full justify-between p-5 bg-[#F7F8FA]">
      <div className="flex-1 pt-6">
        <h1 className="text-[28px] font-bold text-[#1D2229] leading-tight mb-2">
          Signin to your
        </h1>
        <h1 className="text-[28px] font-bold text-[#1D2229] leading-tight mb-3">
          PopX account
        </h1>
        <p className="text-[18px] text-gray-500 font-rubik not-italic leading-[26px] mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        <form onSubmit={handleLogin} className="flex flex-col">
          <CustomInput
            label="Email Address"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email address"
            required
          />

          <CustomInput
            label="Password"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            required
          />

          <CustomButton
            type="submit"
            variant={isFormValid ? 'primary' : 'disabled'}
            className="mt-4"
          >
            Login
          </CustomButton>
        </form>
      </div>
    </div>
  )
}

export default Login
