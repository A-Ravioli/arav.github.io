import { useEffect, useRef, useState } from 'react';
import { lineSpinner } from 'ldrs';
import './CreationImage.css';

lineSpinner.register();

const CreationImage = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isZooming, setIsZooming] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        const scrollPercent = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        if (scrollPercent > 0 && scrollPercent < 1) {
          imageRef.current.style.transform = `scale(${1 + scrollPercent * 0.1})`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    setIsLoading(true);
    
    // After 3 seconds of loading
    setTimeout(() => {
      setIsZooming(true);
    }, 3000);
  };

  return (
    <div className={`image-container ${isZooming ? 'zooming' : ''}`} ref={imageRef}>
      <div className="creation-image" />
      <button 
        className={`start-button ${isLoading || isZooming ? 'loading' : ''} ${isZooming ? 'zooming' : ''}`}
        onClick={handleClick}
        disabled={isLoading || isZooming}
      >
        {!isLoading && !isZooming && <span className="button-text">open</span>}
        {(isLoading || isZooming) && (
          <l-line-spinner
            size="40"
            stroke="3"
            speed="1"
            color="white"
          ></l-line-spinner>
        )}
      </button>
    </div>
  );
};

export default CreationImage; 