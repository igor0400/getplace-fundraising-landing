import React, { FC } from 'react';
import { useTranslate } from '../../../../features/locale';
import Image from 'next/image';
import { useMediaQuery } from '@mui/material';
import Timer from './Timer';
import DonationTimeline from '../../../../entities/DonationTimeline';

import settings from '../model/locale/translate';
import background from 'public/images/title-bg.png';
import textBg from 'public/images/title-text-bg.png';

const Title: FC = () => {
  const { t } = useTranslate(settings);
  const isLargerThan1200 = useMediaQuery('(min-width: 1200px)');
  const isLargerThan1100 = useMediaQuery('(min-width: 1100px)');
  const isLargerThan1024 = useMediaQuery('(min-width: 1024px)');
  const isLargerThan640 = useMediaQuery('(min-width: 640px)');
  const isLargerThan425 = useMediaQuery('(min-width: 425px)');

  return (
    <div
      style={
        isLargerThan1100
          ? {
              backgroundImage: `url('${background.src}')`,
              backgroundPositionY: '40%',
              backgroundPositionX: 'right',
              backgroundRepeat: 'no-repeat',
              backgroundSize: isLargerThan1200 ? undefined : '40%',
            }
          : undefined
      }
      className="max-w-[2000px] mx-auto max-2xl:pt-0 2xl:pt-14 sm:pb-20"
    >
      <div className="h-full max-w-[1360px] w-full mx-auto min-[900px]:flex max-sm:my-20 items-center gap-6 min-[1700px]:gap-36 px-5 sm:px-10">
        <div className="py-16 sm:py-16 flex flex-col justify-center">
          <div
            className="flex flex-col justify-end w-[300px] min-[425px]:w-[384px] sm:w-[576px] lg:w-[550px]"
            style={{
              backgroundImage: `url('${textBg.src}')`,
              backgroundPositionY: 'bottom',
              backgroundPositionX: 'left',
              backgroundRepeat: 'no-repeat',
              backgroundSize: isLargerThan1024 ? undefined : '72% 50%',
            }}
          >
            <h1
              className="lg:leading-[1.1] text-4xl min-[425px]:text-5xl sm:text-7xl lg:text-8xl font-extrabold"
              dangerouslySetInnerHTML={{ __html: t('title') }}
            ></h1>
          </div>
          <p className="mt-5 sm:mt-8 min-[425px]:text-lg sm:text-xl max-w-[280px] min-[425px]:max-w-sm">
            {t('description')}
          </p>

          <DonationTimeline maxWidth={600} className="mt-10" />
        </div>
        <div className="flex items-center min-[1800px]:ml-20 max-[1300px]:mx-auto">
          <Image
            src={t('images').phone}
            alt="phone"
            className="w-fit h-fit z-10 max-[1300px]:hidden"
          />
          <Timer className="flex min-[900px]:flex-col gap-5 text-center max-[550px]:mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default Title;
