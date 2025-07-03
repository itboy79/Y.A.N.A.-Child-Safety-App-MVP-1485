import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import LandingPage from './pages/LandingPage';
import TeenApp from './pages/TeenApp';
import ParentDashboard from './pages/ParentDashboard';
import OnboardingTeen from './pages/OnboardingTeen';
import OnboardingParent from './pages/OnboardingParent';
import './index.css';

function App() {
  return (
    <Router>
      <motion.div 
        className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/teen" element={<TeenApp />} />
          <Route path="/teen/onboarding" element={<OnboardingTeen />} />
          <Route path="/parent" element={<ParentDashboard />} />
          <Route path="/parent/onboarding" element={<OnboardingParent />} />
        </Routes>
      </motion.div>
    </Router>
  );
}

export default App;