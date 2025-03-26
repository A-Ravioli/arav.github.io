import './MainPage.css';

const Contact = () => {
  return (
    <div className="content">
      <h1 className="title">Contact</h1>
      
      <div className="contact-info">
        <p className="description">
          I'm always interested in hearing about new projects and opportunities.
          Feel free to reach out through any of the following channels:
        </p>
        
        <div className="contact-links">
          <a href="mailto:your.email@example.com" className="contact-link">
            <span>Email</span>
            <span className="arrow">→</span>
          </a>
          
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="contact-link">
            <span>GitHub</span>
            <span className="arrow">→</span>
          </a>
          
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="contact-link">
            <span>LinkedIn</span>
            <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact; 