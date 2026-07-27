'use client';

import { useRouter } from "next/navigation";
import Image from "next/image";
import "./TradingDetailsPage.css";
import { scrollToTop } from "../utils/Helper";

const vbox = '/assets/vbox.png';
const servo = '/assets/servo.png';
const plc = '/assets/plc.png';
const hmi = '/assets/hmi.png';
const inverter = '/assets/inverter.png';
const ethernet = '/assets/ethernet.png';
const heroImage = '/assets/automation-hero.png';

const tradingDetails = {
  "header": {
    "title": "Trading Products",
    "description": "Global Source Industrial Automation offers a wide range of high-quality industrial automation products. We are authorized distributors of WECON automation products, providing comprehensive solutions for your industrial control and automation needs with cutting-edge technology and reliable performance."
  },
  "products": [
    {
      "id": "vbox",
      "title": "WECON V-BOX (Iot Gateway)",
      "image": vbox,
      "width": 814,
      "height": 518,
      "description": "Wecon Iot Gateway (V-BOX) is the basic hardware of Wecon Iot platform(V-NET). It is an indispensable equipment about information exchange and protocol conversion for the communication between the IoT cloud platform and the system.",
      "features": [
        "Define LUA scripts to connect PLC-controlled machines with cloud platforms",
        "Connect with platforms like HUAWEI, Google IoT, Alibaba Cloud, etc.",
        "HTTPS protocol ensures access security",
        "Six series available: E series, H series, RE series and RH series",
        "Multiple specifications to match different market demands"
      ]
    },
    {
      "id": "servo",
      "title": "WECON SERVO DRIVES",
      "image": servo,
      "width": 900,
      "height": 913,
      "description": "Wecon Servo Drives feature high response, easy debugging, and strong protection capabilities. They support virtual I/O function, internal multi-stage speed command, internal multi-stage position command, etc. with excellent performance for wide-ranging applications.",
      "features": [
        "High precision and responsive control",
        "Easy setup and debugging process",
        "Robust protection features",
        "Virtual I/O functionality",
        "Available product families: VD2 series, VD2F series"
      ]
    },
    {
      "id": "plc",
      "title": "WECON PLC",
      "image": plc,
      "width": 814,
      "height": 518,
      "description": "Wecon PLC offers high precision, fast speed, and strong stability. In addition to its own various peripheral interfaces, it can expand with various types of expansion modules and BD boards to meet different industrial applications.",
      "features": [
        "High precision and processing speed",
        "Excellent stability for industrial environments",
        "Expandable with various modules and BD boards",
        "Wide application in packaging, food, textile, medical, pharmaceutical industries",
        "Product families: LX5V series, LX5S series, LX3V series and more"
      ]
    },
    {
      "id": "hmi",
      "title": "WECON HMI",
      "image": hmi,
      "width": 1600,
      "height": 900,
      "description": "Wecon HMI has been widely recognized in the market for being economical, practical, with fast response speed and high configuration options.",
      "features": [
        "Economical and practical interface solutions",
        "Fast response speed for real-time monitoring",
        "High configuration capabilities",
        "PI series includes Iot HMI series, Speed version of PI 3000ie series, Luxury version of PI 9000 series",
        "Features include installment payment, HMI formula, user authority management and multi-language display"
      ]
    },
    {
      "id": "inverter",
      "title": "WECON INVERTER",
      "image": inverter,
      "width": 814,
      "height": 518,
      "description": "WECON Inverters are independently developed product platforms with outstanding performance for various industrial automation control applications.",
      "features": [
        "Independent R&D Product Platform",
        "Outstanding Performance for Various Industrial Applications",
        "Excellent control characteristics",
        "Suitable for diverse automation environments"
      ]
    },
    {
      "id": "ethernet",
      "title": "INDUSTRIAL ETHERNET SWITCH",
      "image": ethernet,
      "width": 1096,
      "height": 755,
      "description": "Industrial-grade Ethernet switches designed for reliable network connectivity in harsh industrial environments.",
      "features": [
        "5 Ethernet Ports for comprehensive connectivity",
        "Multiple Mounting Options for flexible installation",
        "WPoE Function for power over ethernet capabilities",
        "VLAN isolation for network segmentation and security",
        "Robust design for industrial environments"
      ]
    }
  ]
};

const TradingDetailsPage = () => {
  const router = useRouter();
  const data = tradingDetails;

  return (
    <div className="trading-details-page">
      <div className="hero-section">
        <Image
          src={heroImage}
          alt="Industrial Automation"
          fill
          priority
          sizes="100vw"
          className="hero-image"
        />
        <div className="hero-overlay">
            <h1>{data.header.title}</h1>
            <p>{data.header.description}</p>
        </div>
      </div>

      <div className="trading-module-grid">
        {data.products.map((product) => (
          <div className="trading-module" key={product.id}>
            <h2>{product.title}</h2>
            <div className="module-content">
              <div className="product-image-container">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={product.width}
                  height={product.height}
                  sizes="(max-width: 768px) 90vw, 320px"
                  className="product-image"
                  style={{ width: "auto", height: "auto", maxWidth: "100%", maxHeight: "100%" }}
                />
              </div>
              <p>{product.description}</p>
              <ul>
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="back-button-container">
        <button className="back-button" onClick={() => {router.push('/');scrollToTop()}}>
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default TradingDetailsPage;