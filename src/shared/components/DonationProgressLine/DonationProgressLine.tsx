import React, { FC, useEffect, useState } from 'react';

interface Props {
  width: number | string;
  currentProgress: number;
  maxProgress: number;
  className?: string;
}

const DonationProgressLine: FC<Props> = ({
  width,
  className,
  maxProgress,
  currentProgress,
}) => {
  const [firstCircleWidth, setFirstCircleWidth] = useState(4);
  const [secondCircleWidth, setSecondCircleWidth] = useState(4);
  const [lineWidth, setLineWidth] = useState(0);

  useEffect(() => {
    setWidths();
  }, [currentProgress]);

  function setWidths() {
    const progressProcent = +((currentProgress * maxProgress) / 100).toFixed(1);

    clearWidths();

    if (progressProcent === 0) return;

    if (progressProcent <= 2) {
      setFirstCircleWidth(4 - progressProcent * 2);
    } else {
      setFirstCircleWidth(0);
    }

    if (progressProcent >= 98) {
      setLineWidth(92);
      setSecondCircleWidth((100 - progressProcent) * 2);
      return;
    }

    if (progressProcent > 2) {
      setLineWidth(progressProcent >= 95.5 ? 92 : progressProcent - 4);
    }
  }

  function clearWidths() {
    setFirstCircleWidth(4);
    setSecondCircleWidth(4);
    setLineWidth(0);
  }

  const isMaxLineWidth = lineWidth < 92;

  return (
    <div className={className} style={{ width }}>
      <svg viewBox={`0 0 100 8`} xmlns="http://www.w3.org/2000/svg">
        <circle cx="2" cy="4" r="2" fill="#E2E2E2" />
        <line strokeWidth="1.5" stroke="#E2E2E2" x1="1" y1="4" x2="98" y2="4" />
        <circle cx="98" cy="4" r="2" fill="#E2E2E2" />

        <rect
          x="0"
          y="2"
          width="4"
          height="4"
          fill="#00d4a7"
          ry="10"
          style={{ clipPath: `inset(0px ${firstCircleWidth}px 0px 0px)` }}
        />
        <line
          strokeWidth={lineWidth === 0 ? '0' : '1.5'}
          stroke="#00d4a7"
          x1={isMaxLineWidth ? '4' : '3'}
          y1="4"
          x2={isMaxLineWidth ? lineWidth + 4 : lineWidth + 4.1}
          y2="4"
          strokeLinecap={isMaxLineWidth ? 'round' : undefined}
        />
        <rect
          x="96"
          y="2"
          width="4"
          height="4"
          fill="#00d4a7"
          ry="10"
          style={{ clipPath: `inset(0px ${secondCircleWidth}px 0px 0px)` }}
        />
      </svg>
    </div>
  );
};

export default DonationProgressLine;
