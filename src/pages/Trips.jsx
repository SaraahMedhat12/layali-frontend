
import "./Captains.css";

export default function Captains() {
  return (
    <div className="captains-page">
      <div className="captains-container">

        {/* LEFT MAIN CARD */}
        <div className="captains-main-card">
          <img src="/card31.png" alt="Main" className="left-main-img" />

          <div className="left-main-text">
            <h2 className="captains-title">
              Distinguished Layal Cairo captains
            </h2>

            <p className="captains-desc">
              We know very well that a large part of our customers’ trust and
              their distinctive experience begins with the Cairo Nights captains –
              the true stars of service.<br /><br />
              And in order to make your experience easier and more luxurious,
              we have now provided you with a direct booking service with the captain.
            </p>

            <button className="learn-btn">
              Get to know our captains
            </button>
          </div>
        </div>

        {/* 3 CAPTAIN CARDS */}
        <div className="captains-cards-row">
          {[1, 2, 3].map((num) => (
            <div key={num} className="captain-card">
              <div className="badge">{num}</div>

              <img src="/driver.png" alt="Captain" className="captain-card-img" />

              {/* BLURRED INFO SECTION */}
              <div className="captain-info-blur">

                <div className="captain-info">
                  <h3 className="captain-name">Yehia Elbasha (5⭐)</h3>

                  <p className="captain-sub">Yahya Islam</p>
                  <p className="captain-trips">16 trips</p>
                </div>

                <button className="reserve-btn">
                  Reserve
                </button>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
