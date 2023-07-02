import React, { FC } from 'react';

interface Props {
  width: number;
  className?: string;
}

const DonationProgressLine: FC<Props> = ({ width, className }) => {
  return (
    <div className={className}>
      <svg viewBox="0 0 100 40" xmlns="http://www.w3.org/2000/svg">
        <circle cx="2" cy="4" r="2" fill="blue" />
        <line strokeWidth="1.5" stroke="blue" x1="1" y1="4" x2="96" y2="4" />
        <circle cx="96" cy="4" r="2" fill="blue" />
      </svg>
    </div>
  );
};

export default DonationProgressLine;
