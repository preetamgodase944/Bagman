'use client';

import { useRouter } from "next/navigation";
import "./Training.css";
import { scrollToTop } from "../../utils/Helper";

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

// const detailedModules = [
//   {
//     title: "Module 1: PLC (Programmable Logic Controller)",
//     topics: [
//       "Introduction to PLC Architecture & Components",
//       "Understanding Digital & Analog Inputs/Outputs",
//       "PLC Programming with multiple languages (Ladder Logic, etc.)",
//       "Timers, Counters, Arithmetic & Logic Operations",
//       "Upload, Download & Monitoring of Programs",
//       "Troubleshooting & Best Practices",
//     ],
//   },
//   {
//     title: "Module 2: SCADA (Supervisory Control & Data Acquisition)",
//     topics: [
//       "SCADA Software Overview & Industrial Applications",
//       "Creating & Editing Graphical Interfaces",
//       "Real-Time & Historical Data Trending",
//       "Alarm & Event Management",
//       "Communication with PLC & Field Devices",
//       "Writing Automation Scripts",
//     ],
//   },
//   {
//     title: "Module 3: HMI (Human-Machine Interface)",
//     topics: [
//       "Introduction to HMI & Various Industry Models",
//       "Designing HMI Screens for Monitoring & Control",
//       "Connecting HMI with PLC",
//       "Real-Time Data Visualization & Alerts",
//     ],
//   },
//   {
//     title: "Module 4: IoT & Communication Protocols",
//     topics: [
//       "Industry 4.0 & IoT Integration",
//       "Communication Protocols (Modbus, MQTT, OPC-UA)",
//       "Remote Monitoring & Control Systems",
//     ],
//   },
// ];

const Training = () => {
  const router = useRouter();

  const onButtonClick = () => {
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
            <article className="training-card" key={index}>
              <span className="training-card-ref">{String(index + 1).padStart(2, '0')}</span>
              <h3>{program.title}</h3>
              <p>{program.description}</p>
              <ul className="industries-list">
                {program.industries.map((industry, idx) => (
                  <li key={idx}>{industry}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="view-all-training">
          <button className="btn btn--primary" onClick={() => onButtonClick()}>
            Explore all programs
            <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      </div>

      {/* Expandable Section */}
      {/* {showDetails && (
        <div className="training-details">
          <h3>Detailed Training Modules</h3>
          {detailedModules.map((module, index) => (
            <div className="training-module" key={index}>
              <h4>{module.title}</h4>
              <ul>
                {module.topics.map((topic, idx) => (
                  <li key={idx}>{topic}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )} */}
    </section>
  );
};

export default Training;
