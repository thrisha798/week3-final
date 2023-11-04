import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './Login';
import Navbar from './Navbar';
import Forgot from './Forgot';
import Signup from './Signup';

import Footer from './Footer';
import Main from './Main';
import Home from './Home';

import './All.css';
import './Footer.css';
import './Home.css';
import './Main.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/home" element={<Home />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </Router>
  );
}  

export default App;