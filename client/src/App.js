import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routing from './routings/Routes'; 
// import { Toaster } from 'react-hot-toast';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
  
  

 
      <Router>
        {/* <Toaster></Toaster> */}

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
        <Routing />  
    
      </Router>

      
    
      </>
  );
};

export default App;