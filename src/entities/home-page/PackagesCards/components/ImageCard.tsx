import classNames from 'classnames';
import React, { FC } from 'react';
import Image from 'next/image';
import { ImageCardProps } from '../model/types/custom-card';

const ImageCard: FC<ImageCardProps> = ({ src, style, className }) => {
  return (
    <div
      style={style}
      className={classNames('rounded-2xl', {
        [className ?? '']: className,
      })}
    >
      <Image src={src} alt="card-img" style={{ width: '100%' }} />
    </div>
  );
};

export default ImageCard;
