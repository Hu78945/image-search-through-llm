import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Module2 from './components/Module2';
import Module3 from './components/Module3';
import Module4 from './components/Module4';
import Module6 from './components/Module6';
import Module1 from './components/Module1';

 
function AppRoutes() {  
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/module_1" element={<Module1 />} />

          <Route path="/module_2" element={<Module2 />} />
          <Route path="/module_3" element={<Module3 />} />
          <Route path="/module_4" element={<Module4 />} />
          <Route path="/module_6" element={<Module6 />} />



          
        </Routes>
      </div>
    </Router>
  );
}

export default AppRoutes;
