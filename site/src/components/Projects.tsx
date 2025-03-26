import './MainPage.css';

const Projects = () => {
  return (
    <div className="content">
      <h1 className="title">Projects</h1>
      
      <div className="project-list">
        <div className="project-item">
          <h2>Project Name</h2>
          <p className="description">
            A brief description of the project and what problems it solves.
            Technologies used and key features implemented.
          </p>
          <div className="project-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub →</a>
            <a href="https://demo.com" target="_blank" rel="noopener noreferrer">Live Demo →</a>
          </div>
        </div>

        <div className="project-item">
          <h2>Another Project</h2>
          <p className="description">
            Description of another significant project, highlighting the technical 
            challenges and solutions implemented.
          </p>
          <div className="project-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub →</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects; 