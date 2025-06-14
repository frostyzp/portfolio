import { Link } from 'react-router-dom';
import FadeInWhenVisible from '../components/FadeInWhenVisible';
import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import { Content } from './Home';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import ResponsiveCaseStudyRow from '../components/ResponsiveCaseStudyRow';

const canAnimateRows = true;
          
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 900);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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
    type: 'img',
    src: '/assets/creative/graveyard.gif',
    to: '',
    key: 'graveyard2',
    labelLeft: 'GRAVEYARD OF THE UNANSWERED',
    labelRight: 'UNITY, 2023',
  },
  {
    type: 'img',
    src: '/assets/creative/ai_dinner.gif',
    to: '',
    key: 'ai_dinner', 
    labelLeft: 'AI DINNER CONVERSATIONS',
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
    type: 'img',
    src: '/assets/creative/glitch-font.gif',
    to: '',
    key: 'glitch_font',
    labelLeft: 'VARIABLE FONT',
    labelRight: 'GLPYHS, 2024',
  },
  {
    type: 'video',
    src: '/assets/creative/typing_2.mov',
    to: '',
    key: 'typing',
    labelLeft: 'FONT WEAVING EXPERIMENTS',
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

  const WebExperiments = () => {
  const isMobile = useIsMobile();
  const columns = isMobile ? 1 : 2;
  const total = gridItems.length;

  return (
    <Content>
      {[
        {
          to: "",
          title: "wandering wondering",
          description: "Rocks as interfaces to dreaming through site specific web(sites)",
          mediaType: "video",
          mediaSrc: "/assets/creative/capstone_cs.mp4"
        },
        {
          to: "",
          title: "Haiku Chatroom",
          description: "A collaborative, generative chatroom and poem generator with people",
          mediaType: "video",
          mediaSrc: "/assets/creative/haiku_chatroom.mp4"
        }
      ].map((props, idx) => (
        <FadeInWhenVisible key={props.to} delay={0.08 * idx}>
          <ResponsiveCaseStudyRow {...props} />
        </FadeInWhenVisible>
      ))}

      <MasonryGrid columns={columns}>
        {gridItems.map((item, idx) => (
          <MasonryItem key={item.key}>
            <FadeInWhenVisible delay={0.08 * (total - 1 - idx)}>
              <InteractiveLink to={item.to} style={{display: 'block'}}>
                <ImageText>
                  {item.type === 'video' ? (
                    <video src={item.src} autoPlay loop muted playsInline />
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