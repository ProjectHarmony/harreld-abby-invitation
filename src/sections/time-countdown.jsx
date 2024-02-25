import React from 'react';
import FlipCountdown from "@rumess/react-flip-countdown";

const TimeCountdown = () => {
  const targetDate = new Date('May 17, 2024 00:00:00').toISOString();
  const currentDate = new Date();

  // Calculate the difference in milliseconds between the target date and the current date
  const differenceInMillis = new Date(targetDate) - currentDate;
  // Convert milliseconds to months
  const monthsLeft = Math.floor(differenceInMillis / (1000 * 60 * 60 * 24 * 30));

  return (
    <div className="text-[#ffffff] mt-10">
      <p className='text-center mb-5 northwave text-5xl'>
        see you soon!
      </p>
      <FlipCountdown
        hideYear
        hideMonth={monthsLeft === 0}
        theme='dark'
        size='large'
        titlePosition='bottom'
        endAt={targetDate}
        monthTitle='MONTH'
        dayTitle='DAYS'
        hourTitle='HOURS'
        minuteTitle='MINUTES'
        secondTitle='SECONDS'
      />
    </div>
  );
};

export default TimeCountdown;
