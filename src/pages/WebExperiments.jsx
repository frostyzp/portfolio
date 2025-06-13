import { Link } from 'react-router-dom';
import FadeInWhenVisible from '../components/FadeInWhenVisible';
import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import { Content } from './Home';
import Footer from '../components/Footer';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(window.innerWidth <= 900);
  }, []);
  return isMobile;
};
const MasonryGrid = styled.div`
  column-count: ${props => props.columns || 2};
  column-gap: 1.2rem;
  width: 100%;
  @media (max-width: 900px) {
    column-count: 1;
  }
`;

const MasonryItem = styled.div`
  break-inside: avoid;
  margin-bottom: 1.2rem;
`;

const InteractiveLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const ImageText = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  img, video {
    border-radius: 4px;
    width: 100%;
    display: block;
  }
`;

const TextRow = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%; 
`;

const gridItems = [
  {
    type: 'img',
    src: '/assets/creative/bitsy.gif',
    to: '',
    key: 'tcsc',
    labelLeft: 'NIGHT OF KANG LIM',
    labelRight: 'BITSY, 2024',
  },
  {
    type: 'video',
    src: '/assets/creative/lg_archive.mp4',
    to: '',
    key: 'graveyard',
    labelLeft: 'MATERIALITY OF PAPER',
    labelRight: 'WEB, 2025',
  },
  {
    type: 'video',
    src: '/assets/creative/haiku_trim_2.mp4',
    to: '',
    key: 'skipping',
    labelLeft: 'HAIKU CHATROOM',
    labelRight: 'WEB, PRINT, 2023',
  },
  {
    type: 'image',
    src: '/assets/creative/graveyard.gif',
    to: '',
    key: 'cuddly',
    labelLeft: 'GRAVEYARD OF THE UNANSWERED',
    labelRight: 'UNITY, 2023',
  },
  {
    type: 'img',
    src: '/assets/creative/ai_dinner.gif',
    to: '',
    key: 'ai_dinner',
    labelLeft: 'AI DINNER',
    labelRight: 'UNITY,2023',
  },
  {
    type: 'img',
    src: '/assets/creative/stroll_basin.gif',
    to: '',
    key: 'oracle',
    labelLeft: 'STROLL ON BASIN STREET',
    labelRight: 'UNITY, 2023',
  },
  {
    type: 'image',
    src: '/assets/creative/glitch-font.gif',
    to: '',
    key: 'cuddly',
    labelLeft: 'VARIABLE FONT',
    labelRight: 'GLPYHS, 2024',
  }
];

const LabelRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.2rem;
  font-size: 0.8rem;
  width: 100%;
`;

const LabelLeft = styled.span`
  text-align: left;
  font-family: 'CommitMono', monospace;
  color: black;
`;

const LabelRight = styled.span`
  text-align: right;
  font-family: 'CommitMono', monospace;
  color: #888;
`;

const WebExperiments = () => {
  const isMobile = useIsMobile();
  const columns = isMobile ? 1 : 2;
  const total = gridItems.length;

  return (
    <Content>
      <MasonryGrid columns={columns}>
        {gridItems.map((item, idx) => (
          <MasonryItem key={item.key}>
            <FadeInWhenVisible delay={0.08 * (total - 1 - idx)}>
              <InteractiveLink to={item.to} style={{display: 'block'}}>
                <ImageText to={item.to}>
                  {item.type === 'video' ? (
                    <video src={item.src} autoPlay loop muted />
                  ) : (
                    <img src={item.src} alt={item.key} />
                  )}
                </ImageText>
                <LabelRow>
                  <LabelLeft>{item.labelLeft}</LabelLeft>
                  <LabelRight>{item.labelRight}</LabelRight>
                </LabelRow>
              </InteractiveLink>
            </FadeInWhenVisible>
          </MasonryItem>
        ))}
      </MasonryGrid>
      <Footer />
    </Content>
  );
};

export default WebExperiments;