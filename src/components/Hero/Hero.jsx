import { useEffect, useState } from 'react';
import './Hero.css';
import image_1 from '../../assets/hero_ai_1.jpeg';
import image_2 from '../../assets/hero_ai_2.jpeg';
import { Link } from 'react-router-dom';

const slides = [
  { img: image_1, caption: 'Packaging & milling lines', alt: 'Automated packaging line with GSIA control panel' },
  { img: image_2, caption: 'Process & SCADA control', alt: 'Industrial process line monitored from an HMI panel' },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero grid-bg">
      <div className="hero-glow" aria-hidden="true"></div>
      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="eyebrow">Industrial Automation · Bengaluru</span>
          <h1>
            Precision automation,
            <br />
            <span className="hero-accent">built to run.</span>
          </h1>
          <p className="hero-lead">
            GSIA engineers electrical control panels, distributes WECON automation
            hardware, and trains the engineers who keep the line moving — one
            integrated source for industrial control.
          </p>

          <div className="hero-actions">
            <a href="#products" className="btn btn--primary">Explore products</a>
            <Link to="/trading/details" className="btn btn--ghost">View trading range</Link>
          </div>

          <ul className="hero-spec" aria-label="Capabilities">
            <li>
              <span className="hero-spec-val">±10&nbsp;g</span>
              <span className="hero-spec-key">packing accuracy</span>
            </li>
            <li>
              <span className="hero-spec-val">PLC · HMI · SCADA</span>
              <span className="hero-spec-key">integrated control</span>
            </li>
            <li>
              <span className="hero-spec-val">WECON</span>
              <span className="hero-spec-key">authorized distributor</span>
            </li>
          </ul>
        </div>

        <div className="hero-panel">
          <div className="hero-viewport">
            {slides.map((s, i) => (
              <img
                key={i}
                src={s.img}
                alt={s.alt}
                className={`hero-shot ${current === i ? 'is-active' : ''}`}
                loading={i === 0 ? 'eager' : 'lazy'}
              />
            ))}

            <div className="hero-readout">
              <span className="hero-readout-dot"></span>
              <span className="hero-readout-text">LIVE LINE — {slides[current].caption}</span>
            </div>

            <div className="hero-dots">
              {slides.map((_, i) => (
                <button
                  key={i}
                  className={`hero-dot ${current === i ? 'is-active' : ''}`}
                  aria-label={`Show ${slides[i].caption}`}
                  onClick={() => setCurrent(i)}
                ></button>
              ))}
            </div>
          </div>
          <div className="hero-panel-tag">GSIA · SYSTEMS ONLINE</div>
        </div>
      </div>
    </section>
  );
}
