import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
import BlocksCategory from './BlocksComponent/BlocksCategory';
import BlockCodeSubmissionForm from './components/BlockCodeSubmissionForm';
import Blockcodes from './BlocksComponent/Blockcodes';
import ContributerPage from './components/ContributerPage';
import { useAuth } from './store/Auth';
import About from './pages/About';

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const { isTokenAvailable } = useAuth();
  return isTokenAvailable ? <Component {...rest} /> : <Navigate to="/login" />;
};

const App = () => {
  const { isTokenAvailable } = useAuth();
  return (
    <Router>
      <TopAdvertisment />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components" element={<ComponentsCategory />} />
        <Route path="/components/:category" element={<ComponentDisplay />} />


        <Route path="/blocks" element={<BlocksCategory />} />
        <Route path="/blocks/:category" element={<Blockcodes />} />

        <Route path="/contributorpage" element={<ContributerPage />} />

        <Route path='/aboutus' element={<About />} />

        <Route path="/codesubmissionform" element={<CodeSubmissionForm />} />
        <Route path="/blockSubmissionForm" element={<BlockCodeSubmissionForm />} />


        <Route
          path="/register"
          element={isTokenAvailable ? <Navigate to="/" /> : <RegisterPage />}
        />
        <Route
          path="/login"
          element={isTokenAvailable ? <Navigate to="/" /> : <LoginPage />}
        />
        <Route path="/logout" element={<Logout />} />
        <Route
          path="/profile"
          element={<ProtectedRoute element={UserProfile} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
