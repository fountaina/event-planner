import React from 'react'
import Navbar from './Navbar'
import '../styles/index.css'
import Dashboard from './Dashboard'

const App = () => {
  return (
    <div className='main-page'>
      <Navbar />
      <Dashboard />
    </div>
  )
}

export default App