import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/Header';
import Sidebar from '../pages/Sidebar';
import CandidateTable from './CandidateTable'; // Sidebar component

const LayoutCandidate = () => {
  return (
    <div className="layout">
      <Header />
      <Sidebar />
      <div className="content">
        <div className="main-content">
          <Outlet /> {/* This will render the child routes */}
        </div>
      </div>
    </div>
  );
}

export default LayoutCandidate;
