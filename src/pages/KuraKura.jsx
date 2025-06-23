import usePageTitle from '../hooks/usePageTitle';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import FadeInWhenVisible from '../components/FadeInWhenVisible';

const KuraKura = () => {
  usePageTitle('Kura Kura');

  return (
    <div className="content">
      <FadeInWhenVisible>
        <section className="section hero-section">
          <img src="/assets/kurakura/main.png" autoPlay loop muted playsInline loading="lazy" />
        </section>
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <section className="section project-info">
          <div className="section-text">
            <p className="section-lead">A playful, localised AI-driven journaling tool for emotional wellness amongst youths</p>
          <div className="info-grid">
            <div className="info-item">
              <p className="supportingText">Timeline</p>
              <p>4 months</p>
            </div>
            <div className="info-item">
              <p className="supportingText">Collaborators</p>
              <p>Arif Woozeer / PM<br />Sebestian Seth / Eng</p>
            </div>
            </div>

            {/* <div className="info-item">
              <p className="supportingText">Constraints</p>
              <p>User testing opportunities<br />Tech bandwidth</p>
            </div> */}
          </div>
        </section>
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <section className="section role-section">
          {/* <hr className="divider" /> */}
          <div className="section-text">
            <p className="supportingText">My Role</p>
            <p className="section-lead">Leading feature design, product strategy, and visual craft direction</p>
            <p>As the sole designer for kura kura, I worked closely with the founder to lead the product roadmap and design direction of various features for the past year.</p>
            {/* <img src="/assets/kurakura/main.png" autoPlay loop muted playsInline loading="lazy" /> */}

          </div>

        </section>
      </FadeInWhenVisible>
      <hr className="divider" />

      <FadeInWhenVisible>
        <section className="section context-section">
          <div className="section-text">
            <p className="supportingText">Higher Level Problem</p>
            <p className="section-lead">A lack of foundational mental health support systems for Singaporean youths        </p>
            <p>In Singaporean schools and Asian cultures, we're not specifically encouraged to open up – suppressing, hiding, and stifling your emotions are very common. When we open up, it can also be difficult to navigate such situations.</p>
            <img src="/assets/kurakura/kura_problem.png" alt="Problem statement" className="rounded-img" loading="lazy" />

          </div>
          <div className="section-text">
            <p className="section-lead">76% of youths are not comfortable being vulnerable in their current digital support channels.</p>
          <p>Efforts to build external support systems don't directly support youths themselves.</p>
          </div>
        </section>
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <section className="section design-intervention-section">
          <hr className="divider" />
          <div className="section-text">
            <p className="supportingText">DESIGN INTERVENTION</p>
            <p className="section-lead">
              Kura, your turtle companion that brings you a playful journaling and narrative driven experience
            </p>
          </div>

          <div className="design-intervention-grid">
            <div className="design-intervention-left">
              <div className="design-intervention-image-block grid">
                <img src="/assets/kurakura/final_nobg.gif" alt="Kura Kura phone UI" className="design-intervention-phone" loading="lazy" />
                <div className="design-intervention-caption">Checking in your emotions</div>
              </div>
            </div>
            <div className="design-intervention-right">
              <div className="design-intervention-feature">
                <h3>Granular identification of emotions</h3>
                <p>With definitions of emotions and intentional friction for interactive journaling</p>
              </div>
              <div className="design-intervention-feature">
                <h3>Play through a local and familiar narrative</h3>
                <p>Add fruits and flavours to your dessert to feed your digital companion, kura</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section design-intervention-section">
          <div className="design-intervention-grid">
            <div className="design-intervention-left">
              <div className="design-intervention-image-block grid">
                <img src="/assets/kurakura/ai.gif" alt="Kura Kura phone UI" className="design-intervention-phone" loading="lazy" />
                <div className="design-intervention-caption">Voice to text, AI suggestions</div>
              </div>
            </div>
            <div className="design-intervention-right">
              <div className="design-intervention-feature">
                <h3>Multi-modal journaling and AI suggestions</h3>
                <p>Leveraging AI to suggests labels for how you might be feeling</p>
              </div>
            </div>
          </div>
          {/* <hr className="divider" /> */}

        </section>
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <section className="section">
          <hr className="divider" />
          <div className="section-text">
            <p className="supportingText">Emotional learning framework</p>
            <p className="section-lead">Building an emotional chatbot around the RULER framework       </p>
            <p>We adapted the RULER framework, an evidence-based approach for understanding and managing emotions originally developed by Yale. The acronym stands for: Recognizing emotions, Understanding emotions, Labeling emotions, Expressing emotions, and Regulating emotions. From our user interviews, we found that youths need most help with recognizing, understanding, and expressing emotions, so we've built our chatbot conversations around these key areas.</p>
          </div>

          <div className="section-text">
            <img src="/assets/kurakura/kura_characters.png" alt="Kura Characters pic" className="solution-video rounded-img" loading="lazy" />
          </div>
          
          <div className="section-text">
            <p className="section-lead">Why focus on emotional awareness?</p>
            <p>Understanding emotions helps young people navigate relationships, manage stress, and make better decisions. When youths can recognize and express their feelings clearly, they're more likely to seek appropriate support when needed.</p>
          </div>

          <div className="section-text">
            <img src="/assets/kurakura/ruler.png" alt="RULER Framework pic" className="solution-video rounded-img" loading="lazy" />
          </div>
        </section>
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <section className="section">
          <hr className="divider" />
          <div className="section-text">
            <p className="supportingText">Design interactions</p>
            <p className="section-lead">How do we make journaling playful and interactive through touch interactions?       </p>

            <div className="double-phone-ui">
              <img src="/assets/kurakura/taphold.gif" alt="Kura Kura phone UI" className="design-intervention-phone" loading="lazy" />
              <img src="/assets/kurakura/taptap.gif" alt="Kura Kura phone UI" className="design-intervention-phone" loading="lazy" />
            </div>
          </div>
        </section>
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <section className="section">
          <hr className="divider" />
          <div className="section-text">
            <p className="supportingText">Localising narratives, design iterations</p>
            <p className="section-lead">How do we create a more localised and engaging narrative with kura?       </p>
            <div className="concept-cards two">
              <div className="concept-card">
                <p className="supportingText">CHALLENGE</p>
                <h4>The concept of fruits as emotions was fun, but lackluster after a while</h4>
              </div>
              <div className="concept-card">
                <p className="supportingText">INTERVENTION</p>
                <h4>A more cohesive narrative built around local desserts</h4>
              </div>
            </div>
          </div>

          <div className="section-text">
            <p className="section-lead">Make a local, ice kachang dessert through journaling with kura    </p>
            <p>Our users already liked the idea of feeding their kura by checking in their emotions, so I concepted the idea of creating an ice kachang – meaning "bean ice", a Malaysian dessert which is common in Malaysia, Singapore and Brunei.</p>
          </div>
          <img src="/assets/kurakura/ice_kachang.png" alt="Loading animation" className="solution-video rounded-img" loading="lazy" />
          <img src="/assets/kurakura/ixd.png" alt="Loading animation" className="solution-video rounded-img" loading="lazy" />
        </section>
      </FadeInWhenVisible>
      {/* Add more sections as needed */}


          
      <hr className="divider" />

      <FadeInWhenVisible>
        <section className="section">
          <div className="section-text">
            <p className="supportingText">Design System</p>
            <p className="section-lead">Maintaining visual consistency across all kura interactions</p>
            <p>Creating a cohesive design language that feels approachable and comforting while maintaining the playful character of the kura companion.</p>
            <img src="/assets/kurakura/iterations.png" alt="Kura Kura chat system" className="rounded-img" loading="lazy" />
          </div>
        </section>
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <section className="section">
          <div className="section-text" style={{ textAlign: 'left' }}>
            <Link to="/ogp-illustration-guidelines" style={{ textDecoration: 'none' }}>
            <p className="supportingText">Next project</p>
              <p className="section-lead">BYOS Illustration Design System ↗</p>
            </Link>
          </div>
        </section>
      </FadeInWhenVisible>

      <Footer />
    </div>
  );
};

export default KuraKura; 