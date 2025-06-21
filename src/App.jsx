import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import MobileNavigation from './components/MobileNavigation';
import Home from './pages/Home';
import About from './pages/About';
import RosterMonster from './pages/RosterMonster';
import KuraKura from './pages/KuraKura';
import Byos from './pages/Byos';
import WebExperiments from './pages/WebExperiments';
import styled from '@emotion/styled';
import ScrollToTop from './components/ScrollToTop';
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import LoadingOverlay from "./components/LoadingOverlay";

const AppContainer = styled.div`
  display: flex;
  min-height: 100vh;
  padding-top: 4vh;
  background: none;
  z-index: 0;
`;

const RoughPaperBg = styled.div`
  position: fixed;
  opacity: 0.4;
  inset: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1000;
  pointer-events: none;
  background: linear-gradient(180deg, white 100%, rgba(0,0,0,0.08) 90%);
  filter: url(#roughpaper);
`;

const TopGradientOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 8vh;
  z-index: 10;
  pointer-events: none;
  background: linear-gradient(
    to bottom,
    rgba(255,255,255,0.7) 0%,
    rgba(255,255,255,0.4) 30%,
    rgba(255, 255, 255, 0) 95%
  );
`;

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  
  return (
    <Router>
      <ScrollToTop />
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <filter id='roughpaper'>
          <feTurbulence type="fractalNoise" baseFrequency='0.01' result='noise' numOctaves="5" />
          <feDiffuseLighting in='noise' lightingColor='#fff' surfaceScale='2'>
            <feDistantLight azimuth='45' elevation='60' />
          </feDiffuseLighting>
        </filter>
      </svg>
      <LoadingOverlay isVisible={isLoading} />
        <RoughPaperBg />
        <TopGradientOverlay />
        <MobileNavigation />
        <AppContainer>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/roster-monster" element={<RosterMonster />} />
            <Route path="/kura-kura" element={<KuraKura />} />
            <Route path="/ogp-illustration-guidelines" element={<Byos />} />
            <Route path="/web-experiments" element={<WebExperiments />} />
            {/* Add more routes here as we create more pages */}
          </Routes>

        </AppContainer>
        
    </Router>
  );
}

export default App;
