import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import avatarImg from '../assets/avatar.png'

const AccountDetails = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    fullName: 'Marry Doe',
    email: 'Marry@Gmail.com',
    phone: '',
    company: '',
    isAgency: 'Yes'
  })

  useEffect(() => {
    // Attempt to read the logged in user from localStorage
    const savedUser = localStorage.getItem('currentUser')
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser))
      } catch (e) {
        console.error('Error parsing user session', e)
      }
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('currentUser')
    navigate('/')
  }

  return (
    <div className="flex flex-col h-full bg-[#F7F8FA] page-fade-in">
      {/* Page Header */}
      <div className="bg-white px-5 py-4 border-b border-gray-200">
        <h2 className="text-[18px] font-bold text-[#1D2229]">
          Account Settings
        </h2>
      </div>

      <div className="flex-1 p-5 flex flex-col justify-between overflow-y-auto no-scrollbar">
        <div>
          {/* Profile Section (Avatar and basic details) */}
          <div className="flex items-start gap-5 mb-6">
            <div className="relative w-[76px] h-[76px]">
              {/* Avatar image */}
              <img
                src={avatarImg}
                alt="Profile Avatar"
                className="w-full h-full rounded-full object-cover border border-gray-200"
              />
              {/* Camera overlay button */}
              <div className="absolute right-0 bottom-0 w-[21px] h-[23px] bg-[#6C25FF] rounded-full flex items-center justify-center shadow-sm cursor-pointer hover:bg-[#5b1ee0] transition-colors">
                <svg
                  xmlns="camera.svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="w-3.5 h-3.5"
                >
                  <path d="M12 9a3.75 3.75 0 1 0 0 7.5A3.75 3.75 0 0 0 12 9Z" />
                  <path
                    fillRule="evenodd"
                    d="M9.344 3.071a2.18 2.18 0 0 0-1.782.935L6.183 6H4.25A2.25 2.25 0 0 0 2 8.25v10.5A2.25 2.25 0 0 0 4.25 21h15.5A2.25 2.25 0 0 0 22 18.75V8.25A2.25 2.25 0 0 0 19.75 6h-1.933l-1.38-1.994a2.18 2.18 0 0 0-1.782-.935H9.344ZM12 7.5a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>

            <div>
              <h3 className="text-[18px] font-bold text-[#1D2229] leading-tight">
                {user.fullName}
              </h3>
              <p className="text-[14px] text-gray-500 font-medium">
                {user.email}
              </p>
            </div>
          </div>

          {/* Bio Description exactly matching the screenshot */}
          <div className="mb-6">
            <p className="text-[14px] leading-[22px]">
              Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
            </p>
          </div>

          {/* Dashed Separator */}
          <div className="h-px bg-[linear-gradient(to_right,#d1d5db_50%,transparent_60%)] bg-size-[12px_100%] bg-repeat-x -mx-5 mb-6"></div>

          {/* Spacer between separators */}
          <div className="h-[480px]"></div>

          {/* Dashed Separator */}
          <div className="h-px bg-[linear-gradient(to_right,#d1d5db_60%,transparent_60%)] bg-size-[12px_100%] bg-repeat-x -mx-5 mb-6"></div>


        </div>
      </div>
    </div>
  )
}

export default AccountDetails
