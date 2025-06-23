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
    labelLeft: 'Night of kang lim',
    labelRight: 'Bitsy, 2024',
  },
  {
    type: 'video',
    src: '/assets/creative/lg_archive.mp4',
    to: '',
    key: 'graveyard',
    labelLeft: 'Materiality of paper',
    labelRight: 'Website, 2025',
  },
  {
    type: 'img',
    src: '/assets/creative/graveyard.gif',
    to: '',
    key: 'graveyard2',
    labelLeft: 'Graveyard of the unanswered',
    labelRight: 'Unity, 2023',
  },
  {
    type: 'img',
    src: '/assets/creative/ai_dinner.gif',
    to: '',
    key: 'ai_dinner', 
    labelLeft: 'AI dinner conversations',
    labelRight: 'Unity, 2023',
  },
  {
    type: 'img',
    src: '/assets/creative/stroll_basin.gif',
    to: '',
    key: 'oracle',
    labelLeft: 'Stroll on basin street',
    labelRight: 'Unity, 2023',
  },
  {
    type: 'img',
    src: '/assets/creative/glitch-font.gif',
    to: '',
    key: 'glitch_font',
    labelLeft: 'Variable font',
    labelRight: 'Glpyhs, 2024',
  },
  {
    type: 'video',
    src: '/assets/creative/typing_2.mov',
    to: '',
    key: 'typing',
    labelLeft: 'Font weaving experiments',
    labelRight: 'Glpyhs, 2024',
  }
];

const LabelRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.2rem;
  font-size: 0.9rem;
  width: 100%;
`;

const LabelLeft = styled.span`
  text-align: left;
  // font-family: 'CommitMono', monospace;
  color: #888;
`;

const LabelRight = styled.span`
  text-align: right;
  // font-family: 'CommitMono', monospace;
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
          title: "wandering, wondering",
          description: "This project explores and re-interprets our intimate relationships to the material world of rocks – skipping stones, tombstones, oracles, and campfires – as interfaces to various facets of dreaming through site-specific web(sites). People are invited to discover hyperlinks to site specific websites embedded within rocks. ",
          media: [
            { type: "video", src: "/assets/creative/capstone_cs.mp4" },
            { type: "img", src: "/assets/creative/campfire_closeup2.png" },
            { type: "img", src: "/assets/creative/hold.png" },
            { type: "video", src: "/assets/creative/tap.mov" },
            { type: "video", src: "/assets/creative/tap2.mov" },
            { type: "video", src: "/assets/creative/tap3.mov" }

          ],
          // year: "Website, Site-specific,2025",
        },
        {
          to: "",
          title: "Haiku Chatroom", 
          description: "A collaborative, generative chatroom and poem generator with people. The Haiku Chatroom book is an extension of this project, a curated and compiled list of haikus that emerged from each friend I chatted with based in the U.S. and Singapore, through haiku chatroom—a web-based project I created that allows you to chat in the syllable constraints and forms of an haiku.",
          media: [
            { type: "video", src: "/assets/creative/haiku_full.mp4" },
            { type: "img", src: "/assets/creative/haiku_1.png" },
            { type: "img", src: "/assets/creative/haiku_2.png" },
            { type: "img", src: "/assets/creative/haiku_3.png" },

          ],
          // year: "Website, Print, 2024",
        },
        {
          to: "",
          title: "Pha Lai Nam Lhai", 
          description: "Nam Lhai is a traditional Thai weaving technique that creates flowing patterns reminiscent of water streams, inspired by the Nan rivers of the Chao Phraya River. I re-imagined the keyboard as a loom – where the website allows people to ‘weave’ patterns through their keyboard by laying down the colored fabric and adding patterns on top through specific keys. ",
          media: [
            { type: "video", src: "/assets/creative/nam_lhai/nam_lhai_final.mp4" },
            // { type: "img", src: "/assets/creative/nam_lhai/pha_lai.png" },
            { type: "img", src: "/assets/creative/nam_lhai/weaving_example.png" },
          ],
          // year: "Website, 2024",
        }
      ].map((props, idx) => (
        <FadeInWhenVisible key={props.to} delay={0.08 * idx}>
          <ResponsiveCaseStudyRow {...props} style={{ cursor: 'not-allowed' }} />
        </FadeInWhenVisible>
      ))}

      <MasonryGrid columns={columns}>
        {gridItems.map((item, idx) => (
          <MasonryItem key={item.key}>
            <FadeInWhenVisible delay={0.08 * (total - 1 - idx)}>
              <InteractiveLink to={item.to} style={{display: 'block'}}>
                {isMobile && (
                  <LabelRow>
                    <LabelLeft>{item.labelLeft}</LabelLeft>
                    <LabelRight>{item.labelRight}</LabelRight>
                  </LabelRow>
                )}
                <ImageText>
                  {item.type === 'video' ? (
                    <video src={item.src} autoPlay loop muted playsInline preload="none" />
                  ) : (
                    <img src={item.src} alt={item.key} loading="lazy" />
                  )}
                </ImageText>
                {!isMobile && (
                  <LabelRow>
                    <LabelLeft>{item.labelLeft}</LabelLeft>
                    <LabelRight>{item.labelRight}</LabelRight>
                  </LabelRow>
                )}
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