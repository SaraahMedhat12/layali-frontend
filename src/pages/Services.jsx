import "./Services.css";

export default function Services() {
  return (
    <div className="services-page">
      <div className="services-container">

        <div className="service-card">
          <img src="/card12.png" alt="Trips" />
          <h3 className="service-title">Trips and explorations</h3>
          <p className="service-desc">Tour Egypt’s most beautiful landmarks.     </p><br></br>
          <button className="service-btn">Discover tours</button>
        </div>

        <div className="service-card">
          <img src="/card22.png" alt="Fast Track" />
          <h3 className="service-title">Start your journey</h3>
          <p className="service-desc">VIP meet & greet at Cairo and Sharm El-Sheikh.</p>
          <button className="service-btn">Book now</button>
        </div>

        <div className="service-card">
          <img src="/card32.png" alt="Car" />
          <h3 className="service-title">Move in style and comfort</h3>
          <p className="service-desc">A fleet of luxury and family cars with professional drivers.</p>
          <button className="service-btn">Book a car</button>
        </div>

        <div className="service-card">
          <img src="/card42.png" alt="Stays" />
          <h3 className="service-title">Begin your journey</h3>
          <p className="service-desc">Book hotels and apartments with luxury and comfort.</p>
          <button className="service-btn">Browse stays</button>
        </div>

      </div>
    </div>
  );
}
