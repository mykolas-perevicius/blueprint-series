export default function Hero({ info }) {
  return (
    <section className="hero">
      <img src="/images/hero-poster.jpg" alt="Event" className="hero-image" />
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-location">{info.location}</p>
          <h1 className="hero-title">{info.title}</h1>
          <p className="hero-date">{info.date}</p>
        </div>
      </div>
    </section>
  );
}
