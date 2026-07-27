'use client';

import Link from "next/link";
import Image from "next/image";
import "./TrainingDetailsPage.css";
import { downloadBrochure } from "../components/Helper/CommonFuctions";

const heroImage = "/assets/training-hero.png";

// Training modules data separated from UI
const trainingModules = [
  {
    id: "plc",
    title: "PLC Training",
    content: [
      "Introduction to PLC Architecture & Components",
      "Understanding Digital & Analog Inputs/Outputs",
      "PLC Programming with Ladder Logic",
      "Timers, Counters, Arithmetic & Logic Operations",
      "Upload, Download & Monitoring of Programs",
      "Troubleshooting & Best Practices"
    ],
    type: "list"
  },
  {
    id: "hmi-scada",
    title: "HMI and SCADA Training",
    content: [
      "Introduction to HMI & Various Industry Models",
      "Designing HMI Screens for Monitoring & Control",
      "Connecting HMI with PLC",
      "Real-Time Data Visualization & Alerts",
      "SCADA Software Overview & Industrial Applications",
      "Creating & Editing Graphical Interfaces",
      "Real-Time & Historical Data Trending",
      "Alarm & Event Management",
      "Communication with PLC & Field Devices",
      "Writing Automation Scripts"
    ],
    type: "list"
  },
  {
    id: "vfd-servo",
    title: "VFD and Servo Training",
    content: [
      "Introduction to VFD and Motor Control",
      "Hands-on configuration of VFD parameters, start/stop control, and speed variation",
      "Integration of VFD with PLC & SCADA"
    ],
    type: "list"
  },
  {
    id: "comm-protocols",
    title: "Industrial Communication Protocols",
    content: [
      "Fieldbus (Modbus RTU, PROFIBUS, CAN Bus)",
      "Ethernet-Based Protocols (PROFINET, EtherNet/IP, Modbus TCP/IP)"
    ],
    type: "list"
  },
  {
    id: "crash-course",
    title: "Industrial Automation Crash Course",
    content: [
      "Introduction to Industrial Automation",
      "PLC Programming & Implementation",
      "SCADA & HMI Development",
      "Variable Frequency Drives (VFDs) & Motion Control",
      "Industrial Communication Protocols",
      "Industry Projects & Hands-On Training"
    ],
    type: "list"
  },
  {
    id: "pgdia",
    title: "PGDIA for Industry 4.0 Course",
    content: [
      "Comprehensive training program focusing on modern industrial automation systems and Industry 4.0 concepts."
    ],
    type: "paragraph"
  },
  {
    id: "internship",
    title: "Internship Programme",
    content: [
      { label: "Duration", value: "4 to 12 weeks (Flexible schedules available)" },
      { label: "Mode", value: "Online & Offline (On-Site Training Available)" }
    ],
    type: "labeled-list"
  },
  {
    id: "academic",
    title: "Academic Projects (Engineering/Diploma)",
    content: [
      "Guidance and support for academic projects related to industrial automation and control systems."
    ],
    type: "paragraph"
  }
];

const TrainingDetailsPage = () => {
  const scrollToSection = (sectionId) => {
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  // Render different types of content based on module type
  const renderModuleContent = (module) => {
    switch (module.type) {
      case "list":
        return (
          <ul className="module-content-list">
            {module.content.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        );
      case "paragraph":
        return (
          <p className="module-content-paragraph">
            {module.content}
          </p>
        );
      case "labeled-list":
        return (
          <div className="module-content-labeled-list">
            {module.content.map((item, idx) => (
              <div key={idx} className="labeled-item">
                <span className="label">{item.label}:</span>
                <span className="value">{item.value}</span>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="training-details-page">
      {/* Hero Section */}
      <div className="hero-section">
        <Image
          src={heroImage}
          alt="Training in Progress"
          fill
          priority
          sizes="100vw"
          className="hero-image"
        />
        <div className="hero-content">
          <h1>Unlock Your Potential in Industrial Automation</h1>
          <p>
            Elevate your skills with our comprehensive training programs designed for professionals and students alike.
          </p>
          <button className="download-btn" onClick={() => downloadBrochure()}>
            Download Brochure
          </button>
        </div>
      </div>

      {/* About Us */}
      <div className="about-us-section">
        <h2>About Our Training Programs</h2>
        <p>
          A leading knowledge package in the processing and treatment industry, offering education and training courses for managers, technicians, operators, and students in process automation. Courses cover automation concepts, instrumentation, PLC, SCADA, HMI, VFD, SERVO, and more, according to recognized industrial standards and best practices.
        </p>
      </div>

      {/* Training Modules - Modernized Section */}
      <div className="training-module-section" id="training-modules">
        <h2>Explore Our Training Modules</h2>
        
        <div className="modules-container">
          {trainingModules.map((module, index) => (
            <div className="module-item" key={module.id} id={module.id}>
              <div className="module-header">
                <span className="module-number">{index + 1}</span>
                <h3>{module.title}</h3>
              </div>
              <div className="module-content">
                {renderModuleContent(module)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="cta-section">
        <h2>Ready to Take the Next Step?</h2>
        <p>
          Enroll in our training programs today and gain the skills you need to excel in the field of industrial automation.
        </p>
        <button className="enroll-btn">
          <Link
            href="/#contact-us"
            onClick={() => scrollToSection('contact-us')}
          >
            Contact Now
          </Link>
        </button>
      </div>
    </div>
  );
};

export default TrainingDetailsPage;