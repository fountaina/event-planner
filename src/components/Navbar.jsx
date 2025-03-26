import React, { useContext, useState, useEffect } from "react";
import "../styles/navbar.css";
import profilePic from "/images/profile-pic.png";
import homeIcon from "/images/icons/home.png";
import calendarIcon from "/images/icons/calendar.png";
import micIcon from "/images/icons/mic.png";
import reportIcon from "/images/icons/bar-graph.png";
import notificationIcon from "/images/icons/bell.png";
import messageIcon from "/images/icons/email.png";
import settingsIcon from "/images/icons/settings.png";
import collapseIcon from "/images/icons/arrow.png";
import toggleIcon from "/images/icons/switch.svg";
import toogleIconDark from "/images/icons/switch-dark.svg";
import userIcon from "/images/icons/user.png";
import { ThemeContext } from "./App";

function ChangeTheme({text}) {
  const themes = ["light-theme", "dark-theme"];
  const modeText = ["Dark Mode", "Light Mode"];
  const icons = [toggleIcon, toogleIconDark];
  //theme state from App component using useContext
  const {theme, setTheme} = useContext(ThemeContext);
  
  const [position, setPosition] = useState(0);

  //handles theme change
  function handleChange() {
    setPosition((prevPosition) => (prevPosition + 1) % themes.length); 
  }

  /*
  Update theme when `position` changes
  keeping setTheme in the dependencies ensures that if it ever 
  changes due to ThemeContext updates, the effect will still work 
  correctly. 
  */
  useEffect(() => {
    setTheme(themes[position]); 
  }, [position, setTheme]);

  return (
    <div className='option-container'>
      <img src={icons[position]} alt="" onClick={handleChange} />
      <div>
        <h3>{modeText[position]}</h3>
      </div>
    </div>
  )  
}

function Option({icon, text}) {
  // Component for the menu options
  return (
    <div className='option-container'>
      <img src={icon} alt="" />
      <div>
        <h3>{text}</h3>
      </div>
    </div>
  )
}

function AdminInfo({image, name, email}) {
  // Component for displaying the logged in Administrator's info
  return (
    <div className="admin-block">
      <div className="admin-image-block">
        <img src={image} alt="user" />
      </div>
      <div>
        <h5>{name}</h5>
        <p className="text-xs">{email}</p>
      </div>
    </div>
  )
}

const Navbar = () => {
  return (
    <div className='navbar left-0 top-0 h-screen w-64 p-5'>
        <div className="profile-circle">
          <div className="outer-circle">
            <div className="profile-image-container">
              <img src={profilePic} alt="profile" />
            </div>
          </div>
        </div>
        <Option icon={homeIcon} text="Home"/>
        <Option icon={calendarIcon} text="Events" />
        <Option icon={micIcon} text="Speakers" />
        <Option icon={reportIcon} text="Reports" />
        <Option icon={notificationIcon} text="Notifications" />
        <Option icon={messageIcon} text="Messages" />
        <Option icon={settingsIcon} text="Settings" />
        <Option icon={collapseIcon} text="Collapse" />
        <ChangeTheme  text="Light Mode"  />

        <AdminInfo image={userIcon} name="Rudra Devi" email="rudra.devi@gmail.com" />
    </div>
  )
}

export default Navbar