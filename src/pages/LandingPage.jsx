import { useNavigate } from 'react-router-dom'
import CustomButton from '../components/button'

const LandingPage = () => {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col justify-end h-full px-5 pb-10 bg-[#F7F8FA]">
      <div className="mb-8">
        <h1 className="text-[28px] font-bold text-[#1D2229] leading-tight mb-2">
          Welcome to PopX
        </h1>
        <p className="text-sm text-gray-500 max-w-[280px] leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <CustomButton onClick={() => navigate('/register')}>
          Create Account
        </CustomButton>
        <CustomButton variant="secondary" onClick={() => navigate('/login')}>
          Already Registered? Login
        </CustomButton>
      </div>
    </div>
  )
}

export default LandingPage
