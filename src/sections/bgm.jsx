import React, { useEffect, useRef, useState } from 'react';

const BGM = ({ src }) => {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    audio.volume = isMuted ? 0 : 0.1;

    const playMusic = () => {
      if (!isMuted) {
        audio.play().catch(error => {
          console.error('Autoplay was prevented:', error);
        });
      }
    };

    // Start playing when component mounts
    playMusic();

    // Cleanup function
    return () => {
      // Stop the audio when component unmounts
      audio.pause();
      audio.currentTime = 0;
    };
  }, [src, isMuted]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src={src} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <div
        style={{
          position: 'fixed',
          bottom: '40px',
          right: '-20px',
          opacity: '0.9',
        }}
      >
        <button onClick={toggleMute}>{isMuted ? <img src='/logo/8.png' width={'50px'} height={'50px'}/> : <img src='/logo/7.png' width={'50px'} height={'50px'}/>}</button>
      </div>
    </>
  );
};

export default BGM;
