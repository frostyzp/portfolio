import styled from '@emotion/styled';
import usePageTitle from '../hooks/usePageTitle';
import { useState, useEffect, useRef } from 'react';

const FlowerContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 1;
  overflow: hidden;
  background: #000;
`;

const FlowerElement = styled.pre`
  position: absolute;
  font-family: 'CommitMono', monospace;
  font-size: ${props => props.size || '12px'};
  line-height: 1;
  color: ${props => props.color || '#ff0080'};
  white-space: pre;
  transform-style: preserve-3d;
  transition: transform 0.1s ease-out;
  user-select: none;
  text-shadow: 
    0 0 5px ${props => props.color || '#ff0080'},
    0 0 10px ${props => props.color || '#ff0080'},
    0 0 15px ${props => props.color || '#ff0080'},
    0 0 20px ${props => props.color || '#ff0080'},
    0 0 35px ${props => props.color || '#ff0080'},
    0 0 40px ${props => props.color || '#ff0080'};
  filter: brightness(1.2) saturate(1.5);
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(2px);
`;

const CenterText = styled.div`
  text-align: center;
  font-family: 'CommitMono', monospace;
  color: #fff;
  z-index: 3;
  
  h1 {
    color: #ffb6c1;
    text-shadow: 
      0 0 5px #ffb6c1,
      0 0 10px #ffb6c1,
      0 0 15px #ffb6c1,
      0 0 20px #ffb6c1,
      0 0 35px #ffb6c1,
      0 0 40px #ffb6c1;
    filter: brightness(1.2) saturate(1.5);
  }
  
  p {
    color: #ffc0cb;
    text-shadow: 
      0 0 5px #ffc0cb,
      0 0 10px #ffc0cb,
      0 0 15px #ffc0cb;
  }
`;

const RotatingFlowers = () => {
  const [currentTime, setCurrentTime] = useState(0);

  const flowerAscii = `      .--.
    .'_\\/_'.
    '. /\\ .'
      "||"
       || /\\
    /\\ ||//\\)
   (/\\\\||/
______\\||/_______`;

  const flowers = [
    { id: 1, x: 50, y: 50, size: '10px', color: '#ffb3d9', rotationSpeed: 1.0 }, // Soft pink
    { id: 2, x: 50, y: 50, size: '14px', color: '#ffc0cb', rotationSpeed: 0.8 }, // Classic pink
    { id: 3, x: 50, y: 50, size: '16px', color: '#f8bbd9', rotationSpeed: 1.2 }, // Blush pink
    { id: 4, x: 50, y: 50, size: '12px', color: '#ffcccb', rotationSpeed: 0.9 }, // Light coral pink
    { id: 5, x: 50, y: 50, size: '18px', color: '#dda0dd', rotationSpeed: 1.1 }, // Plum pink
    { id: 6, x: 50, y: 50, size: '8px', color: '#f0b7cd', rotationSpeed: 1.3 }, // Rose pink
    { id: 7, x: 50, y: 50, size: '20px', color: '#ffb6c1', rotationSpeed: 0.7 }, // Light pink
    { id: 8, x: 50, y: 50, size: '11px', color: '#e6b3ff', rotationSpeed: 1.4 }, // Lavender pink
    { id: 9, x: 50, y: 50, size: '15px', color: '#ffb3ba', rotationSpeed: 0.6 }, // Peach pink
    { id: 10, x: 50, y: 50, size: '13px', color: '#ffd1dc', rotationSpeed: 1.5 }, // Baby pink
  ];

  useEffect(() => {
    const animate = () => {
      setCurrentTime(Date.now() * 0.001); // Convert to seconds
      requestAnimationFrame(animate);
    };
    
    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  const getFlowerTransform = (flower) => {
    const { rotationSpeed } = flower;
    
    // Continuous Z-axis rotation based on time and individual rotation speed
    const rotateZ = (currentTime * rotationSpeed * 30) % 360; // 30 degrees per second base speed
    
    return `
      translate(-50%, -50%) 
      rotateZ(${rotateZ}deg)
    `;
  };

  return (
    <FlowerContainer>
      {flowers.map((flower) => (
        <FlowerElement
          key={flower.id}
          size={flower.size}
          color={flower.color}
          style={{
            left: `${flower.x}%`,
            top: `${flower.y}%`,
            transform: getFlowerTransform(flower),
          }}
        >
          {flowerAscii}
        </FlowerElement>
      ))}
    </FlowerContainer>
  );
};

const Dream = () => {
  usePageTitle('Dream - Arin P.');

  return (
    <div className="content" style={{ background: '#000', minHeight: '100vh' }}>
      <RotatingFlowers />
      <ContentWrapper>
        <CenterText>
          <h1>✧･ﾟ: *✧･ﾟ:* DREAM *:･ﾟ✧*:･ﾟ✧</h1>
        </CenterText>
      </ContentWrapper>
    </div>
  );
};

export default Dream;
