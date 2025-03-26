import { useState, useEffect } from 'react';
import CreationImage from './components/CreationImage';
import MainPage from './components/MainPage';
import './App.css';

function App() {
  const [showMainPage, setShowMainPage] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const handleAnimationEnd = () => {
      // Wait for 1 second after the zoom animation completes
      setTimeout(() => {
        setShowMainPage(true);
      }, 1000);
    };

    // Listen for a custom event that will be dispatched when the zoom animation ends
    window.addEventListener('zoomComplete', handleAnimationEnd);

    return () => {
      window.removeEventListener('zoomComplete', handleAnimationEnd);
    };
  }, []);

  return (
    <div className="app">
      {!showMainPage && (
        <CreationImage onAnimationComplete={() => setAnimationComplete(true)} />
      )}
      {showMainPage && <MainPage />}
    </div>
  );
}

export default App;
