import React from 'react'

const Signup = () => {
  return (
    // Outer card: Centers the login box on the screen (added min-h-screen for testing)
    <div className="flex justify-center items-center min-h-screen bg-slate-900">
            <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
      
      {/* Login Card Container */}
      <div className="flex flex-col items-center border border-gray-200 rounded-2xl w-full max-w-md p-8 bg-slate-800/60 shadow-sm">
        
        {/* Title */}
        <h1 className="font-semibold text-2xl text-white mb-6">Sign Up</h1>
        
        {/* Form Container (Full width to let inputs stretch) */}
        <div className="w-full flex flex-col gap-4">
          
          <input 
            type="text" 
            name="username" 
            placeholder="Name"
            className="border text-white border-gray-300 rounded-lg p-2.5 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" 
          />

          <input 
            type="email" 
            name="email" 
            placeholder="Email Address"
            className="border text-white border-gray-300 rounded-lg p-2.5 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" 
          />
          <input 
            type="number" 
            name="contact" 
            placeholder="Contact Number"
            className="border text-white border-gray-300 rounded-lg p-2.5 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" 
          />
          
          <input 
            type="password" 
            name="password" 
            placeholder="Password"
            className="border text-white border-gray-300 rounded-lg p-2.5 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" 
          />

          <input 
            type="password" 
            name="confirmPassword" 
            placeholder="Confirm Password"
            className="border text-white border-gray-300 rounded-lg p-2.5 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" 
          />
          <span className='text-white text-center text-md'>Already have account <a href="/login" className='text-blue-800'>Sign in</a></span>
          
          <button 
            className="bg-blue-500 text-white font-semibold rounded-lg p-2.5 w-full mt-2 hover:bg-blue-600 transition-colors"
          >
            Sign up
          </button>
          
        </div>
      </div>

    </div>
  )
}

export default Signup