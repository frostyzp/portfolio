import usePageTitle from '../hooks/usePageTitle';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Byos = () => {
  usePageTitle('Illustration Guidelines');

  return (
    <div className="content">
      <Link to="/" className="sticky-back-btn" aria-label="Back to home">
        ← Back
      </Link>

      <section className="section hero-section">
        <img src="/byos/byos main copy.png" alt="Illustration Guidelines hero" className="rounded-img" />
      </section>

      <section className="section project-info">
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
          <div className="info-item">
            <p className="supportingText">Constraints</p>
            <p>Systemising different visual languages<br />Applicability across different use cases<br />Accessibility requirements<br />Brand consistency</p>
          </div>
        </div>
      </section>

      <section className="section role-section">
        <hr className="divider" />
        <p className="supportingText">My Role</p>
        <p className="section-lead">Re-looking at the illustration design system and spearheading updates/changes to workflows</p>
        <p>To do this within a month, I initiated a design jam audit to understand the space and challenges as someone without context, and then created a set of guidelines based on the challenges. (i.e. what within the guidelines would be most helpful?)</p>
        <img src="/byos/byos-1.png" alt="Illustration Guidelines process" className="rounded-img" />     
      </section>

      <section className="section context-section">
        <p className="supportingText">Context</p>
        <p className="section-lead">'Build your own Singapore' illustration system has grown to be used across various government products</p>
        <p>Illustrations has been used across various government products – custom modifications to illustrations itself and requests for more have been made. This has created more delightful experiences across a variety of products!</p>
        <img src="/byos/frame-1 copy.png" alt="Illustration system usage" className="rounded-img" />     

        <hr className="divider" />
        <p className="supportingText">Higher Level Problem</p>
        <p className="section-lead">Illustrations are often hastily added at the very end of design workflows</p>
        <p>Whilst this is understandable, the quality/impact of illustrations may hinder the experience when not applied intentionally. This was revealed when I initiated an audit of the ways illustrations have been made across products.</p>
        <p>I sent out a message to designers who've used the illustration design system in their products!</p>
        <p>The first audit of how illustrations have been used across various OGP products.</p>
      </section>

      <section className="section audit-section">
        <p className="supportingText">Audit Findings</p>
        <div className="concept-cards">
          <div className="concept-card">
            <h4>Challenge</h4>
            <p>Illustrations used across screens and touchpoints for various products appear inconsistent</p>
            <h4>Opportunity</h4>
            <p>Creation of illustration guidelines/references, key touchpoints for products</p>
          </div>
          <div className="concept-card">
            <h4>Challenge</h4>
            <p>Creating custom illustrations and compositions are tough for designers with no illustration background</p>
            <h4>Opportunity</h4>
            <p>Exploring scalable, modular illustrated composition + objects in common screen states - Success, Error, Empty states etc.</p>
          </div>
        </div>
        <p className="section-lead">On a higher level, how might illustrations create a more trusted, delightful relationship between Government products in Singapore and members of the public?</p>
      </section>

      <section className="section">
        <hr className="divider" />
        <p className="supportingText">The Design Solution</p>
        <p className="section-lead">An open source set of illustration guidelines designers can reference when creating custom illustrations or looking for inspiration</p>
        <p>The current illustration design system is a mix of custom made illustrations, a dump of ideas and illustrations you can play with.</p>
        <img src="/byos/frame-2.png" alt="Design solution overview" className="rounded-img" />     

        <img src="/byos/frame-3.png" alt="Illustration guidelines" className="rounded-img" />     

        <img src="/byos/frame-4.png" alt="Illustration guidelines" className="rounded-img" />     

            {/* Add images/content here */}
      </section>

      <section className="section">
        <p className="supportingText">Iterating Through Visual Designs/Illustrations</p>
        <p className="section-lead">Drawing and building scabale, custom illustrations</p>
        <p>One of the illustrations I revamped was for Singapore's Health Appointment System. I was intentional in thinking about color, visual density, scale of objects, and visual consistency. These also become guidelines and as a source of reference for building up the illustration guidelines.</p>
        <img src="/byos/frame-2.png" alt="Illustration guidelines" className="rounded-img" />     
        <img src="/byos/frame-2.png" alt="Illustration guidelines" className="rounded-img" />     
        <img src="/byos/frame-2.png" alt="Illustration guidelines" className="rounded-img" />     
        {/* Add images/content here */}
      </section>

      <Footer />
    </div>
  );
};

export default Byos; 