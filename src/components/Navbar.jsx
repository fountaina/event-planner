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
import revealIcon from "/images/icons/arrow-right.png";
import toggleIcon from "/images/icons/switch.svg";
import toogleIconDark from "/images/icons/switch-dark.svg";
import userIcon from "/images/icons/user.png";
import { ThemeContext, themes, layoutProperties } from "./App";


function CollapseNavbar({text, fullsize, setLayout}) {
  const expansionIcons = [collapseIcon, revealIcon]; //Array of icons depending on state
  const [position, setPosition] = useState(0); //State to change position on the array of icons

  function handleChange() {
    //function that handles changes when collapse/reveal button is clicked as the case may be
    setPosition((prevPosition) => {
      const newPosition = (prevPosition + 1) % expansionIcons.length
      return newPosition
    });
  }

  // Side effect that ensures setLayout runs when position is changed.
  useEffect(() => {
    setLayout(layoutProperties[position]); // Changes layout of navbar and dashboard
  }, [position]);

  return (
    <div className='option-container'>
      <img className="cursor-pointer" onClick={handleChange} src={expansionIcons[position]} alt="" />
      <div>
        {
          fullsize ? <h3>{text}</h3> : null
        }
      </div>
    </div>
  )
}

function ChangeTheme({fullsize}) {
  // this component changes between dark and light mode

  // const themes = ["light-theme", "dark-theme"];
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
      <img className="cursor-pointer" src={icons[position]} alt="" onClick={handleChange} />
      <div>
        {
          fullsize ? <h3>{modeText[position]}</h3> : null
        }
      </div>
    </div>
  )  
}

function Option({icon, text, fullsize}) {
  // Component for the menu options
  return (
    <div className='option-container'>
      <img className="cursor-pointer" src={icon} alt="" />
      <div>
        {
          fullsize ? <h3>{text}</h3> : null
        }
      </div>
    </div>
  )
}

function AdminInfo({image, name, email, fullsize}) {
  // Component for displaying the logged in Administrator's info
  return (
    <div className="admin-block">
      <div className="admin-image-block">
        <img src={image} alt="user" />
      </div>
      {
        fullsize ? <div><h5>{name}</h5><p className="text-xs">{email}</p></div> : null
      }
    </div>
  )
}

const Navbar = ({layout, setLayout}) => {
  return (
    <div className={layout.navbarLayout}>
        <div className="profile-circle">
          <div className="outer-circle">
            <div className="profile-image-container">
              <img src={profilePic} alt="profile" />
            </div>
          </div>
        </div>
        <Option icon={homeIcon} text="Home" fullsize={layout.fullsize} />
        <Option icon={calendarIcon} text="Events" fullsize={layout.fullsize}/>
        <Option icon={micIcon} text="Speakers" fullsize={layout.fullsize}/>
        <Option icon={reportIcon} text="Reports" fullsize={layout.fullsize}/>
        <Option icon={notificationIcon} text="Notifications" fullsize={layout.fullsize}/>
        <Option icon={messageIcon} text="Messages" fullsize={layout.fullsize}/>
        <Option icon={settingsIcon} text="Settings" fullsize={layout.fullsize}/>

        <CollapseNavbar text="Collapse" fullsize={layout.fullsize} setLayout={setLayout}/>
        <ChangeTheme  fullsize={layout.fullsize}/>

        <AdminInfo image={userIcon} name="Rudra Devi" email="rudra.devi@gmail.com" fullsize={layout.fullsize}/>
    </div>
  )
}

export default Navbar