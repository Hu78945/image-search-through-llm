import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/Main';

 
function AppRoutes() {  
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={< Main/>} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default AppRoutes;
