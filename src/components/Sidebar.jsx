import { Link, useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { motion } from "framer-motion";
import DraggablePaperPad from './DraggablePaperPad';


const typingAnimation = keyframes`
  from { width: 0 }
  to { width: 500% }
`;

const blinkAnimation = keyframes`
  50% { border-color: transparent }
`;

const KaomojiLink = styled(Link)`
  display: inline-block;
  // margin-bottom: 1rem;
  text-decoration: none;
  color: black;
`;

const SidebarContainer = styled.div`
  position: fixed;
  margin-top: 4vh;
  left: 0;
  top: 0;
  width: 18vw;
  min-width: 200px;
  max-width: 18vw;
  height: 100vh;
  padding: 2rem;
  border-right: 1px solid #eee;
  z-index: 100;
  display: flex;
  flex-direction: column;

  @media (max-width: 900px) {
    display: none;
  }
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
    color: rgb(27, 27, 27);
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
    color: rgb(21, 21, 21);
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

// Hide INTERACTION DESIGN header and links on mobile
const HideOnMobile = styled.div`
  @media (max-width: 900px) {
    display: none !important;
  }
`;

// Hide DraggablePaperPad on mobile
const HidePaperOnMobile = styled.div`
  @media (max-width: 900px) {
    display: none !important;
  }
`;

const Sidebar = () => {
  return (
    <>
      {/* SVG filter for text distortion */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <filter id="distort">
            <feTurbulence type="fractalNoise" baseFrequency="0.1" numOctaves="6" result="noise">
              <animate
                attributeName="baseFrequency"
                values="0.02;0.03;0.04;0.05;0.06;0.05;0.04;0.03;0.02"
                keyTimes="0;0.125;0.25;0.375;0.5;0.625;0.75;0.875;1"
                dur="2s"
                repeatCount="indefinite"
                calcMode="discrete"
              />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>
      <SidebarContainer>
      <div>
          <KaomojiLink to="/">( ദ്ദി ˙ᗜ˙ )' \\ ←</KaomojiLink>
        </div>

        <HideOnMobile>
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
                <img src="/assets/doodles/arrowA.gif" alt="icon" style={{width: '36px', height: '36px'}} loading="lazy" />
                </span>
              </StyledLink>
            </motion.li>
            <motion.li variants={itemVariants}>
              <StyledLink to="/kura-kura">
                <span className="link-text">Kura Kura</span>
                <span className="link-image">
                <img src="/assets/doodles/arrowA.gif" alt="icon" style={{width: '36px', height: '36px'}} loading="lazy" />
                </span>
              </StyledLink>
            </motion.li>
            <motion.li variants={itemVariants}>
              <StyledLink to="/ogp-illustration-guidelines">
                <span className="link-text">Illustration Systems</span>
                <span className="link-image">
                <img src="/assets/doodles/arrowA.gif" alt="icon" style={{width: '36px', height: '36px'}} loading="lazy" />
                </span>
              </StyledLink>
            </motion.li>
            {/* <motion.li variants={itemVariants}>
              <StyledLink to="/kura-kura">
                <span className="link-text">Kura Kura</span>
                <span className="link-image">
                  <img src="/assets/doodles/arrowA.gif" alt="icon" style={{width: '36px', height: '36px'}} />
                </span>
              </StyledLink>
            </motion.li>
            <motion.li variants={itemVariants}>
              <StyledLink to="/ogp-illustration-guidelines">
                <span className="link-text">Illustration Guidelines</span>
                <span className="link-image">
                    <img src="/assets/doodles/arrowA.gif" alt="icon" style={{width: '36px', height: '36px'}} />
                </span>
              </StyledLink>
            </motion.li> */}
          </motion.ul>
        </HideOnMobile>

        <HideOnMobile>
          <MotionHeaders
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            style={{ marginTop: '1.75rem' }}
          >PLAY</MotionHeaders>
          <motion.ul
            style={{ listStyle: "none", padding: 0, margin: 0 }}
            variants={listVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.li variants={itemVariants}>
              <StyledLink to="/web-experiments">
                <span className="link-text">Creative Tech</span>
                <span className="link-image">
                  <img src="/assets/doodles/arrowA.gif" alt="icon" style={{width: '36px', height: '36px'}} loading="lazy" />
                </span>
              </StyledLink>
            </motion.li>
          </motion.ul>
        </HideOnMobile>

        <motion.ul
            style={{ listStyle: "none", padding: 0, marginBottom: '6vh' }}
            variants={listVariants}
            initial="hidden"
            animate="visible"
          >
                       <MotionHeaders
              variants={fadeIn}
              initial="hidden"
              animate="visible"
            >ETC.</MotionHeaders>
                <motion.li variants={itemVariants}>
                  <StyledLink to="/about">
                        <span className="link-text">About</span>
                <span className="link-image">
                  <img src="/assets/doodles/arrowA.gif" alt="icon" style={{width: '36px', height: '36px'}} loading="lazy" />
                </span>
              </StyledLink>
            </motion.li>
            <motion.li variants={itemVariants}>
              <StyledAnchor href="https://drive.google.com/file/d/1URDkxdH8SXH0sh7qvnE0xUGTZ7eSMSU6/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                <span className="link-text">Resume</span>
                <span className="link-image">
                  <img src="/assets/doodles/arrowA.gif" alt="icon" style={{width: '36px', height: '36px'}} loading="lazy" />
                </span>
              </StyledAnchor>
            </motion.li>
          </motion.ul>

          <div style={{ marginTop: 'auto' }}>
            {/* <MotionHeaders
              variants={fadeIn}
              initial="hidden"
              animate="visible"
            >ETC.</MotionHeaders> */}
            <MotionHeaders
              variants={fadeIn}
              initial="hidden"
              animate="visible"
            >CONTACT</MotionHeaders>

            <motion.ul
              style={{ listStyle: "none", padding: 0, marginBottom: '4rem' }}
              variants={listVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.li variants={itemVariants}>
                <StyledAnchor href="https://www.linkedin.com/in/arin-pantja/" target="_blank" rel="noopener noreferrer">
                  <span className="link-text">Linkedin</span>
                  <span className="link-image">
                    <img src="/assets/doodles/linkedinA.gif" alt="icon" style={{width: '36px', height: '36px'}} loading="lazy" />
                  </span>
                </StyledAnchor>
              </motion.li>
              <motion.li variants={itemVariants}>
                <StyledAnchor href="mailto:arinpantja@gmail.com">
                  <span className="link-text">Email</span>
                  <span className="link-image">
                    <img src="/assets/doodles/emailA.gif" alt="icon" style={{width: '36px', height: '36px'}} loading="lazy" />
                  </span>
                </StyledAnchor>
              </motion.li>
              <motion.li variants={itemVariants}>
                <StyledAnchor href="https://x.com/arin_pantja" target="_blank" rel="noopener noreferrer">
                  <span className="link-text">Twitter/X</span>
                  <span className="link-image">
                    <img src="/assets/doodles/x.gif" alt="icon" style={{width: '36px', height: '36px'}} loading="lazy" />
                  </span>
                </StyledAnchor>
              </motion.li>
              <motion.li variants={itemVariants}>
                <StyledAnchor href="https://www.are.na/arin-p/channels" target="_blank" rel="noopener noreferrer">
                  <span className="link-text">Are.na</span>
                  <span className="link-image">
                    <img src="/assets/doodles/arena.gif" alt="icon" style={{width: '36px', height: '36px'}} loading="lazy" />
                  </span>
                </StyledAnchor>
              </motion.li>
            </motion.ul>
          </div>
        {/* </motion.ul> */}

        {/* Draggable lined paper at the very bottom of the sidebar */}
        {/* <HidePaperOnMobile>
          <div style={{ position: 'relative', width: '100%', minHeight: '360px', marginTop: '2rem' }}>
            <DraggablePaperPad imgSrc="/assets/doodles/connectTheDot01.png" />
          </div>
        </HidePaperOnMobile> */}
      </SidebarContainer>
    </>
  );
};

export default Sidebar; 