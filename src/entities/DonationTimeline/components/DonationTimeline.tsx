import React, { FC, useState } from 'react';
import { Button, DonationProgressLine, getSplitNum } from '../../../shared';
import { useTranslate } from '../../../features/locale';
import settings from '../../../widgets/home-page/Title/model/locale/translate';
import { useMediaQuery } from '@mui/material';
import classNames from 'classnames';

interface Props {
  maxWidth: number;
  className?: string;
  textWhite?: boolean;
  size?: 'big' | 'small';
}

const DonationTimeline: FC<Props> = ({
  maxWidth,
  className,
  textWhite = false,
  size = 'big',
}) => {
  const { t } = useTranslate(settings);
  const [currentDonationSum, setCurrentDonationSum] = useState(5000000);
  const [maxDonationSum, setMaxDonationSum] = useState(20000000);
  const isLargerThan750 = useMediaQuery('(min-width: 750px)');

  return (
    <div style={{ maxWidth }} className={className}>
      <DonationProgressLine
        width={isLargerThan750 ? maxWidth : '100%'}
        currentProgress={currentDonationSum}
        maxProgress={maxDonationSum}
      />
      <div
        className={classNames(
          'flex max-[474px]:flex-col max-[474px]:gap-4 justify-between pt-2',
          {
            'min-[475px]:items-end': size === 'big',
          },
        )}
      >
        <div className="flex flex-col gap-1">
          <h6
            className={classNames('text-3xl font-extrabold', {
              'min-[900px]:text-4xl': size === 'big',
            })}
            style={{ color: '#00D4A7' }}
          >
            {getSplitNum(currentDonationSum)} {t('timeline').currency}
          </h6>
          <h6
            className={classNames('font-semibold text-lg', {
              'text-white': textWhite,
              'min-[900px]:text-xl': size === 'big',
            })}
          >
            {getSplitNum(maxDonationSum)} {t('timeline').currency}
          </h6>
        </div>
        <Button
          bgColor="#00D4A7"
          className="font-bold"
          style={{
            fontSize:
              size === 'small' ? '14px' : isLargerThan750 ? '20px' : '16px',
            height: 'fit-content',
            padding:
              size === 'small'
                ? '10px 15px'
                : isLargerThan750
                ? '20px 40px'
                : '15px 25px',
            color: '#000',
          }}
        >
          {t('timeline').btnText}
        </Button>
      </div>
    </div>
  );
};

export default DonationTimeline;
