import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <>
      <Navbar />
      <div className="contact-page">
        <div className="contact-header">
          <div className="contact-header-watermark">CONTACT</div>
          <div className="contact-header-label">Get In Touch</div>
          <h1 className="contact-title">CONTACT<br /><span>US</span></h1>
          <p className="contact-subtitle">Questions about your order? We're here to help.</p>
        </div>

        <div className="contact-layout">
          {/* Info Panel */}
          <div className="contact-info-panel">
            <div className="info-section">
              <div className="info-section-label">Our Location</div>
              <div className="info-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <div>
                  <strong>Fenatic Wear Store</strong>
                  <p>Thoothukudi, Tamil Nadu<br />India — 628 001</p>
                </div>
              </div>
            </div>

            <div className="info-section">
              <div className="info-section-label">Contact Details</div>
              <div className="info-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 13.5 19.79 19.79 0 01.1 4.9 2 2 0 012.08 2.72h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.91a16 16 0 006.18 6.18l1.28-1.28a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0121.28 17z"/>
                </svg>
                <div>
                  <strong>+91 98765 43210</strong>
                  <p>Mon–Sat, 9am–7pm IST</p>
                </div>
              </div>
              <div className="info-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <div>
                  <strong>support@fenaticwear.com</strong>
                  <p>We reply within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="info-section">
              <div className="info-section-label">We Accept</div>
              <div className="payment-grid">
                <div className="payment-item">
                  <span>💳</span> Credit Card
                </div>
                <div className="payment-item">
                  <span>🏦</span> Debit Card
                </div>
                <div className="payment-item">
                  <span>📱</span> UPI / GPay
                </div>
                <div className="payment-item">
                  <span>🏧</span> Net Banking
                </div>
                <div className="payment-item">
                  <span>💰</span> Cash on Delivery
                </div>
                <div className="payment-item">
                  <span>🔄</span> EMI Available
                </div>
              </div>
            </div>

            <div className="info-section">
              <div className="info-section-label">Follow Us</div>
              <div className="social-links">
                <a href="#!" className="social-link">
                  <img src="/images/instagram.gif" alt="Instagram" onError={(e) => { e.target.style.display='none'; }} />
                  Instagram
                </a>
                <a href="#!" className="social-link">
                  <img src="/images/whatsapp.gif" alt="WhatsApp" onError={(e) => { e.target.style.display='none'; }} />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Form Panel */}
          <div className="contact-form-panel">
            {submitted && (
              <div className="contact-success">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Message sent! We'll get back to you within 24 hours.
              </div>
            )}

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input className="form-input" type="text" name="name" placeholder="Your full name"
                    value={form.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input className="form-input" type="tel" name="phone" placeholder="+91 00000 00000"
                    value={form.phone} onChange={handleChange} />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Email Address *</label>
                <input className="form-input" type="email" name="email" placeholder="you@example.com"
                  value={form.email} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label className="form-label">Subject *</label>
                <select className="form-input form-select" name="subject" value={form.subject} onChange={handleChange} required>
                  <option value="">Select a subject</option>
                  <option value="order">Order Enquiry</option>
                  <option value="return">Return / Exchange</option>
                  <option value="payment">Payment Issue</option>
                  <option value="sizing">Sizing Help</option>
                  <option value="wholesale">Wholesale / Bulk Order</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Message *</label>
                <textarea className="form-input form-textarea" name="message" placeholder="Tell us how we can help..."
                  value={form.message} onChange={handleChange} required rows="5" />
              </div>

              <button type="submit" className="contact-submit-btn">
                <span>Send Message</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="22" y1="2" x2="11" y2="13"/>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
