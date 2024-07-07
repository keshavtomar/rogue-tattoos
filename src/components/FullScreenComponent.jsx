import React, { useRef, useEffect } from 'react';

function FullscreenComponent() {
  const containerRef = useRef(null);

  const enterFullscreen = () => {
    if (containerRef.current.requestFullscreen) {
      containerRef.current.requestFullscreen();
    } else if (containerRef.current.mozRequestFullScreen) { /* Firefox */
      containerRef.current.mozRequestFullScreen();
    } else if (containerRef.current.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
      containerRef.current.webkitRequestFullscreen();
    } else if (containerRef.current.msRequestFullscreen) { /* IE/Edge */
      containerRef.current.msRequestFullscreen();
    }
  };

  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { /* Firefox */
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE/Edge */
      document.msExitFullscreen();
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      if (!document.fullscreenElement) {
        enterFullscreen();
      } else {
        exitFullscreen();
      }
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div ref={containerRef} style={{ height: '100vh', backgroundColor: '#f0f0f0' }}>
      <h1>Press Escape to Toggle Fullscreen</h1>
    </div>
  );
}

export default FullscreenComponent;
