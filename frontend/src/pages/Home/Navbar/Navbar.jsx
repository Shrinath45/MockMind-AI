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
  const [anchorElNav, setAnchorElNav] = React.useState(null)

  const handleOpenMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseMenu = (event) => {
    setAnchorElNav(null)
  }

  return (
    <>
      <div className='flex flex-row justify-between p-6 bg-sky-200'>
        <div>
          <h1 className='font-bold text-3xl '>MockMind<span className='text-red-500'>AI</span></h1>
        </div>
        <div className='flex flex-row justify-between'>

          {pages.map((page) => (
            <NavLink
              key={page.path}
              to={page.path}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 me-3 font-semibold text-xl cursor-pointer"
                  : "text-black me-3 font-semibold text-xl cursor-pointer"
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

        <div className='flex flex-row justify-between'>
          <button onClick={() => {
            navigate('/login')
          }} className='me-3 font-bold text-xl border rounded pt-1 pb-1 pl-2 pr-2 '>Signin</button>
          <button onClick={() => {
            navigate('signup')
          }} className='me-3 font-bold text-xl border rounded pt-1 pb-1 pl-2 pr-2 '>Signup</button>
        </div>
      </div>

    </>
  )
}

export default Navbar