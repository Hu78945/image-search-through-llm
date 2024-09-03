import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Module2 from './components/Module2';
import Module3 from './components/Module3';

 
function AppRoutes() {  
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/module_2" element={<Module2 />} />
          <Route path="/module_3" element={<Module3 />} />

          
        </Routes>
      </div>
    </Router>
  );
}

export default AppRoutes;
