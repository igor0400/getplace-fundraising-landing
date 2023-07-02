import React, { FC } from 'react';
import { Button, useTypedSelector } from '../../../shared';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import { useTranslate } from '../../../features/locale';

import settings from '../model/locale/translate.json';

interface Props {
  className?: string;
}

const Toolbar: FC<Props> = ({ className }) => {
  const router = useRouter();
  const { t } = useTranslate(settings);
  const lang = useTypedSelector((state) => state.locales.lang);

  const handleChangeLand = (lang: string) => {
    router.push(`/${lang}/${router.asPath.split('/').slice(2).join('/')}`);
  };

  return (
    <div className={className}>
      <div className="flex gap-1 h-fit">
        <button
          className={classNames('', {
            'opacity-50': lang !== 'en',
            'font-bold': lang === 'en',
          })}
          onClick={() => handleChangeLand('en')}
        >
          EN
        </button>
        <span className="opacity-50">/</span>
        <button
          className={classNames('', {
            'opacity-50': lang !== 'ru',
            'font-bold': lang === 'ru',
          })}
          onClick={() => handleChangeLand('ru')}
        >
          RU
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
