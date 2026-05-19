import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

const MediaScroller = styled.div`
  position: relative;
  display: flex;
  gap: 0.8rem;
  overflow-x: auto;
  cursor: ${(p) => (p.$noHover ? 'default' : 'pointer')};
  width: 100vw;
  margin-left: calc(50% - 50vw);
  padding-left: clamp(1.5rem, 14vw, 14rem);
  padding-right: clamp(1.5rem, 14vw, 14rem);
  box-sizing: border-box;
  scroll-padding-left: clamp(1.5rem, 14vw, 14rem);
  scroll-padding-right: clamp(1.5rem, 14vw, 14rem);

  padding-bottom: 1rem; // for scrollbar
  -ms-overflow-style: none; // IE and Edge
  scrollbar-width: none; // Firefox
  &::-webkit-scrollbar {
    display: none; // Chrome, Safari, Opera
  }

  @media (max-width: 900px) {
    padding-left: clamp(1rem, 5vw, 2rem);
    padding-right: clamp(1rem, 5vw, 2rem);
    scroll-padding-left: clamp(1rem, 5vw, 2rem);
    scroll-padding-right: clamp(1rem, 5vw, 2rem);
  }

  /* Media fills fixed-size card to keep row heights consistent */
  img, video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
    cursor: ${(p) => (p.$noHover ? 'default' : 'pointer')};
  }
`;

const TitleWithDoodle = styled.span`
  position: relative;
  display: inline-block;
`;

const caseStudyRowBase = css`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  width: 100%;
  margin-bottom: 1rem;
  text-decoration: none;
`;

const caseStudyRowHover = css`
  cursor: pointer;

  .case-study-title {
    transition: color 180ms ease, filter 180ms ease, transform 180ms ease;
  }

  .case-study-title-row {
    transition: transform 0.2s ease;
  }

  &:hover .case-study-title-row {
    transform: translateX(5px);
  }

  &:hover .link-text {
    filter: url(#distort-nav);
    color: rgb(27, 27, 27);
  }

  .link-image {
    position: absolute;
    right: -36px;
    top: 50%;
    transform: translateY(-50%) translateX(-10px) rotate(-1deg);
    opacity: 0;
    transition: opacity 0.3s, transform 0.3s;
    pointer-events: none;
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
  }

  &:hover .link-image {
    opacity: 1;
    transform: translateY(-50%) translateX(0) rotate(16deg);
  }
`;

const CaseStudyRowContainer = styled(Link)`
  ${caseStudyRowBase}
  ${caseStudyRowHover}
`;

const CaseStudyRowStatic = styled.div`
  ${caseStudyRowBase}
  cursor: default;
`;

const CaseStudyCell = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-bottom: 0.25rem;
`;

const MediaCard = styled.div`
  flex: 0 0 ${(p) => (p.$single ? '100%' : 'min(560px, 72vw)')};
  width: ${(p) => (p.$single ? '100%' : 'min(560px, 72vw)')};
  height: clamp(220px, 34vw, 380px);
  border-radius: 8px;
  border: 1px solid var(--border-color);
  overflow: hidden;
  background: #f3f3f3;
  cursor: ${(p) => (p.$noHover ? 'default' : 'pointer')};

  @media (max-width: 900px) {
    flex: 0 0 ${(p) => (p.$single ? '100%' : '84vw')} !important;
    width: ${(p) => (p.$single ? '100%' : '84vw')} !important;
    height: clamp(180px, 56vw, 360px);
    border: none !important;
  }
`;

function ResponsiveCaseStudyRow({ to, title, description, media, year, actionText, noLink }) {
  const single = media.length === 1;
  const RowContainer = noLink ? CaseStudyRowStatic : CaseStudyRowContainer;

  const MediaItems = () => (
    <MediaScroller $single={single} $noHover={noLink}>
      {media.map((item, index) => (
        <MediaCard key={index} $single={single} $noHover={noLink}>
          {item.type === 'video' ? (
            <video src={item.src} autoPlay loop muted playsInline preload="none" />
          ) : (
            <img src={item.src} alt={`${title} media ${index + 1}`} loading="lazy" />
          )}
        </MediaCard>
      ))}
    </MediaScroller>
  );

  return (
    <RowContainer {...(noLink ? {} : { to })}>
      <CaseStudyCell>
        <div className="case-study-title-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <p style={{ margin: 0 }}>
            {noLink ? (
              <span className="case-study-title" style={{ color: 'black' }}>{title}</span>
            ) : (
              <TitleWithDoodle>
                <span className="link-text case-study-title" style={{ color: 'black' }}>{title}</span>
                <span className="link-image">
                  <img src="/assets/doodles/arrowA.gif" alt="" style={{ width: '36px', height: '36px' }} loading="lazy" />
                </span>
              </TitleWithDoodle>
            )}
          </p>
          {year && <p className="case-study-title" style={{ margin: 0, color: '#888' }}>{year}</p>}
        </div>
        <p className="case-study-desc" style={{ fontSize: '1rem', marginTop: '0.5rem', flexGrow: 1, color: 'var(--text-color)' }}>{description}</p>
        {actionText && <p style={{ margin: 0, textAlign: 'right' }}>{actionText} →</p>}
      </CaseStudyCell>
      <MediaItems />
    </RowContainer>
  );
}

export default ResponsiveCaseStudyRow; 