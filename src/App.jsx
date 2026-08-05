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
        <div>
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
          <img className="objectives-image" src="/logos/meditatie.png" alt="" />
          <img className="objectives-image" src="/logos/meditatie.png" alt="" />
        </div>
      </div>
    </section>
  );
};

const ProjectRecapSection = () => {
  return <section className="page-section project-recap-section"></section>;
};

const GuideBookSection = () => {
  return <section className="page-section guide-book-section"></section>;
};

const MakeItHappendSection = () => {
  return <section className="page-section make-it-happend-section"></section>;
};
