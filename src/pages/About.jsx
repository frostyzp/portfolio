import styled from '@emotion/styled';
import usePageTitle from '../hooks/usePageTitle';
import { Link } from 'react-router-dom';
import FadeInWhenVisible from '../components/FadeInWhenVisible';
import DraggablePaperPad from '../components/DraggablePaperPad';
import Footer from '../components/Footer';

const AboutDiv = styled.div`
  max-width: 100%;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2rem;
`;

const GridIllustration = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
`;

const ProfileImage = styled.img`
  display: block;
  width: 100%;
  max-width: 400px;
  @media (max-width: 900px) {
    max-width: 100%;
  }
  height: auto;
  margin-bottom: 1rem;
  align-items: center;
`;

const ItemRow = styled.div`
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  width: 100%;
  transition: all 0.2s ease-in-out;
  padding: 0.4rem 0;

  &:hover {
    transform: translateX(6px);
    border-radius: 4px;
    opacity: 0.7;
    cursor: pointer;
  }
`;

const ItemLeft = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  white-space: nowrap;
`;

const ItemTitle = styled.span`
  color: black;
`;

const ItemDesc = styled.span`
  color: #888;
`;

const ItemDivider = styled.div`
  flex: 1;
  margin: 0 1rem;
  border-bottom: 3px dotted #666;
  opacity: 0.3;
`;

const ItemYear = styled.div`
  white-space: nowrap;
  color: #888;
`;

const HideOnMobile = styled.div`
  @media (max-width: 900px) {
    display: none !important;
  }
`;

const About = () => {
  usePageTitle('About - Arin P.');

  return (
    <div className="content">
      <FadeInWhenVisible>
        <section className="section-text">
          {/* <AboutDiv> */}
            <HideOnMobile>
              <DraggablePaperPad 
                imgSrc="/assets/doodles/connectTheDot01.png" 
                style={{ left: '3rem', top: '22rem'}} 
              />
            </HideOnMobile>
            <div>
              <ProfileImage 
                src="/assets/about/profile.png"
                alt="Arin's profile"
                loading="lazy"
              />
            </div>
            <HideOnMobile>
              {/* <DraggablePaperPad 
                imgSrc="/assets/doodles/connectTheDot02.png" 
                style={{ top: '75vh' }}
              /> */}
            </HideOnMobile>
          {/* </AboutDiv> */}
        </section>
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <section className="section">
          <div className="section-text">
            <p className="supportingText">ABOUT</p>
            <p>
              Arin explores technologically mediated experiences and tools through interfaces and creative technologies, grounded in curiosity, speculation, and critical inquiry. He believes in empowering communities, bridging connections, and building tools that are accessible to everyone.
              <br /><br />
            </p>
            <p className="supportingText">CURRENTLY</p>
            <p>
              Watching movies, jamming to 2010s music, taking film photos, and making matcha!
            </p>
          </div>
        </section>
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <section className="section">
          <hr className="divider" />
          <div className="section-text">
            <p className="supportingText">Experience</p>

            <ItemRow className="distort-hover">
              <ItemLeft>
                <ItemTitle><a href="" target="_blank" rel="noopener noreferrer">Kura Kura</a></ItemTitle>
                <ItemDesc>Product Lead + Designer</ItemDesc>
              </ItemLeft>
              <ItemDivider />
              <ItemYear>Present</ItemYear>
            </ItemRow>

            <ItemRow className="distort-hover">
              <ItemLeft>
                <ItemTitle><a href="https://open.gov.sg" target="_blank" rel="noopener noreferrer">Open Government Products</a></ItemTitle>
                <ItemDesc>Product Designer</ItemDesc>
              </ItemLeft>
              <ItemDivider />
              <ItemYear>2024</ItemYear>
            </ItemRow>

            <ItemRow className="distort-hover">
              <ItemLeft>
                <ItemTitle><a href="https://www.designbridge.com/" target="_blank" rel="noopener noreferrer">Design Bridge & Partners</a></ItemTitle>
                <ItemDesc>Motion Designer</ItemDesc>
              </ItemLeft>
              <ItemDivider />
              <ItemYear>2023</ItemYear>
            </ItemRow>

            <ItemRow className="distort-hover">
              <ItemLeft>
                <ItemTitle><a href="https://www.grab.com/sg/grab-financial-group/" target="_blank" rel="noopener noreferrer">Grab Financial Group</a></ItemTitle>
                <ItemDesc>Product Designer</ItemDesc>
              </ItemLeft>
              <ItemDivider />
              <ItemYear>2022</ItemYear>
            </ItemRow>
          </div>
        </section>
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <section className="section">
          <hr className="divider" />
          <div className="section-text">
            <p className="supportingText">Education + Awards</p>
            
            <ItemRow className="distort-hover">
              <ItemLeft>
                <ItemTitle><a href="https://www.sota.edu.sg/about-sota/awards/merit-awards" target="_blank" rel="noopener noreferrer">Merit Award</a></ItemTitle>
                <ItemDesc>School of Art</ItemDesc>
              </ItemLeft>
              <ItemDivider />
              <ItemYear>2023, 2024</ItemYear>
            </ItemRow>

            <ItemRow className="distort-hover">
              <ItemLeft>
                <ItemTitle><a href="https://www.cmu.edu/" target="_blank" rel="noopener noreferrer">Carnegie Mellon University</a></ItemTitle>
                <ItemDesc>Fine Arts + HCI</ItemDesc>
              </ItemLeft>
              <ItemDivider />
              <ItemYear>2025</ItemYear>
            </ItemRow>
          </div>
        </section>
      </FadeInWhenVisible>

      <Footer />
    </div>
  );
};

export default About; 