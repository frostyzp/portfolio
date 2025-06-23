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
            <p>We conducted a comprehensive audit of existing illustrations to understand patterns, inconsistencies, and user needs across different government services.</p>
            <img src="/assets/byos/Frame copy.png" alt="Illustration system usage" className="rounded-img" loading="lazy" />
          </div>
        </section>
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <section className="section">
          <div className="section-text">
            <p className="section-lead">Mapping illustration use cases across government touchpoints</p>
            <p>Understanding how illustrations serve different purposes - from explaining complex processes to providing emotional reassurance during government interactions.</p>
            <img src="/assets/byos/byos-1.png" alt="Illustration Guidelines process" className="rounded-img" loading="lazy" />
          </div>
        </section>
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <section className="section">
          <hr className="divider" />
          <div className="section-text">
            <p className="supportingText">Key Insights</p>
            <p className="section-lead">Government services need illustrations that build trust and clarity</p>
            <p>Citizens interacting with government services are often in stressful situations and need visual communication that is clear, trustworthy, and accessible to diverse audiences.</p>
          </div>
        </section>
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <section className="section">
          <div className="section-text">
            <p className="section-lead">Establishing principles for government illustration</p>
            <p>Our guidelines prioritize inclusivity, accessibility, and cultural sensitivity while maintaining visual consistency across all OGP products.</p>
          </div>
        </section>
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <section className="section">
          <hr className="divider" />
          <div className="section-text">
            <p className="supportingText">Design Solution</p>
            <p className="section-lead">A comprehensive illustration system with clear guidelines and reusable components</p>
            <p>We developed a systematic approach to illustration that teams across OGP could easily adopt and implement consistently.</p>
          </div>
        </section>
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <section className="section">
          <div className="section-text">
            <p className="section-lead">Style guide and component library</p>
            <p>Creating modular illustration components that can be mixed and matched while maintaining visual coherence across different government services.</p>
            <img src="/assets/byos/byos_prev.png" alt="Design solution overview" className="rounded-img" loading="lazy" />
            <img src="/assets/byos/byos00.png" alt="Illustration guidelines" className="rounded-img" loading="lazy" />
          </div>
        </section>
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <section className="section">
          <div className="section-text">
            <p className="section-lead">Accessibility and inclusion considerations</p>
            <p>Ensuring illustrations meet accessibility standards and represent Singapore's diverse population appropriately.</p>
          </div>
        </section>
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <section className="section">
          <div className="section-text">
            <p className="section-lead">Implementation guidelines for design teams</p>
            <p>Providing clear documentation and examples for how teams should apply the illustration system in their specific contexts.</p>
            <img src="/assets/byos/byos01.png" alt="Illustration guidelines" className="rounded-img" loading="lazy" />
            <img src="/assets/byos/byos02.png" alt="Illustration guidelines" className="rounded-img" loading="lazy" />
          </div>
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
            <p>The illustration guidelines were adopted across multiple OGP teams, leading to more cohesive user experiences across government digital services.</p>
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