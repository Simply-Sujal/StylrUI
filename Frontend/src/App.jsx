import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar';
import TopAdvertisment from './components/TopAdvertisment';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Logout from './pages/Logout';
import UserProfile from './pages/UserProfile';
import ComponentsCategory from './DifferentComponents/ComponentsCategory';
import ComponentDisplay from './DifferentComponents/ComponentDisplay';
import CodeSubmissionForm from './components/CodeSubmissionForm';
import Footer from './components/Footer';
import BlockCategory from './BlocksComponent/BlockCategory';
import BlockDisplay from './BlocksComponent/BlockDisplay';
import BlockSubmissionForm from './BlocksComponent/BlockSubmissionForm';
import CodeSubmissionPage from './BlocksComponent/CodeSubmissionPage';

const App = () => {
  return (
    <Router>
      <TopAdvertisment />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/components' element={<ComponentsPage />} /> */}
        <Route path='/components' element={<ComponentsCategory />} />
        <Route path='/components/:category' element={<ComponentDisplay />} />


        {/* Here I am going to showcase the block components  */}
        <Route path="/blocks" element={<BlockCategory />} />
        <Route path="/blocks/:category" element={<BlockDisplay />} />


        {/* User can submit code for any category for review making  */}
        <Route path='/codesubmissionform' element={<CodeSubmissionForm />} />
        <Route path='/blockSubmissionForm' element={<CodeSubmissionPage />} />


        {/* user authentication  */}
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path='/logout' element={<Logout />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App