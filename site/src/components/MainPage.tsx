import { useEffect, useState } from 'react';
import './MainPage.css';

const MainPage = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Start fade in after component mounts
    const timer = setTimeout(() => {
      setVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`main-page ${visible ? 'visible' : ''}`}>
      <nav className="nav-bar">
        <div className="nav-left">
          <a href="/" className="logo">A</a>
        </div>
        <div className="nav-right">
          <a href="#projects">projects</a>
          <a href="#contact">contact</a>
          <a href="#blog">blog</a>
        </div>
      </nav>

      <main className="content">
        {/* <div className="announcement">
          <span>Currently building something interesting</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" />
          </svg>
        </div> */}

        <h1 className="title">Arav's Website</h1>
        
        <div className="description">
          <p>
            I build software that solves real problems. From web applications to AI systems,
            I focus on creating elegant solutions that make a difference. Need a custom tool
            or application? Let's build it together.
          </p>
        </div>
      </main>
    </div>
  );
};

export default MainPage; 