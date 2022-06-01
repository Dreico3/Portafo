import React from 'react';
import {Route,Routes} from 'react-router-dom'
import Home from './containers/Home';
import Portafolio from './containers/Portafolio';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/port" element={<Portafolio/>}/>
      </Routes>
    </div>
  );
}

export default App;
