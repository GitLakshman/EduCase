import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CustomInput from '../components/inputs'
import CustomButton from '../components/button'

const SignUp = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: 'Yes' // Default is 'Yes' as in the screenshot
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required'
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid'
    }
    if (!formData.password.trim()) newErrors.password = 'Password is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validateForm()) return

    // Save user to localStorage
    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]')
    existingUsers.push(formData)
    localStorage.setItem('users', JSON.stringify(existingUsers))

    // Set currentUser session
    localStorage.setItem('currentUser', JSON.stringify(formData))

    // Navigate to profile page
    navigate('/profile')
  }

  return (
    <div className="flex flex-col h-full justify-between p-5 bg-[#F7F8FA] page-fade-in overflow-y-auto no-scrollbar">
      <div className="pt-6">
        <h1 className="text-[28px] font-bold text-[#1D2229] leading-tight mb-8">
          Create your <br /> PopX account
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-1">
          <CustomInput
            label="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            showAsterisk
            error={errors.fullName}
          />

          <CustomInput
            label="Phone number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter phone number"
            required
            showAsterisk
            error={errors.phone}
          />

          <CustomInput
            label="Email address"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email address"
            required
            showAsterisk
            error={errors.email}
          />

          <CustomInput
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
            required
            showAsterisk
            error={errors.password}
          />

          <CustomInput
            label="Company name"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Enter company name"
          />

          {/* Radio Group: Are you an Agency? */}
          <div className="mb-8 mt-2">
            <span className="text-[14px] text-[#1D2229] font-medium block mb-2">
              Are you an Agency?<span className="text-red-500 ml-0.5">*</span>
            </span>
            <div className="flex gap-6 items-center">
              {/* Radio Option 'Yes' */}
              <label className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="radio"
                  name="isAgency"
                  value="Yes"
                  checked={formData.isAgency === 'Yes'}
                  onChange={handleChange}
                  className="sr-only"
                />
                <div
                  className={`w-[22px] h-[22px] rounded-full border-2 flex items-center justify-center transition-all ${formData.isAgency === 'Yes'
                    ? 'border-[#6C25FF]'
                    : 'border-gray-400 group-hover:border-gray-600'
                    }`}
                >
                  {formData.isAgency === 'Yes' && (
                    <div className="w-[12px] h-[12px] rounded-full bg-[#6C25FF]" />
                  )}
                </div>
                <span className="text-sm text-[#1D2229]">Yes</span>
              </label>

              {/* Radio Option 'No' */}
              <label className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="radio"
                  name="isAgency"
                  value="No"
                  checked={formData.isAgency === 'No'}
                  onChange={handleChange}
                  className="sr-only"
                />
                <div
                  className={`w-[22px] h-[22px] rounded-full border-2 flex items-center justify-center transition-all ${formData.isAgency === 'No'
                    ? 'border-[#6C25FF]'
                    : 'border-gray-400 group-hover:border-gray-600'
                    }`}
                >
                  {formData.isAgency === 'No' && (
                    <div className="w-[12px] h-[12px] rounded-full bg-[#6C25FF]" />
                  )}
                </div>
                <span className="text-sm text-[#1D2229]">No</span>
              </label>
            </div>
          </div>
        </form>
      </div>

      <div className="mt-auto pt-4 pb-2">
        <CustomButton onClick={handleSubmit}>
          Create Account
        </CustomButton>
      </div>
    </div>
  )
}

export default SignUp
