export default function Introduction({ data }) {
  return (
    <section id="intro" className="introduction">
      <div className="container">
        <div className="section-label">{data.label}</div>
        <p className="introduction-text">{data.text}</p>
      </div>
    </section>
  );
}
