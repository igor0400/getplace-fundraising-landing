import { useEffect, useState } from 'react';
import { getZero } from '../assets/getZero';

export const useTimer = (deadline: string) => {
  const [days, setDays] = useState('00');
  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');

  useEffect(() => {
    const total = Date.parse(deadline) - Date.parse(new Date().toISOString());

    if (total > 0) {
      const timeInterval = setInterval(updateClock, 1000);

      updateClock();

      return () => {
        clearInterval(timeInterval);
      };
    }
  }, []);

  function getTimeRemeaining() {
    const t = Date.parse(deadline) - Date.parse(new Date().toISOString()),
      days = Math.floor(t / (1000 * 60 * 60 * 24)),
      hours = Math.floor((t / (1000 * 60 * 60)) % 24),
      minutes = Math.floor((t / 1000 / 60) % 60),
      seconds = Math.floor((t / 1000) % 60);

    return {
      total: t,
      days,
      hours,
      minutes,
      seconds,
    };
  }

  function updateClock() {
    const t = getTimeRemeaining();

    setDays(getZero(t.days));
    setHours(getZero(t.hours));
    setMinutes(getZero(t.minutes));
    setSeconds(getZero(t.seconds));
  }

  return { days, hours, minutes, seconds };
};
