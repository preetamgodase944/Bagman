'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import './Products.css';

const product_1a = '/assets/product_1a.png';
const product_2 = '/assets/product_2.png';
const product_3 = '/assets/product_3.png';
const product_4 = '/assets/product_4.png';

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

  const activeProduct = activeModal ? productDetails[activeModal] : null;

  const openModal = (productId, e) => {
    e.preventDefault();
    setActiveModal(productId);
  };

  const closeModal = () => setActiveModal(null);

  // While a modal is open, lock body scroll and close on Escape — restoring
  // the previous overflow value (and the listener) on close/unmount.
  useEffect(() => {
    if (!activeModal) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e) => {
      if (e.key === 'Escape') setActiveModal(null);
    };
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [activeModal]);

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
                  <Image
                    src={product.image}
                    alt={`${product.title} product`}
                    fill
                    sizes="(max-width: 768px) 100vw, 360px"
                    className="product-image"
                  />
                </div>
                <div className="product-content">
                  <h3 className="product-title">{product.title}</h3>
                  <p className="product-description">{product.shortDesc}</p>
                  <button
                    className="product-link"
                    onClick={(e) => openModal(productId, e)}
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
      {activeProduct && (
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
              <Image
                src={activeProduct.image}
                alt={activeProduct.title}
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="modal-image"
              />
            </div>
            <div className="modal-content">
              <h2 id={`modal-title-${activeModal}`}>{activeProduct.title}</h2>
              <p className="modal-description">{activeProduct.fullDesc}</p>
              <h3>Key Features</h3>
              <ul className="feature-list">
                {activeProduct.features.map((feature) => (
                  <li key={feature}>{feature}</li>
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