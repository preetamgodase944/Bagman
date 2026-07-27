'use client';

import Link from 'next/link';
import './Divisions.css';
import { scrollToTop } from '../../utils/Helper';

const divisions = [
  {
    tag: 'Manufacturing',
    title: 'Control panels, built in-house',
    body: 'Electrical control panels for packing, milling, and water-treatment lines — with IoT-enabled HMI and PLC integration tuned to each machine.',
    to: '/#products',
    hash: 'products',
    cta: 'See products',
  },
  {
    tag: 'Trading',
    title: 'Authorized WECON hardware',
    body: 'PLC, HMI, servo drives, inverters, IoT V-BOX gateways, and industrial Ethernet — genuine WECON products, supplied and supported locally.',
    to: '/trading/details',
    cta: 'Browse range',
  },
  {
    tag: 'Training',
    title: 'Engineers, line-ready',
    body: 'Hands-on programs in PLC, SCADA, HMI, VFD, and Industry 4.0 — taught on live hardware for working engineers and students.',
    to: '/training/details',
    cta: 'View programs',
  },
];

export default function Divisions() {
  const handleClick = (d) => {
    if (d.hash) {
      const el = document.getElementById(d.hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      scrollToTop();
    }
  };

  return (
    <section className="divisions">
      <div className="container">
        <header className="divisions-head reveal">
          <span className="eyebrow">What we do</span>
          <h2>One source, three ways to keep your line running.</h2>
        </header>

        <div className="divisions-grid">
          {divisions.map((d, i) => (
            <Link
              href={d.to}
              key={d.tag}
              className="division-card reveal"
              style={{ transitionDelay: `${i * 90}ms` }}
              onClick={() => handleClick(d)}
            >
              <span className="division-tag">{d.tag}</span>
              <h3>{d.title}</h3>
              <p>{d.body}</p>
              <span className="division-cta">
                {d.cta}
                <span aria-hidden="true">&rarr;</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
