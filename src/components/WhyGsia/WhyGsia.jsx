import './WhyGsia.css';

const reasons = [
  {
    title: 'Engineered in-house',
    body: 'We design, build, and service our own control panels — no black boxes, no finger-pointing when something needs a fix.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="7" y="7" width="10" height="10" rx="1.5" />
        <path d="M10 2v3M14 2v3M10 19v3M14 19v3M2 10h3M2 14h3M19 10h3M19 14h3" />
      </svg>
    ),
  },
  {
    title: 'Monitor from anywhere',
    body: 'IoT-enabled HMI and V-BOX gateways let you watch the line and pull data from any device, any time.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17.5 19a4.5 4.5 0 0 0 .5-8.97A6 6 0 0 0 6.2 9.4 4 4 0 0 0 7 17" />
        <path d="M12 12v6M12 12l-2.2 2.2M12 12l2.2 2.2" />
      </svg>
    ),
  },
  {
    title: '±10 g accuracy',
    body: 'Packing and dosing tuned to ±10 grams — batch after batch, shift after shift, without drift.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 13a9 9 0 0 1 9 9H3a9 9 0 0 1 9-9Z" />
        <path d="M12 13 15 8" />
        <circle cx="12" cy="13" r="1.3" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: 'Rapid-response service',
    body: 'A dedicated service team resolves issues fast, so a stopped line becomes a running line again — quickly.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4l-6 6a1.5 1.5 0 0 0 2 2l6-6a4 4 0 0 0 5.4-5.4l-2.3 2.3-2-2 2.3-2.3Z" />
      </svg>
    ),
  },
];

const industries = [
  'Grain milling',
  'Packaging',
  'Food processing',
  'Water treatment',
  'Pharmaceutical',
  'Textile',
];

export default function WhyGsia() {
  return (
    <section className="why">
      <div className="container">
        <header className="why-head reveal">
          <span className="eyebrow">Why GSIA</span>
          <h2>Built to keep your line running.</h2>
          <p>
            Uptime is the only metric that matters on a plant floor. Every panel we
            ship is designed around it.
          </p>
        </header>

        <div className="why-grid">
          {reasons.map((r, i) => (
            <article className="why-card reveal" key={r.title} style={{ transitionDelay: `${i * 80}ms` }}>
              <span className="why-icon">{r.icon}</span>
              <h3>{r.title}</h3>
              <p>{r.body}</p>
            </article>
          ))}
        </div>

        <div className="why-footer reveal">
          <div className="why-industries">
            <span className="why-label">Industries we serve</span>
            <ul>
              {industries.map((ind) => (
                <li key={ind}>{ind}</li>
              ))}
            </ul>
          </div>
          <div className="why-standards">
            <span className="why-standards-dot" aria-hidden="true"></span>
            Built to WHO · EPA · ISO standards · Authorized WECON distributor
          </div>
        </div>
      </div>
    </section>
  );
}
