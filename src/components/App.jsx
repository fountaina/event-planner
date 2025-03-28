import React, { createContext, useState } from 'react'
import Navbar from './Navbar'
import '../styles/index.css'
import Dashboard from './Dashboard'

export const ThemeContext = createContext();
export const themes = ["light-theme", "dark-theme"];
export const layoutProperties = [
  {
    fullsize: true,
    navbarLayout: "navbar left-0 top-0 h-screen w-64 p-5",
    dashboardLayout: "main-bar ml-64 p-6 overflow-y-auto h-screen"
  },
  {
    fullsize: false,
    navbarLayout: "navbar left-0 top-0 h-screen w-20 p-5",
    dashboardLayout: "main-bar ml-20 p-6 overflow-y-auto h-screen"
  }
]; // Style layouts in Twailwindcss, depending on if fullsize is true or not.

const App = () => {
  //State for themes
  const [theme, setTheme] = useState(themes[0]);

  //State to handle menu bar collapse
  const [layout, setLayout] = useState(layoutProperties[0]);
  
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div className={theme}>
        <Navbar layout={layout} setLayout={setLayout} />
        <Dashboard layout={layout} setLayout={setLayout} />
      </div>
    </ThemeContext.Provider>
  )
}

export default App