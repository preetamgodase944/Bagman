'use client';

import './Contact.css';
import Image from 'next/image';
import { useState } from 'react';

const mail_icon = '/assets/mail-icon.png';
const phone_icon = '/assets/phone-icon.png';
const location_icon = '/assets/location-icon.png';
const whatsapp_icon = '/assets/whatsapp.svg';

export default function Contact() {

  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    setIsSubmitting(true);
    setResult("Sending....");

    try {
      const formData = new FormData(form);
      formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        setResult("Message sent — we'll be in touch shortly.");
        form.reset();
      } else {
        console.error("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error", error);
      setResult("Something went wrong. Please try again, or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section" id="contact-us">
      <div className="container contact-grid">
        <div className="contact-info reveal">
          <span className="eyebrow">Contact</span>
          <h2>Let&rsquo;s talk about your line</h2>
          <p>
            Tell us what you&rsquo;re running and what it needs to do. Send a message
            through the form, or reach us directly below.
          </p>

          <ul className="contact-channels">
            <li>
              <Image src={mail_icon} alt="" width={22} height={22} />
              <div>
                <span className="channel-key">Email</span>
                <a href="mailto:reach.gsia@gmail.com">reach.gsia@gmail.com</a>
              </div>
            </li>
            <li>
              <Image src={phone_icon} alt="" width={22} height={22} />
              <div>
                <span className="channel-key">Phone</span>
                <a href="tel:+917349443674">+91 73494 43674</a>
              </div>
            </li>
            <li>
              <Image src={location_icon} alt="" width={22} height={22} />
              <div>
                <span className="channel-key">Workshop</span>
                <span className="channel-val">Mallathhalli, Bengaluru 560056</span>
              </div>
            </li>
          </ul>

          <a
            className="whatsapp-cta"
            href="https://wa.me/917349443674"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={whatsapp_icon} alt="" width={20} height={20} />
            Chat on WhatsApp
          </a>
        </div>

        <div className="contact-form-wrap">
          <form onSubmit={onSubmit}>
            <label htmlFor='name'>Name</label>
            <input id='name' type='text' name='name' placeholder='Your name' required />

            <label htmlFor='phone'>Phone number</label>
            <input id='phone' type='tel' name='phone' placeholder='Your mobile number' required />

            <label htmlFor='message'>Message</label>
            <textarea id='message' name='message' rows={6} placeholder='What can we help you automate?' required />

            <button type='submit' className='btn btn--primary contact-submit' disabled={isSubmitting}>
              {isSubmitting ? 'Sending…' : 'Send message'}
            </button>

            {result && <span className="form-result">{result}</span>}
          </form>
        </div>
      </div>
    </section>
  );
}
