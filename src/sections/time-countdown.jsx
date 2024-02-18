import React from 'react';
import Countdown from 'react-countdown';

const TimeCountdown = () => {
  const targetDate = new Date('May 17, 2024 00:00:00').getTime();

  return (
    <div>
      <Countdown
        date={targetDate}
        intervalDelay={0}
        precision={3}
        renderer={({ days, hours, minutes, seconds }) => (
          <div className='font-protest-riot font-bold mt-5 text-white text-3xl text-center'>
            <div>{days < 10 ? `0${days}` : days} : {hours < 10 ? `0${hours}` : hours} : {minutes < 10 ? `0${minutes}` : minutes} : {seconds < 10 ? `0${seconds}` : seconds}</div>
            <div className="text-sm text-gray-300 text-center">
              Days Hours Minutes Seconds
            </div>

            <div className="text-1xl text-white text-center mt-2">
              Until Wedding
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default TimeCountdown;
