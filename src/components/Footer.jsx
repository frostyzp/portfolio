import Rive, { useRive } from '@rive-app/react-canvas';
import React from 'react';


const Footer = () => {
  return (
    <footer> 
      <p>Arin Pantja 2025</p>
      <p>⸜( ´ ꒳ ` )⸝ Coded with care</p>
      <p style={{ textAlign: 'right' }}>Last updated June 2025</p>
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
    <div style={{ width: '50%', padding: '1rem 2vh' }}>
      <RiveComponent 
        style={{
          // width: '100%',
          height: '50vh',
          display: 'block',
          transform: 'rotate(3deg)',
          cursor: 'pointer',
        }}
        fit="cover"
      />
    </div>
  );
};