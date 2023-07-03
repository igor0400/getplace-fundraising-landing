import classNames from 'classnames';
import React, { FC } from 'react';
import { CustomCardProps } from '../model/types/custom-card';
import { Button, getSplitNum } from '../../../../shared';
import Checkbox from './Checkbox';
import { useMediaQuery } from '@mui/material';

const CustomCard: FC<CustomCardProps> = ({
  title,
  price,
  options,
  currency,
  expDate,
  till,
  arrow,
  bgColor = 'white',
  btn,
  className,
  style,
}) => {
  const isLargerThan640 = useMediaQuery('(min-width: 640px)');

  return (
    <div
      style={{ ...style, backgroundColor: bgColor }}
      className={classNames(
        'px-6 py-5 rounded-2xl flex flex-col justify-between relative',
        {
          [className ?? '']: className,
        },
      )}
    >
      {arrow?.position === 'top' && (
        <div className="absolute -top-4 -right-4 max-sm:hidden">
          <Checkbox {...arrow} width={45} height={46} />
        </div>
      )}
      <div>
        <div className="flex gap-3 items-center">
          <h3 className="font-extrabold text-2xl sm:text-3xl">{title}</h3>
          {arrow?.position === 'middle' ||
          (arrow?.position && !isLargerThan640) ? (
            <Checkbox {...arrow} />
          ) : undefined}
        </div>
        <ul className="list-inside py-5 pl-1">
          {options.map(({ text, type }, i) => (
            <li
              className={classNames('list-disc', {
                'opacity-20': type === 'disabled',
                'font-bold': type === 'bold',
                'font-medium': type !== 'bold',
                'mt-4': i !== 0,
              })}
              dangerouslySetInnerHTML={{ __html: text }}
              key={i}
            ></li>
          ))}
        </ul>
      </div>
      <div className="w-full">
        <div className="flex justify-between items-end">
          <p className="font-semibold text-xl">
            {getSplitNum(price)} {currency}
          </p>
          <p className="opacity-40 font-medium">
            {till} {expDate}
          </p>
        </div>
        <Button
          className="mt-4 font-bold text-xl w-full"
          style={{ backgroundColor: btn.bgColor ?? '#FCC70A' }}
        >
          {btn.text}
        </Button>
      </div>
    </div>
  );
};

export default CustomCard;
