import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import LayoutCandidate from '../components/candidate/LayoutCandidate.js';
import PATHS from './PathConstent'; // Import path constants

// Lazy load components
const Login = React.lazy(() => import('../components/pages/Login.js'));
const Signup = React.lazy(() => import('../components/pages/Signup2.js'));  
const Home = React.lazy(() => import('../components/home/Home.js'));
const ForgotPassword = React.lazy(() => import('../components/pages/ForgotPassword.js'));
const Profile = React.lazy(() => import("../components/pages/Profile.js"));
const Dashboard = React.lazy(() => import("../components/pages/Sidebar.js"));
const CandidatePage = React.lazy(() => import("../components/candidate/CandidateTable.js"));

const Routing = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path={PATHS.HOME} element={<Home />} />
        <Route path={PATHS.LOGIN} element={<Login />} />
        <Route path={PATHS.SIGNUP} element={<Signup />} />
        <Route path={PATHS.FORGOT_PASSWORD} element={<ForgotPassword />} />
        <Route path={PATHS.PROFILE} element={<Profile />} />     
        
        {/* Parent route with LayoutCandidate */}
        <Route path={PATHS.DASHBOARD} element={<LayoutCandidate />}>
          <Route index element={<CandidatePage />} /> 
          {/* <Route path={PATHS.CANDIDATES} element={<CandidatePage />} /> */}
        </Route>
      </Routes>
    </Suspense>
  );
};

export default Routing;
