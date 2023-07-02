import React, { FC } from 'react';
import Slider from './Slider';
import { useTranslate } from '../../../../features/locale';

import titleBg from 'public/images/roadmap-title-bg.png';
import settings from '../model/locale/translate.json';
import { useMediaQuery } from '@mui/material';

const Roadmap: FC = () => {
  const { t } = useTranslate(settings);
  const isLargerThan640 = useMediaQuery('(min-width: 640px)');

  return (
    <div
      className="max-w-[1220px] mx-auto py-20 sm:py-36 max-sm:px-5 max-xl:px-10"
      id="roadmap"
    >
      <div className="flex max-lg:flex-col lg:justify-between lg:items-end">
        <div
          style={{
            backgroundImage: `url('${titleBg.src}')`,
            backgroundPositionY: 'bottom',
            backgroundPositionX: 'left',
            backgroundRepeat: 'no-repeat',
            backgroundSize: isLargerThan640 ? undefined : '65%',
          }}
          className="-ml-1 sm:-ml-2 max-sm:w-72"
        >
          <h2 className="text-3xl sm:text-5xl font-extrabold max-w-md p-1 sm:p-2">
            {t('title')}
          </h2>
        </div>

        <p className="max-sm:text-sm max-lg:mt-2">{t('description')}</p>
      </div>

      <Slider />
    </div>
  );
};

export default Roadmap;
