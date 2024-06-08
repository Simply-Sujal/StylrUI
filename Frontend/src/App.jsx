import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar';
import TopAdvertisment from './components/TopAdvertisment';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';

const App = () => {
  return (
    <Router>
      <TopAdvertisment />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />


        {/* user authentication  */}
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  )
}

export default App