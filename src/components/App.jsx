import React, { createContext, useState } from 'react'
import Navbar from './Navbar'
import '../styles/index.css'
import Dashboard from './Dashboard'

export const ThemeContext = createContext();

const App = () => {
  const themes = ["light-theme", "dark-theme"];
  const [theme, setTheme] = useState(themes[0]);
  
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div className={theme}>
        <Navbar />
        <Dashboard />
      </div>
    </ThemeContext.Provider>
  )
}

export default App