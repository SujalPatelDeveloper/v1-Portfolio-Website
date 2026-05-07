import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import './ContactForm.css';

const ContactForm = () => {
  const [status, setStatus] = useState("");
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS credentials missing!");
      setStatus("error");
      return;
    }

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then((result) => {
        setStatus("success");
        e.target.reset();
        setTimeout(() => setStatus(""), 5000);
      }, (error) => {
        console.error("EmailJS Error:", error);
        setStatus("error");
        setTimeout(() => setStatus(""), 5000);
      });
  };

  return (
    <div className="contact-form-container">
      <motion.div 
        className="form-wrapper glass"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3>Send me a Message</h3>
        <p>I'm always open to discussing new projects or creative ideas.</p>

        <form ref={formRef} onSubmit={handleSubmit} className="sketchy-form">
          <div className="form-group">
            <input type="text" name="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <textarea name="message" placeholder="What's on your mind?" rows="5" required></textarea>
          </div>
          
          <button type="submit" className="btn btn-primary submit-btn" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send Message →"}
          </button>
        </form>

        <AnimatePresence>
          {status === "success" && (
            <motion.div 
              className="form-status success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
            >
              🎉 Message sent successfully! I'll get back to you soon.
            </motion.div>
          )}
          {status === "error" && (
            <motion.div 
              className="form-status error"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
            >
              ❌ Something went wrong. Please try again later.
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ContactForm;
