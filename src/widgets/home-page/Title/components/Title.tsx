import React, { FC } from 'react';
import { useTranslate } from '../../../../features/locale';
import Image from 'next/image';
import { useMediaQuery } from '@mui/material';
import classNames from 'classnames';
import Timer from './Timer';

import settings from '../model/locale/translate';

import background from 'public/images/title-bg.png';
import textBg from 'public/images/title-text-bg.png';
import { DonationProgressLine } from '../../../../shared';

const Title: FC = () => {
  const { t } = useTranslate(settings);
  const isLargerThan1024 = useMediaQuery('(min-width: 1024px)');
  const isLargerThan640 = useMediaQuery('(min-width: 640px)');
  const isLargerThan425 = useMediaQuery('(min-width: 425px)');

  return (
    <div
      style={
        isLargerThan1024
          ? {
              backgroundImage: `url('${background.src}')`,
              backgroundPositionY: '40%',
              backgroundPositionX: 'right',
              backgroundRepeat: 'no-repeat',
            }
          : undefined
      }
      className={classNames(
        'max-w-[2000px] mx-auto max-[1160px]:pt-20 max-2xl:pt-10 2xl:pt-14 sm:pb-20',
        {
          'full-height': !isLargerThan1024,
        },
      )}
    >
      <div className="h-full max-w-[1360px] w-full mx-auto flex max-lg:my-auto items-center gap-6 min-[1700px]:gap-36 px-5 sm:px-10">
        <div className="py-36 lg:h-[590px] flex flex-col justify-center">
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
          <p className="mt-5 sm:mt-8 min-[425px]:text-lg sm:text-xl leading-7 min-[425px]:leading-8 max-w-[280px] min-[425px]:max-w-sm">
            {t('description')}
          </p>
          <DonationProgressLine className="mt-10" width={1000} />
        </div>
        <div className="flex items-center min-[1800px]:ml-20">
          <Image
            src={t('images').phone}
            alt="phone"
            className="w-fit h-fit z-10 max-[1160px]:hidden"
          />
          <Timer className="flex flex-col gap-5 text-center" />
        </div>
      </div>
    </div>
  );
};

export default Title;
