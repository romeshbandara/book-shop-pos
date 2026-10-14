import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import toast, { Toaster } from 'react-hot-toast'
import { useEffect } from 'react'
import api from './lib/api'
import { Route, Routes, useNavigate } from 'react-router-dom'
import HomePage from './pages/homePage'

function App() {
  
  const navigate = useNavigate()
  

  return (
    <>
      <div className='h-screen w-screen bg-gray-400'>
        <Toaster position='top-right'/>
        
        

        <Routes>
           <Route path="/*" element={<HomePage/>} />
           
        </Routes>

      </div>
    </>
  )
}

export default App
