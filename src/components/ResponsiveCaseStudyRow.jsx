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

const MediaScroller = styled.div`
  position: relative;
  display: flex;
  gap: 0.8rem;
  overflow-x: auto;
  cursor: default !important;

  padding-bottom: 1rem; // for scrollbar
  -ms-overflow-style: none; // IE and Edge
  scrollbar-width: none; // Firefox
  &::-webkit-scrollbar {
    display: none; // Chrome, Safari, Opera
  }

  img, video {
    flex: 0 0 80%;
    width: 80%;
    // height: auto; /* Let videos maintain aspect ratio */
    
    @media (max-width: 900px) {
      flex: 0 0 90% !important;
      width: 90% !important;
      height: auto !important;
      object-fit: contain !important;
      border: none !important;
      margin-top: 0 !important;
      margin-bottom: 0 !important;
      align-self: flex-start !important;
      vertical-align: top !important;
      cursor: default !important;

    }
  }
`;

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
    border-radius: 4px;
    border: 1px solid var(--border-color);
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr !important;
    grid-template-rows: auto auto;
    
    img, video {
      height: 100%;
      object-fit: contain;
    }
  }
`;

const CaseStudyCell = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

function ResponsiveCaseStudyRow({ to, title, description, media, year, actionText }) {
  const isMobile = useIsMobile();
  
  const MediaItems = () => (
    <MediaScroller>
      {media.map((item, index) => (
        item.type === 'video' ? (
          <video key={index} src={item.src} autoPlay loop muted playsInline />
        ) : (
          <img key={index} src={item.src} alt={`${title} media ${index + 1}`} />
        )
      ))}
    </MediaScroller>
  );

  return (
    <CaseStudyRowContainer to={to}>
      {isMobile ? (
        <>
          {/* Text first */}
          <CaseStudyCell>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <p className="case-study-title" style={{ margin: 0 }}>{title}</p>
              {year && <p className="case-study-title" style={{ margin: 0, color: '#888' }}>{year}</p>}
            </div>
            <p className="case-study-desc" style={{ fontSize: '1rem', marginTop: '0.5rem', flexGrow: 1 }}>{description}</p>
            {actionText && <p style={{ margin: 0, textAlign: 'right' }}>{actionText} →</p>}
          </CaseStudyCell>
          {/* Media below */}
          <MediaItems />
        </>
      ) : (
        <>
          {/* Text left, media right (desktop) */}
          <CaseStudyCell>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <p className="case-study-title" style={{ margin: 0, color: "black"}}>{title}</p>
              {year && <p className="case-study-title" style={{ margin: 0, color: '#888' }}>{year}</p>}
            </div>
            <p className="case-study-desc" style={{ fontSize: '1rem', marginTop: '0.5rem', flexGrow: 1, color: "var(--text-color)" }}>{description}</p>
            {actionText && <p style={{ margin: 0, textAlign: 'right' }}>{actionText} →</p>}
          </CaseStudyCell>
          <MediaItems />
        </>
      )}
    </CaseStudyRowContainer>
  );
}

export default ResponsiveCaseStudyRow; 