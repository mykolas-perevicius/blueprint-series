export default function EventDetail({ detail, previousEvents }) {
  return (
    <section className="event-detail">
      <div className="container">
        <h2 className="section-title">The Event</h2>
        
        <div className="event-grid">
          <div>
            <div className="section-label" style={{ fontSize: '20px', marginBottom: '16px' }}>
              {detail.label}
            </div>
            <p className="event-description">{detail.text}</p>
          </div>
          <div className="event-image">
            <img src="/images/events/past-event-main.png" alt="Event" />
          </div>
        </div>
        
        <div className="past-events-label">{previousEvents.label}</div>
        <div className="past-events-grid">
          {previousEvents.images.map((img, index) => (
            <div key={index} className="past-event-item">
              <img src={img} alt={`Past Event ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
