import React, { FC, useState } from 'react';
import { Button, DonationProgressLine, getSplitNum } from '../../../../shared';
import { useTranslate } from '../../../../features/locale';
import settings from '../model/locale/translate';
import { useMediaQuery } from '@mui/material';

const DonationTimeline: FC = () => {
  const { t } = useTranslate(settings);
  const [currentDonationSum, setCurrentDonationSum] = useState(5000000);
  const [maxDonationSum, setMaxDonationSum] = useState(20000000);
  const isLargerThan750 = useMediaQuery('(min-width: 750px)');
  const isLargerThan475 = useMediaQuery('(min-width: 475px)');

  return (
    <div className="max-w-[600px]">
      <DonationProgressLine
        className="mt-10"
        width={isLargerThan750 ? 600 : '100%'}
        currentProgress={currentDonationSum}
        maxProgress={maxDonationSum}
      />
      <div className="flex max-[474px]:flex-col max-[474px]:gap-4 justify-between min-[475px]:items-end pt-2">
        <div className="flex flex-col gap-1">
          <h6
            className="text-4xl max-[900px]:text-3xl font-extrabold"
            style={{ color: '#00D4A7' }}
          >
            {getSplitNum(currentDonationSum)} {t('timeline').currency}
          </h6>
          <h6 className="font-semibold text-xl max-[900px]:text-lg">
            {getSplitNum(maxDonationSum)} {t('timeline').currency}
          </h6>
        </div>
        <Button
          bgColor="#00D4A7"
          className="font-bold"
          style={{
            fontSize: isLargerThan750 ? '20px' : '16px',
            height: 'fit-content',
            padding: isLargerThan750 ? '20px 40px' : '15px 25px',
          }}
        >
          {t('timeline').btnText}
        </Button>
      </div>
    </div>
  );
};

export default DonationTimeline;
