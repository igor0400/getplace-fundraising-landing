import React, { FC } from 'react';
import {
  CustomCardProps,
  ImageCard,
  TitleCard,
  CustomCard,
  ImageCardProps,
} from '../../../../entities/home-page/PackagesCards';

import settings from '../model/locale/translate';
import { useTranslate } from '../../../../features/locale';

interface CardPack {
  title: string;
  cardLists: Array<CustomCardProps | ImageCardProps>[];
}

const Packages: FC = () => {
  const { t } = useTranslate(settings);

  return (
    <div
      className="py-20 lg:pb-36 max-sm:px-5 max-xl:px-10"
      style={{ background: '#D0FFF5' }}
    >
      <div className="max-w-[1220px] mx-auto flex flex-col gap-10 sm:gap-20">
        {t('cardPacks').map(({ title, cardLists }: CardPack, i: number) => (
          <div key={i}>
            <TitleCard text={title} />
            <div className="pt-5 sm:pt-10 flex flex-col gap-5 sm:gap-10">
              {cardLists.map((list, i) => (
                <div
                  className="grid gap-5 sm:gap-10"
                  style={{
                    gridTemplateColumns: `repeat(auto-fit, minmax(${360}px, 1fr))`,
                  }}
                  key={i}
                >
                  {list.map((card, i) => (
                    <React.Fragment key={i}>
                      {card.type === 'custom-card' ? (
                        <CustomCard {...card} />
                      ) : card.type === 'image' ? (
                        <ImageCard {...card} />
                      ) : undefined}
                    </React.Fragment>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;
