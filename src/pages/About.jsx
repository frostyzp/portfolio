import styled from '@emotion/styled';
import usePageTitle from '../hooks/usePageTitle';
import { Link } from 'react-router-dom';
import FadeInWhenVisible from '../components/FadeInWhenVisible';
import DraggablePaperPad from '../components/DraggablePaperPad';

const AboutDiv = styled.div`
  // max-width: 800px;
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
    max-width: 80vw;
  }
  height: auto;
  margin-bottom: 1rem;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
`;

const ItemRow = styled.div`
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  width: 100%;
  // margin-top: 1rem;
  transition: all 0.2s ease-in-out;
  padding: 0.4rem 0;

  &:hover {
    transform: translateX(6px);
    // background: #ececec;
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
  color: #666;
`;

const ItemDivider = styled.div`
  flex: 1;
  margin: 0 1rem;
  border-bottom: 3px dotted #666;
  opacity: 0.3;
`;

const ItemYear = styled.div`
  white-space: nowrap;
  color: #666;
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
     <Link to="/" className="sticky-back-btn" aria-label="Back to home">
       ← Back
     </Link>

      <FadeInWhenVisible>
      <AboutDiv>
        <HideOnMobile>
          {/* <DraggablePaperPad imgSrc="/assets/doodles/connectTheDot01.png" /> */}
        </HideOnMobile>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
          <ProfileImage 
            src="/assets/about/profile.png"
            alt="Arin's profile"
            loading="lazy"
          />
        </div>
        <HideOnMobile>
          <DraggablePaperPad imgSrc="/assets/doodles/connectTheDot02.png" />
        </HideOnMobile>
      </AboutDiv>
      </FadeInWhenVisible>


      <FadeInWhenVisible> 
      <p className="supportingText">
            ABOUT 
          </p>
        <p>
        Arin explores technologically mediated experiences and tools through interfaces and creative technologies, grounded in curiosity, speculation, and critical inquiry. He believes in empowering communities, bridging connections, and building tools that are accessible to everyone.
        <br/><br/>
        </p>
          <p className="supportingText">
            CURRENTLY 
          </p>
          <p>
            Watching movies, jamming to 2010s music, taking film photos, and making matcha! 
          </p>
      </FadeInWhenVisible>
     

      <hr className="divider" />
      <FadeInWhenVisible>
      <p className="supportingText"> Experience </p>

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
        <ItemYear> 2022</ItemYear>
      </ItemRow>

      <hr className="divider" />

      <p className="supportingText"> Education + Awards </p>
      <ItemRow className="distort-hover">
        <ItemLeft>
          <ItemTitle>Merit Award</ItemTitle>
          <ItemDesc>School of Art</ItemDesc>
        </ItemLeft>
        <ItemDivider />
        <ItemYear> 2023, 2024</ItemYear>
      </ItemRow>

      <ItemRow className="distort-hover">
        <ItemLeft>
          <ItemTitle>Carnegie Mellon University</ItemTitle>
          <ItemDesc>Fine Arts + HCI </ItemDesc>
        </ItemLeft>
        <ItemDivider />
        <ItemYear>2025</ItemYear>
      </ItemRow>
      <hr className="divider" />

      </FadeInWhenVisible>

      
      <AboutDiv>
        {/* <BodyParagraph>Life</BodyParagraph> */}
        <GridIllustration>
          {/* Add your life grid items here */}
        </GridIllustration>
      </AboutDiv>
   </div>
  );
};

export default About; 