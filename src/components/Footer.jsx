import Rive, { useRive } from '@rive-app/react-canvas';
import React from 'react';


const Footer = () => {
  return (
    <footer> 
      <p className="footer-name">Arin Pantja</p>
      <p className="footer-coded">Coded with care ⸜( ´ ꒳ ` )⸝ </p>
      <p className="footer-last-updated">Last updated May 2026</p>
    </footer>
  );
};

export default Footer; 


export const Simple = () => {
  const { RiveComponent, rive } = useRive({
    src: "/assets/animations/portfolio_plastic.riv",
    stateMachines: "State Machine 1",
    autoplay: true,
  });

  React.useEffect(() => {
    if (rive) {
      console.log(rive.contents);
    }
  }, [rive]);

  return (
    <div style={{ 
      width: '200%', 
      minHeight: '40vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem',
      boxSizing: 'border-box',
    }}>
      <RiveComponent 
        style={{
          width: '120%',
          maxWidth: 'none',
          height: '60vh',
          display: 'block',
          margin: '0 auto',
          transform: 'rotate(8deg)',
          cursor: 'pointer',
        }}
        fit="cover"
      />
    </div>
  );
};