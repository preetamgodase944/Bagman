import { useState } from 'react';
import './Products.css';
import product_1a from '../../assets/product_1a.png';
import product_2 from '../../assets/product_2.png';
import product_3 from '../../assets/product_3.png';
import product_4 from '../../assets/product_4.png';

export default function Products() {
  const [activeModal, setActiveModal] = useState(null);

  // Product details with extended information
  const productDetails = {
    first: {
      title: "Electrical control panel for Packing Machines",
      image: product_1a,
      shortDesc: "GSIA control panels for packing machines integrate IoT technology for real-time monitoring and high accuracy.",
      fullDesc: "GSIA manufactures control panels for packing machinery across all packaging industries. Leveraging IoT-developed Human Machine Interfaces (HMI) and Programmable Logic Controllers (PLC), our solutions ensure packaging accuracy of ±10 grams. The Internet of Things (IoT) integration allows customers to monitor displays anytime, anywhere, enhancing operational efficiency and control.",
      features: [
        "IoT-enabled real-time monitoring",
        "Packaging accuracy of ±10 grams",
        "Advanced HMI touchscreen interface",
        "PLC-based control systems",
        "Customizable for all packaging industries"
      ]
    },
    second: {
      title: "Electrical Control panel for Vibrator feeding Applications",
      image: product_2,
      shortDesc: "GSIA control panels for vibrator feeding applications use automation technology tailored for grain milling industries.",
      fullDesc: "GSIA designs control panels for vibrator feeding applications using cutting-edge automation technology for grain milling industries. Our innovative control logic is customized to meet specific customer requirements, backed by a dedicated service team that resolves issues swiftly, ensuring minimal downtime and maximum productivity.",
      features: [
        "Tailored automation for grain milling",
        "Innovative control logic design",
        "Rapid-response service team",
        "High reliability and uptime",
        "Customizable to customer needs"
      ]
    },
    third: {
      title: "Electrical Control panel for Stitching conveyor and loader",
      image: product_3,
      shortDesc: "GSIA control panels for stitching conveyors and loaders optimize speed and efficiency with low power consumption.",
      fullDesc: "GSIA manufactures control panels for stitching conveyor and loader systems, primarily for grain milling industries. Our advanced technology regulates speed and direction, reduces power consumption, and boosts efficiency, delivering reliable performance tailored to industrial needs.",
      features: [
        "Speed and direction regulation",
        "Low power consumption design",
        "Enhanced operational efficiency",
        "Robust conveyor and loader control",
        "Optimized for grain milling industries"
      ]
    },
    fourth: {
      title: "Complete solution for Water treatment plants (Domestic & Industrial)",
      image: product_4,
      shortDesc: "GSIA provides end-to-end water treatment solutions with smart automation and sustainable technology.",
      fullDesc: "At GSIA, we offer comprehensive solutions for domestic and industrial water treatment plants, covering design, engineering, automation, installation, and maintenance. Our expertise includes drinking water treatment, industrial process water systems, effluent and sewage treatment, and zero liquid discharge (ZLD) solutions. With IoT-enabled SCADA and PLC-based monitoring, we deliver efficient, sustainable, and compliant water management systems.",
      features: [
        "Custom water treatment design",
        "SCADA & PLC-based real-time control",
        "IoT-enabled smart monitoring",
        "Energy-efficient and sustainable systems",
        "Compliance with WHO, EPA, and ISO standards"
      ]
    }
  };

  // Handle learn more click
  const handleLearnMore = (productId, e) => {
    e.preventDefault();
    setActiveModal(productId);
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  // Close modal handler
  const closeModal = () => {
    setActiveModal(null);
    // Re-enable body scrolling when modal is closed
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="products section" id="products">
      <div className="container">
        <header className="products-head reveal">
          <span className="eyebrow">Manufacturing</span>
          <h2>Control panels, engineered in-house</h2>
          <p>
            GSIA designs, builds, and services electrical control panels — with HMI,
            PLC, IoT V-BOX, servo, and inverter integration tuned to each line.
          </p>
        </header>

        <div className="products-grid">
          {Object.keys(productDetails).map((productId, index) => {
            const product = productDetails[productId];
            const ref = `P/${String(index + 1).padStart(2, '0')}`;
            return (
              <article className="product-card" key={productId}>
                <div className="product-image-container">
                  <span className="product-ref">{ref}</span>
                  <img
                    src={product.image}
                    alt={`${product.title} product`}
                    className="product-image"
                    loading="lazy"
                  />
                </div>
                <div className="product-content">
                  <h3 className="product-title">{product.title}</h3>
                  <p className="product-description">{product.shortDesc}</p>
                  <button
                    className="product-link"
                    onClick={(e) => handleLearnMore(productId, e)}
                    aria-label={`Learn more about ${product.title}`}
                  >
                    Learn more
                    <span aria-hidden="true">&rarr;</span>
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Product Detail Modal */}
      {activeModal && (
        <div
          className="product-modal-overlay"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby={`modal-title-${activeModal}`}
        >
          <div className="product-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close-btn"
              onClick={closeModal}
              aria-label="Close modal"
            >
              ×
            </button>
            <div className="modal-image-container">
              <img
                src={productDetails[activeModal].image}
                alt={productDetails[activeModal].title}
                className="modal-image"
                loading="lazy"
              />
            </div>
            <div className="modal-content">
              <h2 id={`modal-title-${activeModal}`}>{productDetails[activeModal].title}</h2>
              <p className="modal-description">{productDetails[activeModal].fullDesc}</p>
              <h3>Key Features</h3>
              <ul className="feature-list">
                {productDetails[activeModal].features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <div className="modal-footer">
                <a href="#contact-us" className="contact-btn" onClick={closeModal}>
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}