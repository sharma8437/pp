import React from "react";
import { Link } from "react-router-dom";
import attendance from "../../assets/icons/attandance.svg";
import logout from "../../assets/icons/logout.svg";
import user from "../../assets/icons/user.svg";
import users from "../../assets/icons/users.svg";
import leave from "../../assets/icons/leave.svg";
import SerachBar from "../searchBar/SearchBar";
import "../../styels/DashboardStyle/sidebar.css";
import Header from "./Header";

export  default function Sidebar() {

  const token=localStorage.getItem('token')
  if(!token){
   window.location.href = "/login";
  }

  return (
    <>
      <div>
        <aside className="sidebar">
          <div className="sidebar-header">
            <Link to="/" className="logo-container">
              <div className="logo">
                <div className="logo-circle"></div>
                <span className="logo-text">LOGO</span>
              </div>
            </Link>
          </div>
          <div>
            <SerachBar />
          </div>

          <nav className="sidebar-nav">
            <div>
              <h2 className="section-title">Recruitment</h2>
              <div className="nav-group">
                <Link to="/candidates" className="nav-item">
                  <img src={user} alt="Attendance Icon" className="icon" />
                  Candidates
                </Link>
              </div>
            </div>

            <div>
              <h2 className="section-title">Organization</h2>
              <div className="nav-group">
                <Link to="/employees" className="nav-item">
                  <img src={users} alt="Attendance Icon" className="icon" />
                  Employees
                </Link>
                <Link to="/attendance" className="nav-item">
                  <img
                    src={attendance}
                    alt="Attendance Icon"
                    className="icon"
                  />
                  Attendance
                </Link>
                <Link to="/leaves" className="nav-item">
                  <img src={leave} alt="Attendance Icon" className="icon" />
                  Leaves
                </Link>
              </div>
            </div>

            <div className="nav-footer">
              <h2 className="section-title">Others</h2>
              <button className="nav-item">
                <img src={logout} alt="Attendance Icon" className="icon" />
                Logout
              </button>
            </div>
          </nav>
        </aside>

        <div>
          <Header />
        </div>
      </div>
    </>
  );
}
