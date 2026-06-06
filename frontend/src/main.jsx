import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Landing/Home.jsx'
import About from './pages/Home/About/About.jsx'
import Services from './pages/Home/Servises/Services.jsx'
import Contact from './pages/Home/Contact/Contact.jsx'
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx'
import Login from './pages/Login/Login.jsx'
import Signup from './pages/Login/Signup.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App />} errorElement={<ErrorPage />}>
    <Route index element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/services" element={<Services />} />
    <Route path="/contact" element={<Contact />} />
    <Route path='/login' element={<Login />} />
    <Route path='/signup' element={<Signup />} />

    </Route>

  </Routes>
  </BrowserRouter>,
)
