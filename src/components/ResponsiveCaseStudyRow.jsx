import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import React from 'react';

// Standalone useIsMobile hook
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

// Styled components
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

export default ResponsiveCaseStudyRow; 