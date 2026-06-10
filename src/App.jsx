import React from 'react'
import './index.css'
import AppRouter from './routes/AppRouter'

function App() {
  return (
    <div className="min-h-screen w-full bg-gray-200/50 flex items-center justify-center p-0 md:p-6 select-none">
      {/* Mobile Screen Container */}
      <div className="w-full h-screen md:w-[375px] md:h-[812px] bg-[#F7F8FA] md:border md:border-black relative overflow-hidden flex flex-col">
        {/* Screen Viewport with internal scrolling */}
        <div className="flex-1 h-full overflow-hidden relative flex flex-col">
          <AppRouter />
        </div>
      </div>
    </div>
  )
}

export default App
