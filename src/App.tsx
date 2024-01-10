import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header'; 
import HomePage from './pages/HomePage'; 
import AboutPage from './pages/AboutPage'; 
import './App.css';
import Footer from './components/Footer/Footer';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard_admin" element={<DashboardPage />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
