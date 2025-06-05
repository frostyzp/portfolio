import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { keyframes, Global, css } from '@emotion/react';
import { useState } from 'react';
import { motion } from "framer-motion";


const glowAnimation = keyframes`
  0% {
    text-shadow: 0 0 5px rgba(237, 74, 255, 0.32);
  }
  50% {
    text-shadow: 0 0 20px rgba(255, 180, 240, 0.97);
  }
  100% {
    text-shadow: 0 0 5px rgba(237, 74, 255, 0.43);
  }
`;

const typingAnimation = keyframes`
  from { width: 0 }
  to { width: 500% }
`;

const blinkAnimation = keyframes`
  50% { border-color: transparent }
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

// Add wave keyframes globally
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
  margin-bottom: 1rem;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
  position: relative;
  animation: ${glowAnimation} 2s infinite;

  &:hover {
    transform: scale(1.3);
    animation: ${glowAnimation} 2s infinite, ${shakeAnimation} 0.6s infinite;
    color: rgb(238, 176, 204);
  }
`;

const SidebarContainer = styled.div`
  position: fixed;
  margin-top: 8vh;
  left: 0;
  top: 0;
  width: 18vw;
  min-width: 220px;
  max-width: 320px;
  height: 100vh;
  padding: 2rem;
  border-right: 1px solid #eee;
  z-index: 100;
  @media (max-width: 900px) {
    position: relative;
    width: 25vw;
    min-width: unset;
    max-width: unset;
    height: auto;
    border-right: none;
    border-bottom: 1px solid #eee;
    padding: 1rem;
  }
`;

const Contact = styled.div`
  margin: 1rem 0;
  display: flex;
  gap: 1rem;
`;

const Headers = styled.div`
  margin: 1rem 0 0.5rem 0;
  font-family: 'CommitMono';
  font-size: 0.7rem;
`;

const StyledLink = styled(Link)`
  color: var(--text-color);
  text-decoration: none;
  transition: all 0.2s ease;
  display: inline-block;
  position: relative;

  &:hover {
    // text-shadow: 0 0 5px rgb(120, 120, 120);
    color: rgb(99, 99, 99);
    transform: translateX(5px); // <-- make it more obvious
  }

  .link-image {
    position: absolute;
    right: -24px;
    top: 50%;
    transform: translateY(-50%) translateX(-10px) rotate(-1deg);
    opacity: 0;
    transition: opacity 0.3s, transform 0.3s;
    pointer-events: none;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
  }

  &:hover .link-image {
    opacity: 1;
    transform: translateY(-50%) translateX(0) rotate(16deg);
  }

  &:hover .link-text {
    filter: url(#distort);
  }
`;

const StyledAnchor = styled.a`
  color: var(--text-color);
  text-decoration: none;
  transition: all 0.2s ease;
  display: inline-block;
  position: relative;

  &:hover {
    // text-shadow: 0 0 5px rgb(207, 207, 207);
    color: rgb(99, 99, 99);
    transform: translateX(5px);
  }

  .link-image {
    position: absolute;
    right: -32px;
    top: 50%;
    transform: translateY(-50%) translateX(-10px) rotate(-1deg);
    opacity: 0;
    transition: opacity 0.3s, transform 0.3s;
    pointer-events: none;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
  }

  &:hover .link-image {
    opacity: 1;
    transform: translateY(-50%) translateX(0) rotate(12deg);
  }

  &:hover .link-text {
    filter: url(#distort);
  }
`;

// Add Framer Motion variants for staggered animation
const listVariants = {
  hidden: { delay: 5.5, opacity: 0, y: 2 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 1,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 3 },
  visible: { opacity: 1, y: 0, ease: "easeInOut" },
};

const fadeIn = {
  hidden: { delay: 4, opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } },
};

const MotionHeaders = motion(Headers);

const Sidebar = () => {
  const [kaomojiHovered, setKaomojiHovered] = useState(false);
  return (
    <>
      {/* SVG filter for text distortion */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <filter id="distort">
            <feTurbulence type="fractalNoise" baseFrequency="0.1" numOctaves="6" result="noise">
              <animate attributeName="baseFrequency" values="0.02;0.06" keyTimes="0;1" dur="4s" repeatCount="indefinite" />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>
      <SidebarContainer>
        <Global styles={waveTextStyles} />
        <Global styles={waveKeyframes} />
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <KaomojiLink
            to="/"
            onMouseEnter={() => setKaomojiHovered(true)}
            onMouseLeave={() => setKaomojiHovered(false)}
          >
            <span style={{ opacity: kaomojiHovered ? 0 : 1, transition: 'opacity 0.1s' }}>( ദ്ദി ˙ᗜ˙ )</span>
            <span style={{
              position: 'absolute',
              left: 0,
              top: 0,
              opacity: kaomojiHovered ? 1 : 0,
              transition: 'opacity 0.1s',
              pointerEvents: 'none',
              width: '100%',
              textAlign: 'left',
            }}>(‧̣̥̇꒪ᗜ꒪)=͟͟͞͞</span>
          </KaomojiLink>
          {kaomojiHovered && (
            <span
              style={{
                position: 'absolute',
                left: '100%',
                top: '50%',
                transform: 'translateY(-50%)',
                marginLeft: '0.4rem',
                whiteSpace: 'nowrap',
                pointerEvents: 'none',
                zIndex: 10,
              }}
            >
              <WaveText text="!@$#%@!!!$!%#@#^!!!#&#@*!! " />
            </span>
          )}
        </div>
        <motion.p
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >Arin is a product & motion designer that crafts interfaces, interactions, and playful experiences ツ</motion.p>
        <motion.p
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >Currently based in NYC.</motion.p>

      
        <Contact>
        </Contact>

        <hr className="divider2" />

        <MotionHeaders
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >INTERACTION DESIGN</MotionHeaders>
        <motion.ul
          style={{ listStyle: "none", padding: 0, margin: 0 }}
          variants={listVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.li variants={itemVariants}>
            <StyledLink to="/roster-monster">
              <span className="link-text">Roster Monster</span>
              <span className="link-image">
                <img src="doodles/arrow.gif" alt="icon" style={{width: '24px', height: '24px'}} />
              </span>
            </StyledLink>
          </motion.li>
          <motion.li variants={itemVariants}>
            <StyledLink to="/kura-kura">
              <span className="link-text">Kura Kura</span>
              <span className="link-image">
                <img src="doodles/arrow.gif" alt="icon" style={{width: '24px', height: '24px'}} />
              </span>
            </StyledLink>
          </motion.li>
          <motion.li variants={itemVariants}>
            <StyledLink to="/ogp-illustration-guidelines">
              <span className="link-text">Illustration Guidelines</span>
              <span className="link-image">
                <img src="doodles/arrow.gif" alt="icon" style={{width: '24px', height: '24px'}} />
              </span>
            </StyledLink>
          </motion.li>
        </motion.ul>

        {/* <Headers>WEB / CODE</Headers> */}
        <ul
          style={{ listStyle: "none", padding: 0, margin: 0 }}
        >
          {/* <li>
            <StyledLink to="/">
              TCSC
              <span className="link-image">
                <img src="https://placehold.co/24x24" alt="icon" style={{width: '24px', height: '24px'}} />
              </span>
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/ogp-illustration-guidelines">
              DDR Face
              <span className="link-image">
                <img src="https://placehold.co/24x24" alt="icon" style={{width: '24px', height: '24px'}} />
              </span>
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/ogp-illustration-guidelines">
              Pha Lai Nam Lhai
              <span className="link-image">
                <img src="https://placehold.co/24x24" alt="icon" style={{width: '24px', height: '24px'}} />
              </span>
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/kura-kura">
              wandering wondering
              <span className="link-image">
                <img src="https://placehold.co/24x24" alt="icon" style={{width: '24px', height: '24px'}} />
              </span>
            </StyledLink>
          </li> */}

        </ul>


        <MotionHeaders
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >ABOUT</MotionHeaders>
        <motion.ul
          style={{ listStyle: "none", padding: 0, margin: 0 }}
          variants={listVariants}
          initial="hidden"
          animate="visible"
        >
                    <motion.li variants={itemVariants}>
            <StyledLink to="/about">
              <span className="link-text">About Me</span>
              <span className="link-image">
                <img src="doodles/arrow.gif" alt="icon" style={{width: '24px', height: '24px'}} />
              </span>
            </StyledLink>
          </motion.li>


          <motion.li variants={itemVariants}>
            <StyledAnchor href="https://www.linkedin.com/in/arin-pantja/" target="_blank" rel="noopener noreferrer">
              <span className="link-text">Linkedin</span>
              <span className="link-image">
                <img src="doodles/linkedin.gif" alt="icon" style={{width: '24px', height: '24px'}} />
              </span>
            </StyledAnchor>
          </motion.li>
          <motion.li variants={itemVariants}>
            <StyledAnchor href="mailto:your@email.com">
              <span className="link-text">Email</span>
              <span className="link-image">
                <img src="doodles/email.gif" alt="icon" style={{width: '24px', height: '24px'}} />
              </span>
            </StyledAnchor>
          </motion.li>
          <motion.li variants={itemVariants}>
            <StyledAnchor href="https://x.com/arin_pantja" target="_blank" rel="noopener noreferrer">
              <span className="link-text">Twitter/X</span>
              <span className="link-image">
                <img src="doodles/x.gif" alt="icon" style={{width: '24px', height: '24px'}} />
              </span>
            </StyledAnchor>
          </motion.li>
          <motion.li variants={itemVariants}>
            <StyledAnchor href="https://www.are.na/arin-p/channels" target="_blank" rel="noopener noreferrer">
              <span className="link-text">Are.na</span>
              <span className="link-image">
                <img src="doodles/arena.gif" alt="icon" style={{width: '24px', height: '24px'}} />
              </span>
            </StyledAnchor>
          </motion.li>
        </motion.ul>
      </SidebarContainer>
    </>
  );
};

export default Sidebar; 