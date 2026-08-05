import "./App.css";

export default function App() {
  return (
    <section className="page-container">
      <HeroSection />
      <AboutObjectivesSection />
      <ProjectRecapSection />
      <GuideBookSection />
      <MakeItHappendSection />
    </section>
  );
}

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">SMART Minds</h1>
        <p className="hero-subtitle">Empowering youth for mental well-being</p>
      </div>

      <img className="hero-image" src={"/logos/LOGO_SMART_MINDS.png"} />
    </section>
  );
};

const AboutObjectivesSection = () => {
  return (
    <section className="page-section about-objectives-section">
      {/* ------------------about section------------------------- */}
      <div className="about-objectives-content">
        <h2 className="about-objectives-title">About the project</h2>
        <div className="about-objectives-content-text-container">
          <p className="about-objectives-content-text">
            SMART Minds: Empowering Youth for Mental Well-being was an Erasmus+ Youth Exchange that brought together 35 young
            people from Romania, Türkiye, Bulgaria and Portugal to explore mental health through non-formal education,
            intercultural learning and shared experiences.
          </p>
          <p className="about-objectives-content-text">
            Mental health is one of the most important challenges facing young people today. Stress, anxiety, social pressure and
            stigma can make it difficult to seek help or openly discuss emotional well-being. SMART Minds was created to provide a
            safe, inclusive space where participants could develop knowledge, practical skills and confidence to take care of
            their mental health.
          </p>
          <p className="about-objectives-content-text">
            Throughout the mobility, participants took part in interactive workshops, reflection activities, mindfulness
            exercises, creative methods and intercultural learning experiences. Together, they explored topics such as emotional
            well-being, stress management, resilience, self-awareness and peer support.
          </p>
        </div>
      </div>
      {/* --------------- objectives section --------------- */}
      <div className={"objectives-container"}>
        <h2 className={"objectives-title"}>Objectives</h2>
        <div className="objectives-list">
          <div className={"objectives-content-container"}>
            <img className={"objectives-content-row-number"} src="/logos/1.png" alt="" />
            <p className={"objectives-content-row-content"}>
              Raise awareness about mental health by helping young people better understand common mental health challenges and
              challenge existing myths and stereotypes.
            </p>
          </div>
          <div className={"objectives-content-container"}>
            <img className={"objectives-content-row-number"} src="/logos/2.png" alt="" />
            <p className={"objectives-content-row-content"}>
              Strengthen intercultural dialogue by bringing together young people from different countries to share experiences,
              perspectives and good practices related to mental well-being.
            </p>
          </div>
          <div className={"objectives-content-container"}>
            <img className={"objectives-content-row-number"} src="/logos/3.png" alt="" />
            <p className={"objectives-content-row-content"}>
              Promote practical well-being skills through non-formal learning activities focused on mindfulness, breathing
              techniques, journaling, emotional awareness and stress management.
            </p>
          </div>
          <div className={"objectives-content-container"}>
            <img className={"objectives-content-row-number"} src="/logos/4.png" alt="" />
            <p className={"objectives-content-row-content"}>
              Foster inclusion and active participation by creating a safe and supportive learning environment where young people,
              including those with fewer opportunities, could learn, connect and grow together.
            </p>
          </div>
          <div className={"objectives-content-container"}>
            <img className={"objectives-content-row-number"} src="/logos/5.png" alt="" />
            <p className={"objectives-content-row-content"}>
              Encourage healthier lifestyles by inspiring participants to adopt positive habits that support emotional resilience,
              self-care and overall well-being.
            </p>
          </div>
        </div>
        <div className="objectives-image-container">
          <div className="objectives-image" src="/logos/meditatie.png" alt="" />
          <div className="objectives-image" src="/logos/meditatie.png" alt="" />
        </div>
      </div>
    </section>
  );
};

const ProjectRecapSection = () => {
  return (
    <section className="page-section project-recap-section">
      <div className="project-recap-inner">
        <h2 className="project-recap-title">Project Recap</h2>
        <div className="project-recap-content">
          Take a look back at the our journey. This short video captures the highlights of the project, the learning experiences,
          meaningful connections and memorable moments shared by participants throughout the mobility.
        </div>
      </div>
      <div className="project-recap-image-placeholder"></div>
    </section>
  );
};

const GuideBookSection = () => {
  return (
    <section className="page-section guide-book-section">
      <div className="guide-book-container">
        <div className="guide-book-intro">
          <h2 className="guide-book-title">SMART Minds - Guide book</h2>
          <p className="guide-book-description">
            The <b>MENTAL HEALTH YOUTH GUIDE</b> is a practical resource created to help young people better understand mental
            health and emotional well-being. It combines accessible information, practical exercises, reflection activities and
            mindfulness techniques that encourage self-awareness, resilience and healthy coping strategies. Whether you read it
            from beginning to end or explore individual chapters, the guide is designed to support your personal well-being
            journey.
          </p>
        </div>
        <div className="guide-book-discovery">
          <h2 className="guide-book-discovery-title">What you'll discover?</h2>
          <ul className="guide-book-list">
            <li className="guide-book-list-item">An introduction to the language of mental health and emotional well-being.</li>
            <li className="guide-book-list-item">The most common mental health challenges faced by young people.</li>
            <li className="guide-book-list-item">Myths and stereotypes that prevent open conversations about mental health.</li>
            <li className="guide-book-list-item">Practical strategies for coping with stress and emotional difficulties.</li>
            <li className="guide-book-list-item">Simple well-being techniques to build healthier daily habits.</li>
            <li className="guide-book-list-item">Guided self-reflection and journaling activities for personal growth.</li>
          </ul>
        </div>
      </div>

      <div className="guide-book-action-container">
        <img className="guide-book-image" src="/logos/guideCover.jpeg" alt="Guide preview" />
        <div className="guide-book-link-container">
          <a className="guide-book-link" href="/logos/Mental_Health_Youth_Guide.pdf" download="Mental Health Youth Guide.pdf">
            Read the guide
          </a>
        </div>
      </div>
    </section>
  );
};

const MakeItHappendSection = () => {
  return (
    <section className="page-section make-it-happend-section">
      <div className="container">
        <h2 className="section-title">Together we made it happen</h2>

        <div className="mih-grid">
          {/* Left */}
          <div className="mih-illustration">
            <img src="/logos/toma.png" alt="Illustration" />
          </div>

          {/* Center */}
          <div className="mih-content">
            <div className="host">
              <h3>Host organisation</h3>

              <div className="socials-container">
                <img className="logo" src="/logos/smart_logo.png" alt="SMART" />
                <div className="">
                  <h4>Asociația S.M.A.R.T.</h4>

                  <a href="https://smartassociation.ro/" target="_blank" rel="noreferrer">
                    https://smartassociation.ro/
                  </a>
                </div>

                <div className="socials">
                  <a href="#">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="partners">
              <h3>Partners</h3>

              <div className="partner">
                <div className="socials-container">
                  <img className="logo" src="/logos/novoMundoLogo.jpeg" alt="Novo Mundo" />

                  <h4>Novo Mundo</h4>

                  <div className="socials">
                    <a href="#">
                      <i className="fab fa-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="partner">
                <h4>Green Lives</h4>

                <div className="socials">
                  <a href="#">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>

              <div className="partner">
                <h4>
                  Samandağ Gastronomi
                  <br />
                  Turizm ve Kültür Derneği
                </h4>

                <div className="socials">
                  <a href="#">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="eu-footer">
              <small>
                Funded by the European Union. Views and opinions expressed are however those of the author(s) only and do not
                necessarily reflect those of the European Union or the National Agency for Community Programs in the Field of
                Education and Vocational Training.
              </small>

              <img src="/logos/UE_LOGO.png" alt="EU" />
            </div>
          </div>

          {/* Right */}
          <div className="mih-gallery">
            <img src="/logos/grup_provocari.png" alt="" />
            <img src="/logos/grup2.png" alt="" />
            <img src="/logos/grup_diploma.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
