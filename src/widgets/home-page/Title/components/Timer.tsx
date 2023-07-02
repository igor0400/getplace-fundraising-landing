import React, { FC } from 'react';
import { useTimer } from '../../../../shared';

import settings from '../model/locale/translate';
import { useTranslate } from '../../../../features/locale';

interface Props {
  className?: string;
}

const Timer: FC<Props> = ({ className }) => {
  const { t } = useTranslate(settings);
  const { days, hours, minutes, seconds } = useTimer('2023-08-01');

  const items = [
    {
      count: days,
      title: t('timer').days,
    },
    {
      count: hours,
      title: t('timer').hours,
    },
    {
      count: minutes,
      title: t('timer').minutes,
    },
    {
      count: seconds,
      title: t('timer').seconds,
    },
  ];

  return (
    <div className={className}>
      {items.map(({ count, title }, i) => (
        <div
          className="max-[900px]:flex max-[550px]:block max-[900px]:gap-1 items-end"
          key={i}
        >
          <p className="text-7xl max-[900px]:text-4xl max-[550px]:text-3xl font-black">
            {count}
          </p>
          <p className="font-medium max-[900px]:font-bold text-xl  max-[350px]:text-lg">
            {title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Timer;
