import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar';
import TopAdvertisment from './components/TopAdvertisment';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Logout from './pages/Logout';
import UserProfile from './pages/UserProfile';
import ComponentsPage from './pages/ComponetsPage';

const App = () => {
  return (
    <Router>
      <TopAdvertisment />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/components' element={<ComponentsPage />} />


        {/* user authentication  */}
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path='/logout' element={<Logout />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </Router>
  )
}

export default App