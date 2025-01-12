import React from "react";
import "../../styels/DashboardStyle/header.css"; // Make sure the path is correct
import { Bell, Mail } from "lucide-react"; // Importing icons from lucide-react

export default function Header() {
  // Handle logout logic
  console.log("I am working")

   const token=localStorage.getItem('token')
   if(!token){
    window.location.href = "/login";
   }



  const logout = () => {
    localStorage.removeItem('token'); // Clear token from local storage or do other logout operations
    // Optionally, redirect to login page
    window.location.href = "/login";
  };

  const handleSelectChange = (e) => {
    const value = e.target.value;
    switch(value) {
      case "profile":
        // Handle profile navigation or display
        console.log("Profile clicked");
        break;
      case "settings":
        // Handle settings navigation
        console.log("Settings clicked");
        break;
      case "logout":
        logout(); // Trigger logout on "Logout" selection
        break;
      default:
        break;
    }
  };

  return (
    <div className="container">
      <div className="header">
        <h1 className="title">Candidates</h1>
        <div className="header-actions">
          <button className="icon-button">
            <Mail className="icon" />
          </button>
          <button className="icon-button">
            <Bell className="icon" />
          </button>
          <div className="profile">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHr74Pjdj__bQPnZK-BFujbwgnP1t5PIqkig&s"
              alt="Profile"
              className="avatar"
            />
            <select
              className="select"
              onChange={handleSelectChange} // Handle selection change
              style={{
                border: "none",
                padding: "0px",
                width: "100px", // Adjust the width
                height: "30px", // Adjust the height
              }}
            >
              <option value="profile">Profile</option>
              <option value="settings">Settings</option>
              <option value="logout">Logout</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
