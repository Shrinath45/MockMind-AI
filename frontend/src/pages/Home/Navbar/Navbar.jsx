import React from 'react'
import { Navigate, useNavigate, NavLink } from 'react-router-dom'



const pages = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
]

const Navbar = () => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = React.useState(false);
  const [anchorElNav, setAnchorElNav] = React.useState(null)

  const handleOpenMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseMenu = (event) => {
    setAnchorElNav(null)
  }

  return (
    <>
      <div className='flex flex-row justify-between p-6 bg-slate-950 md:p-6'>
        <div>
          <h1 className='font-bold text-3xl text-white '>MockMind<span className='text-red-500'>AI</span></h1>
        </div>
        <div className='hidden md:flex flex-row gap-6 justify-between'>

          {pages.map((page) => (
            <NavLink
              key={page.path}
              to={page.path}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 me-3 font-semibold text-xl cursor-pointer"
                  : "text-white me-3 font-semibold text-xl cursor-pointer"
              }
            >
              {page.name}
            </NavLink>
          ))}
          {/* <h1 className='me-3 font-bold text-xl'>Home</h1>
          <h1 className='me-3 font-bold text-xl'>About</h1>
          <h1 className='me-3 font-bold text-xl'>Services</h1>
          <h1 className='me-3 font-bold text-xl'>Contact</h1> */}
        </div>

        <div className='hidden md:flex flex-row gap-3 justify-between'>
          <button onClick={() => {
            navigate('/login')
          }} className='me-3 font-semibold text-xl rounded-md pt-2 pb-2 pl-4 pr-4 bg-green-400 cursor-pointer '>Signin</button>
          <button onClick={() => {
            navigate('signup')
          }} className='me-3 font-semibold text-xl rounded-md pt-1 pb-1 pl-2 pr-2 bg-blue-500 cursor-pointer'>Signup</button>
        </div>
        <div className='flex md:hidden'>
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className='text-gray-800 focus:outline-none p-1'
          >
            {/* Simple Hamburger icon / X icon toggle */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>


      </div>
      {isOpen && (
        <div className='md:hidden flex flex-col gap-4 mt-4 pt-4'>
          {pages.map((page) => (
            <NavLink
              key={page.path}
              to={page.path}
              onClick={() => setIsOpen(false)} // Closes menu when a link is clicked
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold text-lg"
                  : "text-gray-800 font-semibold text-lg"
              }
            >
              {page.name}
            </NavLink>
          ))}
          
          {/* Mobile Buttons stacked vertically */}
          <div className='flex flex-col gap-2 pt-2'>
            <button 
              onClick={() => { navigate('/login'); setIsOpen(false); }} 
              className='w-full font-semibold text-lg bg-green-400 rounded-lg py-2 cursor-pointer'
            >
              Signin
            </button>
            <button 
              onClick={() => { navigate('/signup'); setIsOpen(false); }} 
              className='w-full font-semibold text-lg bg-sky-600 text-white rounded-lg py-2 cursor-pointer'
            >
              Signup
            </button>
          </div>
        </div>
      )}

    </>
  )
}

export default Navbar