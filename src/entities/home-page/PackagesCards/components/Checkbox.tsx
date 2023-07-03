import React, { FC, useEffect, useState } from 'react';

interface Props {
  bgColor?: string;
  cbColor?: string;
  width?: string | number;
  height?: string | number;
}

const Checkbox: FC<Props> = ({
  bgColor = '#FCC70A',
  cbColor = '#1E1E1E',
  width = '38',
  height = '39',
}) => {
  const [isAnim, setIsAnim] = useState(true);

  useEffect(() => {
    const interval = setInterval(changeIsAnim, 4000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  function changeIsAnim() {
    setIsAnim((state) => !state);
  }

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 45 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={isAnim ? 'spin-animation' : undefined}
    >
      <path
        d="M18.6419 3.52958C17.4137 4.69065 15.7162 5.23526 14.0314 5.00882C11.0721 4.61109 8.32036 6.58523 7.78894 9.48737C7.48639 11.1396 6.43733 12.5654 4.9395 13.3601C2.30856 14.756 1.25751 17.9502 2.55508 20.6065C3.2938 22.1188 3.2938 23.8812 2.55508 25.3935C1.25751 28.0498 2.30856 31.244 4.9395 32.6399C6.43733 33.4346 7.48639 34.8604 7.78894 36.5126C8.32036 39.4148 11.0721 41.3889 14.0314 40.9912C15.7162 40.7647 17.4137 41.3094 18.6419 42.4704C20.7994 44.5099 24.2006 44.5099 26.3581 42.4704C27.5863 41.3094 29.2838 40.7647 30.9686 40.9912C33.9279 41.3889 36.6796 39.4148 37.2111 36.5126C37.5136 34.8604 38.5627 33.4346 40.0605 32.6399C42.6914 31.244 43.7425 28.0498 42.4449 25.3935C41.7062 23.8812 41.7062 22.1188 42.4449 20.6065C43.7425 17.9502 42.6914 14.756 40.0605 13.3601C38.5627 12.5654 37.5136 11.1396 37.2111 9.48737C36.6796 6.58523 33.9279 4.61109 30.9686 5.00882C29.2838 5.23526 27.5863 4.69065 26.3581 3.52958C24.2006 1.49014 20.7994 1.49014 18.6419 3.52958Z"
        fill={bgColor}
        stroke={bgColor}
        stroke-width="2.56103"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.7148 20.8282L21.6284 28.6552L32.4705 17.9316"
        stroke={cbColor}
        stroke-width="2.56103"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Checkbox;
