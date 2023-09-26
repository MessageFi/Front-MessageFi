import { useState, useEffect } from 'react';

function CountdownTimer({ initialTargetDate }) {
  const [targetDate, setTargetDate] = useState(null);
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const savedDateStr = localStorage.getItem('countdownTargetDate');
    const dateToSet = savedDateStr ? new Date(savedDateStr) : initialTargetDate;
    setTargetDate(dateToSet);
    setTimeLeft(calculateTimeLeft(dateToSet));
  }, [initialTargetDate]);

  useEffect(() => {
    if (!targetDate) return;

    localStorage.setItem('countdownTargetDate', targetDate.toISOString());
    const intervalId = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  function calculateTimeLeft(date) {
    const now = new Date();
    const timeDifference = date - now;

    if (timeDifference <= 0) return { hours: 0, minutes: 0, seconds: 0 };

    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return { hours, minutes, seconds };
  }

  function formatTimeLeft(time) {
    return `${String(time.hours).padStart(2, '0')}:${String(time.minutes).padStart(2, '0')}:${String(time.seconds).padStart(2, '0')}`;
  }

  if (!targetDate) return null;

  return (
    <div className="text-center font-mono text-3xl">
      {formatTimeLeft(timeLeft)}
    </div>
  );
}

export default CountdownTimer;
