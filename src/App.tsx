import React from 'react';
import {Route,Routes} from 'react-router-dom'
import Navbar from './containers/Navbar'
import Home from './containers/Home';
import Footer from './containers/Footer';
import Portafolio from './containers/Portafolio';
import Contact from './containers/Contact';
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/port" element={<Portafolio/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
