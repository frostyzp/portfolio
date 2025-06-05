import usePageTitle from '../hooks/usePageTitle';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const KuraKura = () => {
  usePageTitle('Kura Kura');

  return (
    <div className="content">
      <Link to="/" className="sticky-back-btn" aria-label="Back to home">
        ← Back
      </Link>

      <section className="section hero-section">
        <img src="/kurakura/main.png" autoPlay loop muted playsInline />
      </section>

      <section className="section project-info">
        <p className="section-lead">A playful, localised AI-driven journaling tool for emotional wellness amongst youths</p>
        <div className="info-grid">
          <div className="info-item">
            <p className="supportingText">Timeline</p>
            <p></p>
          </div>
          <div className="info-item">
            <p className="supportingText">Collaborators</p>
            <p>1 Engineer<br />1 Product Manager<br />1 Design Manager</p>
          </div>
          <div className="info-item">
            <p className="supportingText">Constraints</p>
            <p>Design sprints<br />User testing opportunities<br />Tech bandwidth</p>
          </div>
        </div>
      </section>

      <section className="section role-section">
      <hr className="divider" />

        <p className="supportingText">My Role</p>
        <p className="section-lead">Leading feature design, product strategy, and visual craft direction</p>
        <p>As the sole designer for kura kura, I worked closely with the founder to lead the product roadmap and design direction of various features for the past year.</p>
      </section>

      <section className="section context-section">
        <p className="supportingText">Higher Level Problem</p>
        <p className="section-lead">A lack of foundational mental health support systems for Singaporean youths        </p>
        <p>In Singaporean schools and Asian cultures, we're not specifically encouraged to open up – suppressing, hiding, and stifling your emotions are very common. When we open up, it can also be difficult to navigate such situations.</p>
        <p>76% of youths are not comfortable being vulnerable in their current digital support channels, and efforts to build external support systems don't directly support youths themselves.</p>
        <img src="/kurakura/kura_problem.png" alt="Problem statement" className="rounded-img" />
      </section>



      <section className="section design-intervention-section">
      <p className="supportingText">DESIGN INTERVENTION</p>
      <p className="section-lead">
              Kura, your turtle companion that<br />brings you a playful journaling and<br />narrative driven experience
            </p>
        <div className="design-intervention-grid">
            <div className="design-intervention-left">

            <div className="design-intervention-image-block">
              <img src="/kurakura/final.gif" alt="Kura Kura phone UI" className="design-intervention-phone" />
              {/* <div className="design-intervention-caption">Final re-design</div> */}
            </div>
          </div>
          <div className="design-intervention-right">
            <div className="design-intervention-feature">
              <h3>Granular identification of emotions</h3>
              <p>With definitions of emotions and intentional friction for interactive journaling</p>
            </div>
            <div className="design-intervention-feature">
              <h3>Play through a local and familiar narrative</h3>
              <p>Add fruits and flavours to your dessert to feed your digital companion, kura!</p>
            </div>
          </div>
        </div>
      </section>


      <section className="section">
        <hr className="divider" />
        <p className="supportingText">The Design Solution</p>
        <p className="section-lead">RULER framework for unpacking emotions        </p>
        <p>The RULER framework is an evidence-based approach to social and emotional learning that focuses on key steps to regulate emotions in order to promote emotional intelligence and well-being.

</p>
        <img src="/kurakura/ixd-1.png" alt="Loading animation" className="solution-video rounded-img" />
        <p className="section-lead">Make a local, ice kachang dessert through journaling with kura!        </p>
        <p>Our users already liked the idea of feeding their kura by checking in their emotions, so I concepted the idea of creating an ice kachang – meaning "bean ice", a Malaysian dessert which is common in Malaysia, Singapore and Brunei.</p>
        <img src="/kurakura/ice kachang 2.png" alt="Loading animation" className="solution-video rounded-img" />
        <img src="/kurakura/ixd.png" alt="Loading animation" className="solution-video rounded-img" />
      </section>
      {/* Add more sections as needed */}

      <Footer />
    </div>
  );
};

export default KuraKura; 