export default function Speakers({ speakers }) {
  return (
    <section id="speakers" className="speakers">
      <div className="container">
        <h2 className="section-title">Speakers</h2>
        
        <div className="speakers-grid">
          {speakers.slice(0, 3).map((speaker) => (
            <div key={speaker.id} className="speaker-card">
              <div className="speaker-avatar">
                <img src={speaker.image} alt={speaker.name} />
              </div>
              <h3 className="speaker-name">{speaker.name}</h3>
              <p className="speaker-title">{speaker.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
