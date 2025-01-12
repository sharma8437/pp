import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import PATHS from './PathConstent'; // Import path constants


// Lazy load Login and Signup components
const Login = React.lazy(() => import('../components/pages/Login.js'));
const Signup = React.lazy(() => import('../components/pages/Signup2.js'));  
const Home = React.lazy(()=>import('../components/home/Home.js'))
const ForgotPassword = React.lazy(()=>import('../components/pages/ForgotPassword.js'))
const Profile = React.lazy(() => import("../components/pages/Profile.js"));
// eslint-disable-next-line import/first
import Dashboard from "../components/pages/Sidebar";




const Routing = () => {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
      <Route path={PATHS.HOME} element={<Home />} />
        <Route path={PATHS.LOGIN} element={<Login />} />
        <Route path={PATHS.SIGNUP} element={<Signup />} />
        <Route path={PATHS.FORGOT_PASSWORD} element={<ForgotPassword />} />
        <Route path={PATHS.PROFILE} element={<Profile />} />     
        <Route path={PATHS.DASHBORAD} element={<Dashboard />} />     
         </Routes>
    </Suspense>
  );
};

export default Routing;
