import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ContactForm.css';

const ContactForm = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    
    const formData = new FormData(e.target);
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE"); // The user will need to replace this or I can provide instructions

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
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

        <form onSubmit={handleSubmit} className="sketchy-form">
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
