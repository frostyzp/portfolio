import usePageTitle from '../hooks/usePageTitle';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import FadeInWhenVisible from '../components/FadeInWhenVisible';

const Byos = () => {
  usePageTitle('Illustration Guidelines');

  return (
    <div className="content">
      <FadeInWhenVisible>
        <section className="section hero-section">
          <img src="/assets/byos/byos_main.png" alt="Illustration Guidelines hero" className="rounded-img" />
        </section>
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <section className="section project-info">
          <div className="section-text">
            <p className="section-lead">Streamlining illustration craft through guidelines for Singapore government products</p>
            <div className="info-grid">
            <div className="info-item">
              <p className="supportingText">Timeline</p>
              <p>1 month</p>
            </div>
            <div className="info-item">
              <p className="supportingText">Collaborators</p>
              <p>Rachel Tan (Design systems)</p>
            </div>
            {/* <div className="info-item">
              <p className="supportingText">Constraints</p>
              <p>Systemising different visual languages<br /> <br />Applicability across different use cases</p>
            </div> */}
          </div>
          </div>
    
        </section>
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <section className="section role-section">
          <hr className="divider" />
          <div className="section-text">
            <p className="supportingText">My Role</p>
            <p className="section-lead">Spearheading an initiative to create workflows around a new set of Illustration design guidelines</p>
            <p>To do this within a month, I initiated a design jam audit to understand the space and challenges as someone without context, and then created a set of guidelines based on the challenges. (i.e. what within the guidelines would be most helpful?)</p>
          </div>
          <img src="/assets/byos/slack-byos.png" alt="Illustration Guidelines process" className="rounded-img" />     
        </section>
      </FadeInWhenVisible>

      <FadeInWhenVisible>
      <div className="divider" />
        <section className="section context-section">
          <div className="section-text">
            <p className="supportingText">Context</p>
            <p className="section-lead">'Build your own Singapore' illustration system has grown to be used across various government products</p>
            <p>Illustrations has been used across various government products – custom modifications to illustrations itself and requests for more have been made. This has created more delightful experiences across a variety of products!</p>
          </div>
          <img src="/assets/byos/Frame copy.png" alt="Illustration system usage" className="rounded-img" />     
          <hr className="divider" />
          <div className="section-text">
            <p className="supportingText">Higher Level Problem</p>
            <p className="section-lead">Illustrations are often hastily added at the very end of design workflows</p>
            <p>Whilst this is understandable, the quality/impact of illustrations may hinder the experience when not applied intentionally. This was revealed when I initiated an audit of the ways illustrations have been made across products.</p>
          </div>
          <img src="/assets/byos/byos-1.png" alt="Illustration Guidelines process" className="rounded-img" />     

          

        </section>
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <section className="section audit-section">
          <div className="section-text">
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

              <div className="section-text">
            <p className="section-lead">An audit of how illustrations have been used across various OGP products after 2 years</p>
            </div>

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
          </div>
        </section>
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <section className="section">
          <hr className="divider" />
          <div className="section-text">
            <p className="supportingText">The Design Solution</p>
            <p className="section-lead">An open source set of illustration guidelines designers can reference</p>
            <p>The current illustration design system is a mix of custom made illustrations, a dump of ideas and illustrations you can play with.</p>
          </div>
          <img src="/assets/byos/byos_prev.png" alt="Design solution overview" className="rounded-img" />     
          <img src="/assets/byos/byos00.png" alt="Illustration guidelines" className="rounded-img" />     
        </section>
      </FadeInWhenVisible>
      <div className="divider" />

      <FadeInWhenVisible>
        <section className="section">
          <div className="section-text">
            <p className="supportingText">Iterating Through Visual Designs/Illustrations</p>
            <p className="section-lead">Drawing and building scabale, custom illustrations</p>
            <p>One of the illustrations I revamped was for Singapore's Health Appointment System. I was intentional in thinking about color, visual density, scale of objects, and visual consistency. These also become guidelines and as a source of reference for building up the illustration guidelines.</p>
          </div>
          <img src="/assets/byos/byos01.png" alt="Illustration guidelines" className="rounded-img" />    
          <img src="/assets/byos/byos02.png" alt="Illustration guidelines" className="rounded-img" />     
          <div className="section-text">
            <p>On a higher level, a question I grappled with was how might illustrations create a more trusted, delightful relationship between Government products in Singapore and members of the public?</p>
          </div>
          <img src="/assets/byos/byos04.png" alt="Illustration guidelines" className="rounded-img" />    
          <img src="/assets/byos/byos05.png" alt="Illustration guidelines" className="rounded-img" />  
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