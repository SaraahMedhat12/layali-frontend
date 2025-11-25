import "./Trips.css";

export default function Trips() {
  return (
    <div className="trips-page">

      <div className="trips-container">

        {/* LEFT MAIN CARD */}
        <div className="trips-main-card">

          <img
            src="/trips-main.png"
            alt="Cairo Tower"
            className="trips-main-img"
          />

          <div className="trips-main-text">
            <h2 className="trips-title">
              Cairo nights give you unforgettable moments
            </h2>

            <p className="trips-desc">
              Live the luxury experience at special prices! Discover our latest
              offers on limousine services, hotels, hotel apartments, and trips,
              and enjoy five-star service at the lowest price.
              <br /><br />
              Book now and benefit from our seasonal offers on all our services —
              because every trip with Cairo Nights deserves to be special.
            </p>

            <button className="explore-btn">Explore all offers</button>
          </div>

        </div>

        {/* RIGHT 3 OFFER CARDS */}
        <div className="offers-row">

          {/* CARD 1 */}
          <div className="offer-card">
            <img src="/card14.png" className="offer-img" alt="Luxury limousine"/>
            <h3 className="offer-title">Luxury limousine offer</h3>
            <p className="offer-desc">
              VIP limousine packages for events and daily trips.
            </p>
            <button className="offer-btn">اطلب الآن</button>
          </div>

          {/* CARD 2 */}
          <div className="offer-card">
            <img src="/card24.png" className="offer-img" alt="Tours"/>
            <h3 className="offer-title">Tours and discoveries</h3>
            <p className="offer-desc">
              Explore Egypt with travel and stay offers.
            </p>
            <button className="offer-btn">اطلب الآن</button>
          </div>

          {/* CARD 3 */}
          <div className="offer-card">
            <img src="/card34.png" className="offer-img" alt="Hotel offers"/>
            <h3 className="offer-title">Hotel offers</h3>
            <p className="offer-desc">
              Discover the latest hotel offers.<br></br><br></br>
            </p>
            <button className="offer-btn">اطلب الآن</button>
          </div>

        </div>

      </div>

    </div>
  );
}
