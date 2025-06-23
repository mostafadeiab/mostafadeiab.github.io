import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => (
  <section id="contact" className="section contact">
    <h2 className="section-title">Contact</h2>
    <div className="contact-content">
      <p>Feel free to reach out via email or connect with me on social media.</p>
      <div className="contact-links">
        <a href="mailto:general@mostafadeiab.com" className="contact-link"><Mail size={20} /> Email</a>
        <a href="https://linkedin.com/in/mostafa-deiab" target="_blank" rel="noopener noreferrer" className="contact-link"><Linkedin size={20} /> LinkedIn</a>
        <a href="https://github.com/mostafadeiab" target="_blank" rel="noopener noreferrer" className="contact-link"><Github size={20} /> GitHub</a>
      </div>
    </div>
  </section>
);

export default Contact;