import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date('August 24, 2024 00:00:00') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const addLeadingZero = value => {
    return value < 10 ? `0${value}` : value;
  };

  return (
    <div className="border border-black p-4 rounded text-black font-bold">
      <div className="flex items-center justify-center space-x-4">
        <div className="flex flex-col items-center">
          <span className="text-3xl">{addLeadingZero(timeLeft.days)}</span>
          <span>Days</span>
        </div>
        <span className="text-3xl">:</span>
        <div className="flex flex-col items-center">
          <span className="text-3xl">{addLeadingZero(timeLeft.hours)}</span>
          <span>Hours</span>
        </div>
        <span className="text-3xl">:</span>
        <div className="flex flex-col items-center">
          <span className="text-3xl">{addLeadingZero(timeLeft.minutes)}</span>
          <span>Minutes</span>
        </div>
        <span className="text-3xl">:</span>
        <div className="flex flex-col items-center">
          <span className="text-3xl">{addLeadingZero(timeLeft.seconds)}</span>
          <span>Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
