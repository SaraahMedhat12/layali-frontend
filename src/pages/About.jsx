import "./About.css";

export default function About() {
  return (
    <div className="about-page-wrapper">

      <div className="about-container">

        {/* LEFT IMAGE + MAIN TEXT CARD */}
        <div className="main-section">
          <img
            src="/about-main.png"
            alt="Pyramid Room"
            className="about-image"
          />

          <div className="about-main-card">
            <h2 className="about-title">
              The strongest broker for tourism services in Egypt
            </h2>

            <p className="about-text">
              Cairo Nights Company is your ideal destination for luxury and comfort
              services in Egypt, as it integrates into its services VIP limousines,
              fast track service at airports, in addition to booking hotels and hotel
              apartments to meet all the needs of its customers with elegance and
              professionalism.We strive to provide unique experiences that represent good taste and
              distinguished service, so that your trip with us is not just a commute,
              but a moment that will be remembered.
            </p>

            

            <button className="learn-btn">Learn more</button>
          </div>
        </div>

        {/* RIGHT SIDE CARDS */}
        <div className="small-cards">

          <div className="small-card">
            <img src="/card1.png" alt="Highlights" className="small-img" />
            <div className="small-text-box">
              <h3 className="small-title">Highlights</h3>
              <p className="small-desc">
                Participation of Mr. Ayman Adel, Chairman of the Board of Directors,
                in Gulf Media.
              </p>
            </div>
          </div>

          <div className="small-card">
            <img src="/card2.png" alt="Latest news" className="small-img" />
            <div className="small-text-box">
              <h3 className="small-title">Latest news</h3>
              <p className="small-desc">
                Appointment of Mr. Ahmed Samir as Vice Chairman of the Board
                of Directors and Executive Supervisor.
              </p>
            </div>
          </div>

          <div className="small-card">
            <img src="/card3.png" alt="Quality of service" className="small-img" />
            <div className="small-text-box">
              <h3 className="small-title">Quality of service and training</h3>
              <p className="small-desc">
                We are always working to prepare work teams, develop service stages,
                and standardize feasibility standards.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
