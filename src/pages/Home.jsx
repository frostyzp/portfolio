import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';
import React, { useRef, useState, useEffect } from 'react';
import Footer from '../components/Footer';
import { keyframes, Global, css } from '@emotion/react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import LoadingOverlay from '../components/LoadingOverlay';
import FadeInWhenVisible from '../components/FadeInWhenVisible';

const SIDEBAR_WIDTH = '18vw';

const Content = styled.div`
  margin-left: calc(${SIDEBAR_WIDTH} + 2rem);
  margin-right: 2rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 900px) {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;

const ImageText = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const TextRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  margin-top: 0.4rem;

  p:first-of-type {
    flex: 0 0 20%;
  }

  p:last-of-type {
    flex: 0 0 80%;
  }
`;

// Helper for hover styles
const getHoverStyles = (noHover) => {
  if (noHover) {
    // Only opacity changes on hover
    return `
      a:hover img,
      a:hover video {
        opacity: 0.90;
        cursor: default;
      }
    `;
  } else {
    // Full interactive hover effect
    return `
      a:hover img,
      a:hover video {
        scale: 1.02;
        opacity: 0.85;
        rotate: 1deg;
        box-shadow: 15px 0 15px rgba(191, 187, 197, 0.15),
                    -15px 0 15px rgba(233, 205, 255, 0.15);
        transform: perspective(1000px)
          rotateY(calc(var(--mouse-x, 0) * 5deg))
          rotateX(calc(var(--mouse-y, 0) * -5deg))
          skew(calc(var(--mouse-x, 0) * 1deg), calc(var(--mouse-y, 0) * 1deg));
      }
    `;
  }
};

const ImageTextContainerGrid = styled.div`
  display: grid;
  grid-template-columns: ${({ columns }) => columns || '1fr 1fr'};
  gap: 0.6rem;
  margin-bottom: 0.6rem;
  align-items: stretch;

  img, video {
    width: 100%;
    height: 48vh;
    object-fit: cover;
    display: block;
    border-radius: 8px;
    border: 1px solid var(--border-color);
    scale: 1;
    opacity: 1;
    transition: 500ms cubic-bezier(0.1, 1, 0.2, 1);
    @media (max-width: 600px) {
      height: 20rem;
    }
  }

  ${({ noHover }) => getHoverStyles(noHover)}

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const CaseStudyRowContainer = styled(Link)`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 0.8rem;
  align-items: stretch;
  width: 100%;
  margin-bottom: 1rem;
  cursor: pointer;

  img, video {
    width: 100%;
    height: 48vh;
    object-fit: cover;
    display: block;
    border-radius: 8px;
    border: 1px solid var(--border-color);
    scale: 1;
    opacity: 1;
    transition: 500ms cubic-bezier(0.1, 1, 0.2, 1);
  }

  &:hover img,
  &:hover video {
    scale: 1.02;
    opacity: 0.85;
    rotate: 1deg;
    box-shadow: 15px 0 15px rgba(191, 187, 197, 0.15),
                -15px 0 15px rgba(233, 205, 255, 0.15);
    transform: perspective(1000px)
      rotateY(calc(var(--mouse-x, 0) * 2deg))
      rotateX(calc(var(--mouse-y, 0) * -2deg))
      skew(calc(var(--mouse-x, 0) * 1deg), calc(var(--mouse-y, 0) * 1deg));
  }

  &:hover .case-study-title,
  &:hover .case-study-desc {
    opacity: 0.55;
    transition: 0.6s cubic-bezier(0.1, 1, 0.2, 1);
    // rotate: -1deg;
  }



  @media (max-width: 900px) {
    grid-template-columns: 1fr !important;
    grid-template-rows: auto auto;
  }
`;

const CaseStudyCell = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const CaseStudyRow = ({ to, children }) => <CaseStudyRowContainer to={to}>{children}</CaseStudyRowContainer>;

// Responsive CaseStudyRow for mobile: text below image/video
function ResponsiveCaseStudyRow({ to, title, description, mediaType, mediaSrc }) {
  const isMobile = useIsMobile();
  return (
    <CaseStudyRowContainer to={to}>
      {isMobile ? (
        <>
          {/* Media first */}
          <div>
            {mediaType === 'video' ? (
              <video src={mediaSrc} autoPlay loop muted />
            ) : (
              <img src={mediaSrc} alt={title} />
            )}
          </div>
          {/* Text below */}
          <CaseStudyCell>
            <p className="case-study-title">{title}</p>
            <p className="case-study-desc" style={{ fontSize: '1rem' }}>{description}</p>
          </CaseStudyCell>
        </>
      ) : (
        <>
          {/* Text left, media right (desktop) */}
          <CaseStudyCell>
            <p className="case-study-title">{title}</p>
            <p className="case-study-desc" style={{ fontSize: '1rem' }}>{description}</p>
          </CaseStudyCell>
          <div>
            {mediaType === 'video' ? (
              <video src={mediaSrc} autoPlay loop muted />
            ) : (
              <img src={mediaSrc} alt={title} />
            )}
          </div>
        </>
      )}
    </CaseStudyRowContainer>
  );
}

// Helper HOC for interactive links
function InteractiveLink({ children }) {
  return <span style={{ cursor: 'default' }}>{children}</span>;
}

// Gradient area at the top right
const GradientArea = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 60vh;
  width: 900px;
  background: linear-gradient(180deg, #fffbe7 0%, #f6eaff 100%);
  margin-bottom: 2rem;
  border-radius: 0;
  z-index: 2;
  overflow: visible;
  @media (max-width: 900px) {
    position: static;
    width: 100%;
    height: auto;
    border-radius: 0;
  }
`;

// Lined paper style div
const LinedDraggableDiv = styled.div`
  width: 420px;
  height: 340px;
  background: repeating-linear-gradient(
    to bottom,
    #fff 0px,
    #fff 22px,
    #e55 22px,
    #fff 22.7px
  );
  /* No border-radius for sharp corners */
  border-radius: 0;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
  border: 1px solid #f3e6e6;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// DrawingCanvas component for freehand drawing
function DrawingCanvas({ imgSrc }) {
  const canvasRef = useRef(null);
  const [drawing, setDrawing] = useState(false);
  const [lines, setLines] = useState([]); // Array of lines, each line is an array of points

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#111'; // black pen
    ctx.lineWidth = 1.1; // thinner pen
    lines.forEach(line => {
      ctx.beginPath();
      line.forEach((pt, i) => {
        if (i === 0) {
          ctx.moveTo(pt.x, pt.y);
        } else {
          ctx.lineTo(pt.x, pt.y);
        }
      });
      ctx.stroke();
    });
  }, [lines]);

  const handlePointerDown = e => {
    setDrawing(true);
    const rect = canvasRef.current.getBoundingClientRect();
    const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
    const y = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;
    setLines(prev => [...prev, [{ x, y }]]);
  };
  const handlePointerMove = e => {
    if (!drawing) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
    const y = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;
    setLines(prev => {
      const newLines = [...prev];
      newLines[newLines.length - 1] = [...newLines[newLines.length - 1], { x, y }];
      return newLines;
    });
  };
  const handlePointerUp = () => setDrawing(false);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {imgSrc && (
        <img
          src={imgSrc}
          alt="doodle"
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            pointerEvents: 'none',
            zIndex: 1
          }}
        />
      )}
      <canvas
        ref={canvasRef}
        width={420}
        height={340}
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
          zIndex: 2,
          background: 'transparent',
          cursor: 'crosshair',
        }}
        onMouseDown={handlePointerDown}
        onMouseMove={handlePointerMove}
        onMouseUp={handlePointerUp}
        onMouseLeave={handlePointerUp}
        onTouchStart={handlePointerDown}
        onTouchMove={handlePointerMove}
        onTouchEnd={handlePointerUp}
      />
    </div>
  );
}

// DraggablePaper: custom draggable wrapper for React 18+ compatibility
function DraggablePaper({ children, style }) {
  const nodeRef = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const offset = useRef({ x: 0, y: 0 });

  // Restrict movement within parent
  const clamp = (value, min, max) => Math.max(min, Math.min(value, max));

  const onPointerDown = (e) => {
    setDragging(true);
    const pointer = e.touches ? e.touches[0] : e;
    const rect = nodeRef.current.getBoundingClientRect();
    offset.current = {
      x: pointer.clientX - rect.left,
      y: pointer.clientY - rect.top,
    };
    document.addEventListener('pointermove', onPointerMove);
    document.addEventListener('pointerup', onPointerUp);
    document.body.style.userSelect = 'none';
  };

  const onPointerMove = (e) => {
    if (!dragging) return;
    const pointer = e.touches ? e.touches[0] : e;
    const parent = nodeRef.current.parentElement.getBoundingClientRect();
    const width = nodeRef.current.offsetWidth;
    const height = nodeRef.current.offsetHeight;
    let x = pointer.clientX - parent.left - offset.current.x;
    let y = pointer.clientY - parent.top - offset.current.y;
    // Clamp to parent bounds
    x = clamp(x, 0, parent.width - width);
    y = clamp(y, 0, parent.height - height);
    setPos({ x, y });
  };

  const onPointerUp = () => {
    setDragging(false);
    document.removeEventListener('pointermove', onPointerMove);
    document.removeEventListener('pointerup', onPointerUp);
    document.body.style.userSelect = '';
  };

  return (
    <div
      ref={nodeRef}
      style={{
        position: 'absolute',
        left: pos.x,
        top: pos.y,
        touchAction: 'none',
        cursor: dragging ? 'grabbing' : 'grab',
        ...style,
      }}
      onPointerDown={onPointerDown}
    >
      {children}
    </div>
  );
}

// Add fadeIn animation variant
const fadeIn = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

// Kaomoji and wave styles/animations
const glowAnimation = keyframes`
  0% { text-shadow: 0 0 5px rgba(237, 74, 255, 0.32); }
  50% { text-shadow: 0 0 20px rgba(255, 180, 240, 0.97); }
  100% { text-shadow: 0 0 5px rgba(237, 74, 255, 0.43); }
`;
const shakeAnimation = keyframes`
  0% { transform: translate(0, 0); }
  10% { transform: translate(-8px, 4px); }
  20% { transform: translate(8px, -4px); }
  30% { transform: translate(-8px, 4px); }
  40% { transform: translate(8px, -4px); }
  50% { transform: translate(-8px, 4px); }
  60% { transform: translate(8px, -4px); }
  70% { transform: translate(-8px, 4px); }
  80% { transform: translate(8px, -4px); }
  90% { transform: translate(-8px, 4px); }
  100% { transform: translate(0, 0); }
`;
const waveKeyframes = css`
  @keyframes wave {
    0%, 100% { transform: translateY(0); }
    20% { transform: translateY(-8px); }
    40% { transform: translateY(8px); }
    60% { transform: translateY(-8px); }
    80% { transform: translateY(8px); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;
const waveTextStyles = css`
  .wave-text {
    font-family: 'CommitMono', monospace;
    font-size: 1.1em;
    color: rgb(238, 176, 204);
    text-shadow: 0 0 20px rgba(255, 180, 240, 0.97);
    white-space: nowrap;
    display: inline-block;
  }
  .wave-char {
    display: inline-block;
    opacity: 0;
    animation: wave 1.5s infinite, fadeIn 0.4s forwards, ${shakeAnimation} 1s infinite;
  }
`;
function WaveText({ text }) {
  return (
    <span className="wave-text">
      {text.split('').map((char, i) => (
        <span
          className="wave-char"
          key={i}
          style={{
            animationDelay: `${i * 0.06}s, ${i * 0.06}s`
          }}
        >
          {char}
        </span>
      ))}
    </span>
  );
}
const KaomojiLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
  position: relative;
  animation: ${glowAnimation} 2s infinite;
  &:hover {
    transform: scale(1.2);
    animation: ${glowAnimation} 2s infinite, ${shakeAnimation} 0.6s infinite;
    color: rgb(238, 176, 204);
  }
`;

// Add MobileEtcLinks component for mobile view
function MobileEtcLinks() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'left',
      alignItems: 'left',
      gap: '1.2rem',
      margin: '2rem 0 1.5rem 0',
    }}>
      <a href="https://www.linkedin.com/in/arin-pantja/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '0.95rem' }}>
        <img src="/assets/doodles/linkedinA.gif" alt="Linkedin" style={{ width: 28, height: 28, marginBottom: 4 }} />
        Linkedin
      </a>
      <a href="mailto:your@email.com" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '0.95rem' }}>
        <img src="/assets/doodles/emailA.gif" alt="Email" style={{ width: 28, height: 28, marginBottom: 4 }} />
        Email
      </a>
      <a href="https://x.com/arin_pantja" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '0.95rem' }}>
        <img src="/assets/doodles/x.gif" alt="Twitter/X" style={{ width: 28, height: 28, marginBottom: 4 }} />
        Twitter/X
      </a>

    </div>
  );
}

// Add useIsMobile hook at the top of the file
function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(() => typeof window !== 'undefined' ? window.innerWidth <= 900 : false);
  React.useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 900);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return isMobile;
}

// Add a new styled flex container for the heading/intro and image
const HeadingIntroFlex = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2.5rem;
  margin-bottom: 1.5rem;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
`;
const InlineDogImage = styled.img`
  width: 15vw;
  height: auto;
  margin-top: 0.2rem;
  opacity: 1;
  @media (max-width: 900px) {
    width: 120px;
    margin-top: 0.5rem;
    align-self: flex-start;
  }
`;

const Home = () => {
  usePageTitle('Arin Pantja');

  const [isLoading, setIsLoading] = useState(() => {
    if (typeof window !== 'undefined') {
      return !localStorage.getItem('loaderShown');
    }
    return true;
  });
  const [canAnimateRows, setCanAnimateRows] = useState(false);
  const isMobile = useIsMobile();
  const [kaomojiHovered, setKaomojiHovered] = useState(false);
  
  // Animation variants for framer-motion
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
  };

  useEffect(() => {
    if (isLoading) {
      // Simulate loading overlay for 1.5s
      const timer = setTimeout(() => {
        setIsLoading(false);
        // Set flag so loader doesn't show again
        localStorage.setItem('loaderShown', 'true');
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => setCanAnimateRows(true), 800);
      return () => clearTimeout(timer);
    } else {
      setCanAnimateRows(false);
    }
  }, [isLoading]);

  return (
    <>
      <Global styles={waveTextStyles} />
      <Global styles={waveKeyframes} />
      {/* Loading Overlay */}
      <LoadingOverlay isVisible={isLoading} />
      <Content>  
        <HeadingIntroFlex>
          <div style={{ flex: 1, minWidth: 0 }}>
            <motion.p
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              style={{ fontSize: "1rem", marginBottom: "0.5rem" }}
            ><span style={{ color: "black" }}>Arin Pantja –– </span> Product Designer, Motion & Code  ツ</motion.p>
            <motion.p
              variants={fadeIn}
              initial="hidden"
              animate="visible" 
              style={{ fontSize: "1rem", height: isMobile ? "5vh" : "20vh", width: isMobile ? "100%" : "30%" }}
            >Crafting interfaces, interactions, and playful experiences. Currently based in NYC.</motion.p>
            {useIsMobile() && <MobileEtcLinks />}
          </div>
          {/* <InlineDogImage src="/assets/doodles/connectTheDot01.png" alt="Connect the Dog" /> */}
        </HeadingIntroFlex>
        <hr className="divider2" />
        {/* Case Study Rows with consistent fade-in animation */}
        {[
          {
            to: "/roster-monster",
            title: "Roster Monster",
            description: "Reducing 1 week's worth of effort into hours of roster planning through automation feedback",
            mediaType: "video",
            mediaSrc: "/assets/case-studies/ogp_main.mp4"
          },
          {
            to: "/kura-kura",
            title: "Kura Kura",
            description: "A playful, localised AI-driven journaling tool for emotional wellness amongst youths",
            mediaType: "video",
            mediaSrc: "/assets/case-studies/kurakura_main.mp4"
          },
          {
            to: "/ogp-illustration-guidelines",
            title: "Open Government Products",
            description: "Streamlining illustration craft for Singapore Government products",
            mediaType: "image",
            mediaSrc: "/assets/byos/byos_main.png"
          }
        ].map((props, idx) => (
          <FadeInWhenVisible key={props.to} delay={0.08 * idx}>
            <ResponsiveCaseStudyRow {...props} />
          </FadeInWhenVisible>
        ))}
        <hr className="divider2" />
        {/* WEB / CODE sections always visible, but force single column on mobile */}
        <ImageTextContainerGrid columns={isMobile ? "1fr" : "2fr 1fr"} noHover>
          <InteractiveLink>
            <ImageText to="">
              <video src="/assets/case-studies/tcsc.mp4" autoPlay loop muted />
              <TextRow>
                {/* <p>TCSC</p>
                <p>CMS built website </p> */}
              </TextRow>
            </ImageText>
          </InteractiveLink>
          <InteractiveLink>
            <ImageText to="">
            <img src="/assets/case-studies/cuddly.gif"></img>
            <TextRow>
                {/* <p>Motion</p>
                <p>For Various clients</p> */}
              </TextRow>
            </ImageText>
          </InteractiveLink>
        </ImageTextContainerGrid>
        <ImageTextContainerGrid columns={isMobile ? "1fr" : "1fr 2fr"} noHover>
          <InteractiveLink>
            <ImageText to="">
              <TextRow>
              </TextRow>
              <img src="/assets/case-studies/grab_cs.png" />
            </ImageText>
          </InteractiveLink>
          <InteractiveLink>
            <ImageText to="">
            <TextRow>
            <video src="/assets/case-studies/nam_lhai.mp4" autoPlay loop muted />
              </TextRow>
            </ImageText>
          </InteractiveLink>
        </ImageTextContainerGrid>
        <ImageTextContainerGrid columns={isMobile ? "1fr" : "1fr 1fr 1fr"} noHover={isMobile}>
          <InteractiveLink>
            <ImageText to="">
            <video src="/assets/case-studies/oracle_2.mov" autoPlay loop muted />
              <TextRow>
              </TextRow>
            </ImageText>
          </InteractiveLink>
          <InteractiveLink>
            <ImageText to="">
            <video src="/assets/case-studies/skipping_3.mov" autoPlay loop muted />
            <TextRow>
              </TextRow>
            </ImageText>
          </InteractiveLink>
          <InteractiveLink>
            <ImageText to="">
            <video src="/assets/case-studies/graveyard_2.mov" autoPlay loop muted />
            <TextRow>
              </TextRow>
            </ImageText>
          </InteractiveLink>
        </ImageTextContainerGrid>

        <Footer />
      </Content>
    </>
  );
};

export default Home;
export { Content }; 