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

  return (
    <div className={className}>
      <div>
        <p className="text-7xl font-black">{days}</p>
        <p className="font-medium text-xl">{t('timer').days}</p>
      </div>
      <div>
        <p className="text-7xl font-black">{hours}</p>
        <p className="font-medium text-xl">{t('timer').hours}</p>
      </div>
      <div>
        <p className="text-7xl font-black">{minutes}</p>
        <p className="font-medium text-xl">{t('timer').minutes}</p>
      </div>
      <div>
        <p className="text-7xl font-black">{seconds}</p>
        <p className="font-medium text-xl">{t('timer').seconds}</p>
      </div>
    </div>
  );
};

export default Timer;
