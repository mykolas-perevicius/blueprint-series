import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-body)'
    }}>
      <h1 style={{
        fontSize: '120px',
        fontWeight: 700,
        fontFamily: 'var(--font-display)',
        color: '#e0e0e0',
        marginBottom: '16px'
      }}>404</h1>
      <p style={{ fontSize: '24px', marginBottom: '32px' }}>Event not found</p>
      <Link href="/" style={{
        padding: '12px 32px',
        border: '2px solid black',
        textDecoration: 'none',
        color: 'black',
        fontWeight: 500,
        textTransform: 'uppercase'
      }}>
        Back to Events
      </Link>
    </div>
  );
}
