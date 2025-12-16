import Link from 'next/link';
import Image from 'next/image';
import { getEvents } from './lib/api';

export default async function HomePage() {
  let events = [];
  let error = null;
  
  try {
    events = await getEvents();
  } catch (e) {
    error = e.message;
  }

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <Link href="/" className="navbar-logo">
            <Image src="/images/logo.png" alt="The BluePrint Series" width={200} height={40} style={{ height: 'auto' }} />
          </Link>
          <div className="navbar-links">
            <a href="#events">Events</a>
          </div>
        </div>
      </nav>

      <section className="home-hero">
        <div>
          <h1 className="home-title">The BluePrint Series</h1>
          <p className="home-subtitle">
            Inspiring conversations with creative leaders shaping culture and design.
          </p>
        </div>
      </section>

      <section id="events" className="events-section">
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: '48px' }}>Upcoming Events</h2>
          
          {error && (
            <p style={{ textAlign: 'center', color: '#666' }}>
              Unable to load events. Make sure the API server is running on port 3001.
            </p>
          )}
          
          {events.map((event) => (
            <Link key={event.id} href={`/event/${event.id}`} className="event-card">
              <p className="event-card-date">{event.date}</p>
              <h3 className="event-card-title">{event.title}</h3>
              <p className="event-card-location">{event.location}</p>
            </Link>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <h2 className="footer-title">The BluePrint Series</h2>
          <p className="footer-copyright">© 2025 THE GRADIENT GROUP, LLC</p>
        </div>
      </footer>
    </>
  );
}
