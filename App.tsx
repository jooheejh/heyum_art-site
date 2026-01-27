
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Therapists from './pages/Therapists';
import QnA from './pages/QnA';
import Contact from './pages/Contact';
import AdminDashboard from './pages/AdminDashboard';
import { INITIAL_CONFIG, INITIAL_PROGRAMS, INITIAL_THERAPISTS } from './config';
import { SiteConfig, Program, Therapist } from './types';

const App: React.FC = () => {
  const [config, setConfig] = useState<SiteConfig>(() => {
    try {
      const saved = localStorage.getItem('heyum_config_v9');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (error) {
      console.error("Failed to load config from localStorage:", error);
    }
    return INITIAL_CONFIG;
  });

  const [therapists] = useState<Therapist[]>(INITIAL_THERAPISTS);
  const [programs] = useState<Program[]>(INITIAL_PROGRAMS);

  useEffect(() => {
    localStorage.setItem('heyum_config_v9', JSON.stringify(config));
  }, [config]);

  useEffect(() => {
    if (config.theme?.pointColor) {
      document.documentElement.style.setProperty('--brand-point', config.theme.pointColor);
    }
  }, [config.theme.pointColor]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Layout config={config}>
            <Home config={config} programs={programs} />
          </Layout>
        } />
        <Route path="/about" element={
          <Layout config={config}>
            <About config={config} />
          </Layout>
        } />
        <Route path="/programs" element={
          <Layout config={config}>
            <Programs programs={programs} />
          </Layout>
        } />
        <Route path="/therapists" element={
          <Layout config={config}>
            <Therapists therapists={therapists} />
          </Layout>
        } />
        <Route path="/qna" element={
          <Layout config={config}>
            <QnA config={config} />
          </Layout>
        } />
        <Route path="/contact" element={
          <Layout config={config}>
            <Contact config={config} />
          </Layout>
        } />
        <Route path="/admin" element={
          <AdminDashboard 
            config={config} 
            setConfig={setConfig} 
            posts={[]} 
            setPosts={() => {}} 
          />
        } />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
