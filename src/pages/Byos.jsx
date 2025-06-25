import usePageTitle from '../hooks/usePageTitle';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import FadeInWhenVisible from '../components/FadeInWhenVisible';

const Byos = () => {
  usePageTitle('Illustration Guidelines - Open Government Products');

  return (
    <div className="content">
      <FadeInWhenVisible>
        <section className="section hero-section">
          <img src="/assets/byos/byos_main.png" alt="Illustration Guidelines hero" className="rounded-img" loading="lazy" />
        </section>
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <section className="section project-info">
          <div className="section-text">
            <p className="section-lead">Streamlining illustration craft for Singapore Government products</p>
            <div className="info-grid">
              <div className="info-item">
                <p className="supportingText">Timeline</p>
                <p>3 months</p>
              </div>
              <div className="info-item">
                <p className="supportingText">Team</p>
                <p>Sufyan Selamet / Design<br />Preston Lim / Design<br />Limin Tan / PM</p>
              </div>
            </div>
          </div>
        </section>
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <section className="section role-section">
          <hr className="divider" />
          <div className="section-text">
            <p className="supportingText">My Role</p>
            <p className="section-lead">Co-leading design system research and component development</p>
            <p>Working alongside another designer, I helped establish illustration guidelines and standards for OGP products, ensuring visual consistency across government digital services.</p>
          </div>
          <img src="/assets/byos/slack-byos.png" alt="Illustration Guidelines process" className="rounded-img" loading="lazy" />
        </section>
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <section className="section context-section">
          <div className="section-text">
            <p className="supportingText">The Problem</p>
            <p className="section-lead">Inconsistent illustration styles across government products were creating brand confusion</p>
            <p>Multiple teams were creating illustrations independently, leading to varied visual approaches that didn't align with OGP's brand identity or accessibility requirements.</p>
          </div>
        </section>
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <section className="section">
          <hr className="divider" />
          <div className="section-text">
            <p className="supportingText">Design Research</p>
            <p className="section-lead">Auditing existing illustration usage across OGP products</p>
            <p>I conducted a comprehensive audit of existing illustrations to understand patterns, inconsistencies, and user needs across different government services.</p>
          </div>
          <img src="/assets/byos/Frame copy.png" alt="Illustration system usage" className="rounded-img" loading="lazy" />

        </section>
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <section className="section">
          <div className="section-text">
            <p className="section-lead">Mapping illustration use cases across government touchpoints</p>
            <p>Understanding how illustrations serve different purposes - from explaining complex processes to providing emotional reassurance during government interactions.</p>
          </div>
          <img src="/assets/byos/byos-1.png" alt="Illustration Guidelines process" className="rounded-img" loading="lazy" />

        </section>
      </FadeInWhenVisible>

    
      <FadeInWhenVisible>
        <section className="section">
          
          <div className="section-text">
          <h4>Synthesised challenges and opportunities from my design jam</h4>

          <section className="section audit-section">

          <div className="concept-cards two">

            <div className="concept-card">
              <p className="supportingText">CHALLENGE</p>
              <h4>Inconsistent usage of illustrations</h4>
              <p>Illustrations used across screens and touchpoints for various products appear inconsistent</p>
            </div>
            <div className="concept-card">
              <p className="supportingText">CHALLENGE</p>
              <h4>Customising illustrations is time consuming</h4>
              <p>Especially for designers with no illustration background</p>
            </div>
            <br />
            <div className="divider" />
            <div className="concept-card green">  
              <p className="supportingText">OPPORTUNITY</p>
              <h4>Modular illustration compositions in common screen states</h4>
              <p>Scalable, modular illustrated composition + objects in Success, Error, Empty states etc.</p>
            </div>
            <div className="concept-card green">  
              <p className="supportingText">OPPORTUNITY</p>
              <h4>Guidelines for key touchpoints</h4>
              <p>To help streamline the process of creating custom illustrations</p>
            </div>
          </div>
          </section>
          </div>
      

        </section>
        </FadeInWhenVisible>

      <FadeInWhenVisible>
        <section className="section">
          <hr className="divider" />
          <div className="section-text">
            <p className="supportingText">Design Solution</p>
            <p className="section-lead">A comprehensive illustration system with guidelines on best practices and usage</p>
            <p>I developed a systematic approach to illustration that teams across OGP could easily adopt and implement consistently.</p>
          </div>
        </section>
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <section className="section">
          <div className="section-text">
            <img src="/assets/byos/byos_prev.png" alt="Design solution overview" className="rounded-img" loading="lazy" />
            <img src="/assets/byos/byos00.png" alt="Illustration guidelines" className="rounded-img" loading="lazy" />
          </div>
        </section>
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <section className="section">
          <div className="section-text">
            <p className="section-lead">Revamping existing illustrations to align with the new guidelines</p>
            <p>I worked on revampign some of the public facing illustrations with the lead designers of the product</p>
            
          </div>
          <img src="/assets/byos/byos01.png" alt="Illustration guidelines" className="rounded-img" loading="lazy" />
            <img src="/assets/byos/byos02.png" alt="Illustration guidelines" className="rounded-img" loading="lazy" />
        </section>
        
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <section className="section">
          <div className="section-text">
            <img src="/assets/byos/byos04.png" alt="Illustration guidelines" className="rounded-img" loading="lazy" />
            <img src="/assets/byos/byos05.png" alt="Illustration guidelines" className="rounded-img" loading="lazy" />
          </div>
        </section>
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <section className="section">
          <hr className="divider" />
          <div className="section-text">
            <p className="supportingText">Impact and Results</p>
            <p className="section-lead">Improved visual consistency across 15+ government products</p>
            <p>The illustration guidelines were well received and adopted across multiple OGP teams, and designers found it helpful to have a reference to work with.</p>
          </div>
        </section>
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <section className="section">
          <div className="section-text" style={{ textAlign: 'left' }}>
            <Link to="/roster-monster" style={{ textDecoration: 'none' }}>
              <p className="supportingText">Next project</p>
              <p className="section-lead">Roster Monster ↗</p>
            </Link>
          </div>
        </section>
      </FadeInWhenVisible>

      <Footer />
    </div>
  );
};

export default Byos; 