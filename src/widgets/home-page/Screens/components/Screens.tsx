import React, { FC } from 'react';
import ScreensCard from '../../../../entities/home-page/ScreensCard';
import { useTranslate } from '../../../../features/locale';

import settings from '../model/locale/translate';

const Screens: FC = () => {
  const { t } = useTranslate(settings);

  return (
    <div
      className="pt-20 lg:py-36 h-full w-full max-w-[1920px] mx-auto"
      id="specialFeatures"
    >
      {t('screens').map((item: any, i: number) => (
        <ScreensCard
          {...item}
          id={i}
          key={item.title}
          mt={i === 0 ? false : true}
        />
      ))}
    </div>
  );
};

export default Screens;
