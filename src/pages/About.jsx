import styled from '@emotion/styled';
import usePageTitle from '../hooks/usePageTitle';
import { Link } from 'react-router-dom';

const AboutContainer = styled.div`
  margin-left: 300px;
  padding: 2rem;
  position: relative;
`;

const FlexBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const AboutDiv = styled.div`
  max-width: 800px;
  align-items: center;
`;

const BodyParagraph = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const GridIllustration = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
`;

const ProfileImage = styled.img`
  width: 100%;
  max-width: 25vw;
  height: auto;
  margin-bottom: 1rem;
  align-items: center;
  
`;

const HighlightSpan = styled.span`
  font-weight: bold;
`;

const workExperience = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

.work-experience-role {
  font-size: 0.8rem;
  color: #666;
}
`;

const About = () => {
  usePageTitle('About - Arin P.');

  return (
    <div className="content">
     <Link to="/" className="sticky-back-btn" aria-label="Back to home">
       ← Back
     </Link>
        <BodyParagraph>Work</BodyParagraph>
        <GridIllustration>
          {/* Add your work grid items here */}
        </GridIllustration>
      
      <AboutDiv>
        <ProfileImage 
          src="https://cdn.prod.website-files.com/6379e0162913f9848d3be654/657357a2ed2b085995153385_Screenshot%202023-12-08%20at%2012.51.06%20PM.png"
          alt="Arin's profile"
          loading="lazy"
        />
        <p>
       I explore technologically mediated experiences and tools through interfaces and creative technologies, grounded in curiosity, speculation, and critical inquiry.
       <br/><br/>
       
        </p>
      </AboutDiv>


        <workExperience>
          <span>Kura Kura</span>
          <span className='work-experience-role'>Product Lead</span>

          <span>– Present</span>
        </workExperience>      
<br/>
        <workExperience>
          <a href="https://www.open.gov.sg/" target="_blank" rel="noopener noreferrer">Open Govt Products</a>
          <span className='work-experience-role'>Product Designer</span>
          <span>2024</span>
        </workExperience> 
      
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