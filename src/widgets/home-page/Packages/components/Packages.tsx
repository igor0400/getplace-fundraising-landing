import { FC } from 'react';
import { TitleCard } from '../../../../entities/home-page/PackagesCards';

import settings from '../model/locale/translate.json';
import { useTranslate } from '../../../../features/locale';

const Packages: FC = () => {
  const { t } = useTranslate(settings);

  return (
    <div
      className="py-20 lg:pb-36 max-sm:px-5 max-xl:px-10"
      style={{ background: '#D0FFF5' }}
    >
      <div className="max-w-[1220px] mx-auto">
        <TitleCard text={t('title1')} />
      </div>
    </div>
  );
};

export default Packages;
