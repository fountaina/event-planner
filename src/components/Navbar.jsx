import React from "react";
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
import toggleIcon from "/images/icons/switch.png";
import userIcon from "/images/icons/user.png";

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
    <div className="option-container">
      <div>
        <img src={image} alt="user" />
      </div>
      <div>
        <h3>{name}</h3>
        <h5>{email}</h5>
      </div>
    </div>
  )
}

const Navbar = () => {
  return (
    <div className='navbar'>
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
        <Option icon={toggleIcon} text="Light Mode" />

        <AdminInfo image={userIcon} name="Rudra Devi" email="rudra.devi@gmail.com" />
    </div>
  )
}

export default Navbar