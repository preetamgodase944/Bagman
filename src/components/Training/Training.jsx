'use client';

import { useRouter } from "next/navigation";
import "./Training.css";
import { scrollToTop } from "../../utils/scroll";

const trainingPrograms = [
  {
    title: "PLC Training",
    description:
      "Master industrial automation with hands-on training in Programmable Logic Controllers (PLC). Learn programming, troubleshooting, and real-world applications.",
    industries: ["Manufacturing", "Automotive", "Energy Sector"],
  },
  {
    title: "SCADA & HMI Training",
    description:
      "Gain expertise in SCADA & HMI for real-time monitoring and control systems. Learn how to visualize industrial processes and optimize automation.",
    industries: ["Process Control", "Smart Grids", "Oil & Gas"],
  },
];

const Training = () => {
  const router = useRouter();

  const goToAllPrograms = () => {
    router.push('/training/details');
    scrollToTop();
  };

  return (
    <section className="training" id="training">
      <div className="container">
        <header className="training-head reveal">
          <span className="eyebrow eyebrow--dark">Training</span>
          <h2>Build the engineers who run the line</h2>
          <p>
            Hands-on programs taught on live hardware — PLC, SCADA, HMI, VFD, and
            industrial IoT — to recognized industry standards.
          </p>
        </header>

        <div className="training-cards">
          {trainingPrograms.map((program, index) => (
            <article className="training-card" key={program.title}>
              <span className="training-card-ref">{String(index + 1).padStart(2, '0')}</span>
              <h3>{program.title}</h3>
              <p>{program.description}</p>
              <ul className="industries-list">
                {program.industries.map((industry) => (
                  <li key={industry}>{industry}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="view-all-training">
          <button className="btn btn--primary" onClick={goToAllPrograms}>
            Explore all programs
            <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Training;
