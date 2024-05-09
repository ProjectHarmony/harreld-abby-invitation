import React, { useEffect, useRef, useState } from 'react';

const BGM = ({ src }) => {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [showAnimation, setShowAnimation] = useState(true);

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

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
          display: 'flex',
          alignItems: 'center',
          position: 'fixed',
          bottom: '40px',
         
          opacity: '1',
          color: 'black',
        }}
      >
        
        <div style={{ marginLeft: '10px' }}>
          <button onClick={toggleMute}>
            {isMuted ? (
              <img src="/logo/mute.png" width={'80px'} height={'80px'} />
            ) : (
              <img src="/logo/unmute.png" width={'80px'} height={'80px'} />
            )}
          </button>
        </div>
        <div>
          {showAnimation && (
            <TypewriterAnimation text="Click here for music" />
          )}
        </div>
      </div>
    </>
  );
};

const TypewriterAnimation = ({ text }) => {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      if (isTyping) {
        setTypedText(text.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex => currentIndex + 1);
        if (currentIndex === text.length) {
          setIsTyping(false);
        }
      } else {
        setTypedText(text.substring(0, currentIndex - 1));
        setCurrentIndex(currentIndex => currentIndex - 1);
        if (currentIndex === 0) {
          clearInterval(timer);
        }
      }
    }, 100);

    return () => clearInterval(timer);
  }, [text, currentIndex, isTyping]);

  return <span style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#362917' }}>{typedText}</span>;
};

export default BGM;
