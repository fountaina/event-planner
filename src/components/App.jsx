import React from 'react'
import Navbar from './Navbar'
import '../styles/index.css'

const App = () => {
  return (
    <div className='main-page'>
      <Navbar />
      <div className='main-bar'>
        <h1>Welcome! Here is your summary</h1>
      </div>
    </div>
  )
}

export default App