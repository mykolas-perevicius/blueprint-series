import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <Link href="/" className="navbar-logo">
          <Image src="/images/logo.png" alt="The BluePrint Series" width={200} height={40} style={{ height: 'auto' }} />
        </Link>
        <div className="navbar-links">
          <a href="#intro">Intro</a>
          <a href="#agenda">Agenda</a>
          <a href="#speakers">Speakers</a>
          <a href="#faq">FAQ</a>
        </div>
        <span className="btn-tickets">Get Tickets</span>
      </div>
    </nav>
  );
}
