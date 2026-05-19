import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { css, keyframes, Global } from '@emotion/react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

/* ─────────────────────────────────────────────────────────
 * MOBILE MENU STORYBOARD
 *
 *    0ms   menu closed — kaomoji + hamburger stay visible in bar
 *  350ms   white sheet scales down from top (under bar)
 *  500ms   nav links stagger in (100ms apart)
 * ───────────────────────────────────────────────────────── */

const MOBILE_BAR_HEIGHT = '3.25rem';

const TIMING = {
  sheet: 0.35,
  linkStagger: 0.1,
  linkDelay: 0.22,
};

const sheetVariants = {
  closed: { scaleY: 0 },
  open: {
    scaleY: 1,
    transition: { duration: TIMING.sheet, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    scaleY: 0,
    transition: { duration: 0.28, ease: [0.4, 0, 0.2, 1] },
  },
};

const listVariants = {
  closed: {},
  open: {
    transition: {
      staggerChildren: TIMING.linkStagger,
      delayChildren: TIMING.linkDelay,
    },
  },
};

const itemVariants = {
  closed: { opacity: 0, y: 14 },
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: 8,
    transition: { duration: 0.15 },
  },
};

const NAV_ITEMS = [
  {
    label: 'Interaction Design',
    to: '/',
    paths: ['/', '/roster-monster', '/kura-kura', '/ogp-illustration-guidelines', '/byos'],
  },
  {
    label: 'Creative Tech',
    to: '/web-experiments',
    paths: ['/web-experiments'],
  },
  {
    label: 'Info',
    to: '/about',
    paths: ['/about'],
  },
];

const KAOMOJI_NORMAL = `( ദ്ദി ˙ᗜ˙ )' \\\\ ←`;
const KAOMOJI_ALT = '(‧̣̥̇꒪ᗜ꒪)=͟͟͞͞';
const SCREAM_TEXT = '!@$#%@!!!$!%#@#^!!!#&#@*!! ';

const glowAnimation = keyframes`
  0% { text-shadow: 0 0 3px rgba(237, 74, 255, 0.15); }
  50% { text-shadow: 0 0 10px rgba(255, 180, 240, 0.45); }
  100% { text-shadow: 0 0 3px rgba(237, 74, 255, 0.2); }
`;

const shakeAnimation = keyframes`
  0%, 100% { transform: translate(0, 0); }
  25% { transform: translate(-2px, 1px); }
  50% { transform: translate(2px, -1px); }
  75% { transform: translate(-2px, 1px); }
`;

const waveKeyframes = css`
  @keyframes wave {
    0%, 100% { transform: translateY(0); }
    20% { transform: translateY(-4px); }
    40% { transform: translateY(4px); }
    60% { transform: translateY(-4px); }
    80% { transform: translateY(4px); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

const waveTextStyles = css`
  .wave-text {
    font-family: 'CommitMono', monospace;
    font-size: 0.95em;
    color: rgb(238, 176, 204);
    text-shadow: 0 0 8px rgba(255, 180, 240, 0.5);
    white-space: nowrap;
    display: inline-block;
  }
  .wave-char {
    display: inline-block;
    opacity: 0;
    animation: wave 1.5s infinite, fadeIn 0.4s forwards;
  }
`;

function WaveText({ text }) {
  return (
    <span className="wave-text">
      {text.split('').map((char, i) => (
        <span
          className="wave-char"
          key={`${char}-${i}`}
          style={{ animationDelay: `${i * 0.06}s, ${i * 0.06}s` }}
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
  color: black;
  transition: color 0.25s ease, transform 0.25s ease;
  position: relative;

  &:hover,
  &:focus-visible {
    transform: scale(1.06);
    animation: ${glowAnimation} 2s infinite, ${shakeAnimation} 0.8s infinite;
    color: rgb(238, 176, 204);
  }
`;

const KaomojiWrap = styled.div`
  position: relative;
  display: inline-block;

  &.bar-kaomoji {
    z-index: 2;
  }
`;

const screamVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] } },
};

const ScreamTextWrap = styled(motion.span)`
  position: absolute;
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 0.35rem;
  white-space: nowrap;
  pointer-events: none;
  z-index: 10;
`;

function KaomojiNav({ onClick, className }) {
  const [hovered, setHovered] = useState(false);

  return (
    <KaomojiWrap
      className={className}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
    >
      <Global styles={waveTextStyles} />
      <Global styles={waveKeyframes} />
      <KaomojiLink to="/" onClick={onClick}>
        <span style={{ opacity: hovered ? 0 : 1, transition: 'opacity 0.1s' }}>{KAOMOJI_NORMAL}</span>
        <span
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            opacity: hovered ? 1 : 0,
            transition: 'opacity 0.1s',
            pointerEvents: 'none',
            width: '100%',
            textAlign: 'left',
          }}
        >
          {KAOMOJI_ALT}
        </span>
      </KaomojiLink>
      <AnimatePresence>
        {hovered && (
          <ScreamTextWrap
            key="kaomoji-scream"
            variants={screamVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <WaveText text={SCREAM_TEXT} />
          </ScreamTextWrap>
        )}
      </AnimatePresence>
    </KaomojiWrap>
  );
}

const MobileNavContainer = styled.nav`
  position: relative;
  z-index: 200;
`;

const DesktopNav = styled.div`
  display: block;
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin-bottom: 0.5rem;

  @media (max-width: 900px) {
    display: none;
  }
`;

const MobileBar = styled.div`
  display: none;

  @media (max-width: 900px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 350;
    min-height: ${MOBILE_BAR_HEIGHT};
    padding: 1rem clamp(1rem, 5vw, 2rem);
    background: var(--background-color);
  }
`;

const MenuButton = styled.button`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: 5px;
  width: 2rem;
  height: 2rem;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
`;

const MenuLine = styled(motion.span)`
  display: block;
  width: 14px;
  height: 1.5px;
  background: black;
  border-radius: 1px;
  transform-origin: center;
`;

const MenuSheet = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 300;
  background: var(--background-color);
  transform-origin: top center;
  overflow: hidden;
`;

const MenuSheetInner = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  padding-top: calc(${MOBILE_BAR_HEIGHT} + 3rem);
  padding-left: clamp(1rem, 5vw, 2rem);
  padding-right: clamp(1rem, 5vw, 2rem);
  padding-bottom: clamp(1.25rem, 5vw, 2rem);
`;

const MenuList = styled(motion.ul)`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: clamp(1rem, 0vh, 0.75rem);
`;

const NavRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  gap: 0.8rem;
`;

const NavGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const NavRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

const navLinkStyles = css`
  text-decoration: none;
  color: ${(props) => (props.isActive ? 'black' : '#888')};
  font-weight: ${(props) => (props.isActive ? '500' : '400')};
  transition: color 0.2s ease;
  display: inline-block;
  position: relative;

  &:hover {
    color: black;
  }

  .link-text {
    transition: filter 0.2s ease;
  }

  &:hover .link-text {
    filter: url(#distort-nav);
  }

  .link-image {
    position: absolute;
    right: -28px;
    top: 50%;
    transform: translateY(-50%) translateX(-10px) rotate(-1deg);
    opacity: 0;
    transition: opacity 0.3s, transform 0.3s;
    pointer-events: none;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover .link-image {
    opacity: 1;
    transform: translateY(-50%) translateX(0) rotate(16deg);
  }
`;

const NavLink = styled(Link)`
  ${navLinkStyles}
  font-size: 0.9rem;
`;

const MenuLink = styled(Link)`
  ${navLinkStyles}
  font-size: clamp(1.25rem, 5vw, 1.5rem);
`;

const HAMBURGER_SPRING = { type: 'spring', stiffness: 380, damping: 28 };

function HamburgerIcon({ open }) {
  return (
    <>
      <MenuLine
        animate={open ? { y: 6.5, rotate: 45 } : { y: 0, rotate: 0 }}
        transition={HAMBURGER_SPRING}
      />
      <MenuLine
        animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.15, ease: 'easeInOut' }}
      />
      <MenuLine
        animate={open ? { y: -6.5, rotate: -45 } : { y: 0, rotate: 0 }}
        transition={HAMBURGER_SPRING}
      />
    </>
  );
}

const DistortFilter = () => (
  <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden>
    <defs>
      <filter id="distort-nav">
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
);

const MobileNavigation = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActivePage = (paths) =>
    paths.some((path) =>
      path === '/'
        ? location.pathname === '/'
        : location.pathname === path || location.pathname.startsWith(path)
    );

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') closeMenu();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <MobileNavContainer>
      <DistortFilter />

      {/* Desktop: inline nav */}
      <DesktopNav>
        <NavRow>
          <div>
            <KaomojiNav />
          </div>
          <NavRight>
            <NavGroup>
              {NAV_ITEMS.slice(0, 2).map((item) => (
                <NavLink key={item.to} to={item.to} isActive={isActivePage(item.paths)}>
                  <span className="link-text">{item.label}</span>
                  <span className="link-image">
                    <img src="/assets/doodles/arrowA.gif" alt="" style={{ width: '24px', height: '24px' }} loading="lazy" />
                  </span>
                </NavLink>
              ))}
            </NavGroup>
            <NavLink to={NAV_ITEMS[2].to} isActive={isActivePage(NAV_ITEMS[2].paths)}>
              <span className="link-text">{NAV_ITEMS[2].label}</span>
              <span className="link-image">
                <img src="/assets/doodles/arrowA.gif" alt="" style={{ width: '24px', height: '24px' }} loading="lazy" />
              </span>
            </NavLink>
          </NavRight>
        </NavRow>
      </DesktopNav>

      {/* Mobile: fixed bar + full-screen menu */}
      <MobileBar>
        <KaomojiNav onClick={closeMenu} className="bar-kaomoji" />
        <MenuButton
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <HamburgerIcon open={menuOpen} />
        </MenuButton>
      </MobileBar>

      <AnimatePresence>
        {menuOpen && (
          <MenuSheet
            key="mobile-menu-sheet"
            variants={sheetVariants}
            initial="closed"
            animate="open"
            exit="exit"
          >
            <MenuSheetInner>
              <MenuList variants={listVariants} initial="closed" animate="open" exit="closed">
                {NAV_ITEMS.map((item) => (
                  <motion.li key={item.to} variants={itemVariants}>
                    <MenuLink
                      to={item.to}
                      isActive={isActivePage(item.paths)}
                      onClick={closeMenu}
                    >
                      <span className="link-text">{item.label}</span>
                      <span className="link-image">
                        <img src="/assets/doodles/arrowA.gif" alt="" style={{ width: '24px', height: '24px' }} loading="lazy" />
                      </span>
                    </MenuLink>
                  </motion.li>
                ))}
              </MenuList>
            </MenuSheetInner>
          </MenuSheet>
        )}
      </AnimatePresence>
    </MobileNavContainer>
  );
};

export default MobileNavigation;
