import merch from 'public/images/packages-merch.svg';
import merchEn from 'public/images/packages-merch-en.svg';
import screens from 'public/images/packages-screens.svg';
import screensEn from 'public/images/packages-screens-en.svg';

export default {
  ru: {
    cardPacks: [
      {
        title: 'Пользовательские пакеты',
        cardLists: [
          [
            {
              type: 'custom-card',
              title: 'Пакет Light',
              till: 'до',
              options: [
                {
                  text: 'Годовой доступ к Premium',
                  type: 'default',
                },
                {
                  text: 'Расширенная система достижений',
                  type: 'disabled',
                },
                {
                  text: 'Доступ к реферальной системе',
                  type: 'disabled',
                },
                {
                  text: 'Верифицированная Gold галочка c возможностью получения кэшбека',
                  type: 'disabled',
                },
                {
                  text: 'Наш фирменный мерч (футболка, свитшот)',
                  type: 'disabled',
                },
              ],
              price: '5000',
              currency: 'тг.',
              expDate: '31.07.2023',
              btn: {
                text: 'Купить',
              },
            },
            {
              type: 'custom-card',
              title: 'Пакет Standart',
              till: 'до',
              options: [
                {
                  text: 'Годовой доступ к Premium',
                  type: 'default',
                },
                {
                  text: 'Расширенная система достижений',
                  type: 'default',
                },
                {
                  text: 'Доступ к реферальной системе',
                  type: 'disabled',
                },
                {
                  text: 'Верифицированная Gold галочка c возможностью получения кэшбека',
                  type: 'disabled',
                },
                {
                  text: 'Наш фирменный мерч (футболка, свитшот)',
                  type: 'disabled',
                },
              ],
              price: '10000',
              currency: 'тг.',
              expDate: '31.07.2023',
              btn: {
                text: 'Купить',
              },
            },
            {
              type: 'custom-card',
              title: 'Пакет Gold',
              till: 'до',
              options: [
                {
                  text: 'Годовой доступ к Premium',
                  type: 'default',
                },
                {
                  text: 'Расширенная система достижений',
                  type: 'default',
                },
                {
                  text: 'Доступ к реферальной системе',
                  type: 'default',
                },
                {
                  text: 'Верифицированная Gold галочка c возможностью получения кэшбека',
                  type: 'disabled',
                },
                {
                  text: 'Наш фирменный мерч (футболка, свитшот)',
                  type: 'disabled',
                },
              ],
              price: '25000',
              currency: 'тг.',
              expDate: '31.07.2023',
              btn: {
                text: 'Купить',
              },
            },
            {
              type: 'custom-card',
              title: 'Пакет Premium',
              till: 'до',
              bgColor: '#0BFFCB',
              arrow: {
                bgColor: '#FCC70A',
                position: 'top',
              },
              options: [
                {
                  text: 'Годовой доступ к Premium',
                  type: 'default',
                },
                {
                  text: 'Расширенная система достижений',
                  type: 'default',
                },
                {
                  text: 'Доступ к реферальной системе',
                  type: 'default',
                },
                {
                  text: 'Верифицированная Gold галочка c возможностью получения кэшбека',
                  type: 'default',
                },
                {
                  text: 'Наш фирменный мерч (футболка, свитшот)',
                  type: 'disabled',
                },
              ],
              price: '50000',
              currency: 'тг.',
              expDate: '31.07.2023',
              btn: {
                bgColor: '#ffffff',
                text: 'Купить',
              },
            },
            {
              type: 'custom-card',
              title: 'ALL эксклюзив',
              till: 'до',
              bgColor: '#FCC70A',
              arrow: {
                bgColor: '#0BFFCB',
                position: 'top',
              },
              options: [
                {
                  text: 'Годовой доступ к Premium',
                  type: 'default',
                },
                {
                  text: 'Расширенная система достижений',
                  type: 'default',
                },
                {
                  text: 'Доступ к реферальной системе',
                  type: 'default',
                },
                {
                  text: 'Верифицированная Emerald галочка c возможностью получения кэшбека и доверительного платежа до 50 000тг',
                  type: 'bold',
                },
                {
                  text: 'Наш фирменный мерч (футболка, свитшот)',
                  type: 'default',
                },
              ],
              price: '100000',
              currency: 'тг.',
              expDate: '31.07.2023',
              btn: {
                bgColor: '#ffffff',
                text: 'Купить',
              },
            },
            {
              type: 'image',
              src: merch,
            },
          ],
        ],
      },
      {
        title: 'B2B пакеты',
        cardLists: [
          [
            {
              type: 'custom-card',
              title: 'Light',
              till: 'до',
              options: [
                {
                  text: 'Размещение рекламы на главном экране в своем регионе в своем разделе',
                  type: 'default',
                },
                {
                  text: 'До конца 2023 года получение <b>скидки 20%</b> на все платные модули нашего сервиса',
                  type: 'default',
                },
                {
                  text: 'Получение нашего фирменного мерча в кол-ве <b>10 шт</b> (футболка, свитшот)',
                  type: 'default',
                },
                {
                  text: 'Индивидуальная рекламная интеграция',
                  type: 'disabled',
                },
                {
                  text: 'Бесплатные приглашения на закрытые мероприятие Getplace',
                  type: 'disabled',
                },
              ],
              price: '500000',
              currency: 'тг.',
              expDate: '31.07.2023',
              btn: {
                text: 'Купить',
              },
            },
            {
              type: 'custom-card',
              title: 'Standart',
              till: 'до',
              options: [
                {
                  text: 'Размещение рекламы на главном экране в своем регионе в своем разделе',
                  type: 'default',
                },
                {
                  text: 'До конца 2023 года получение <b>скидки 40%</b> на все платные модули нашего сервиса',
                  type: 'default',
                },
                {
                  text: 'Получение нашего фирменного мерча в кол-ве <b>25 шт</b> (футболка, свитшот)',
                  type: 'default',
                },
                {
                  text: 'Индивидуальная рекламная интеграция',
                  type: 'disabled',
                },
                {
                  text: 'Бесплатные приглашения на закрытые мероприятие Getplace',
                  type: 'disabled',
                },
              ],
              price: '1000000',
              currency: 'тг.',
              expDate: '31.07.2023',
              btn: {
                text: 'Купить',
              },
            },
            {
              type: 'custom-card',
              title: 'Gold',
              till: 'до',
              options: [
                {
                  text: 'Размещение рекламы на главном экране в своем регионе в своем разделе',
                  type: 'default',
                },
                {
                  text: 'До конца 2023 года получение <b>скидки 60%</b> на все платные модули нашего сервиса',
                  type: 'default',
                },
                {
                  text: 'Получение нашего фирменного мерча в кол-ве <b>50 шт</b> (футболка, свитшот)',
                  type: 'default',
                },
                {
                  text: 'Индивидуальная рекламная интеграция',
                  type: 'disabled',
                },
                {
                  text: 'Бесплатные приглашения на закрытые мероприятие Getplace',
                  type: 'disabled',
                },
              ],
              price: '2000000',
              currency: 'тг.',
              expDate: '31.07.2023',
              btn: {
                text: 'Купить',
              },
            },
          ],
          [
            {
              type: 'custom-card',
              title: 'Premium',
              till: 'до',
              options: [
                {
                  text: 'Размещение рекламы на главном экране на всю Республику до конца 2023 года',
                  type: 'bold',
                },
                {
                  text: 'До конца 2023 года получение <b>скидки 80%</b> на все платные модули нашего сервиса',
                  type: 'default',
                },
                {
                  text: 'Получение нашего фирменного мерча в кол-ве <b>100 шт</b> (футболка, свитшот)',
                  type: 'default',
                },
                {
                  text: 'Индивидуальная рекламная интеграция',
                  type: 'disabled',
                },
                {
                  text: 'Бесплатные приглашения на закрытые мероприятие Getplace',
                  type: 'disabled',
                },
              ],
              price: '5000000',
              currency: 'тг.',
              expDate: '31.07.2023',
              btn: {
                text: 'Купить',
              },
            },
            {
              type: 'custom-card',
              title: 'Ultimate',
              till: 'до',
              bgColor: '#FCC70A',
              arrow: {
                bgColor: '#1E1E1E',
                cbColor: '#fff',
                position: 'middle',
              },
              options: [
                {
                  text: 'Размещение рекламы на главном экране на всю Республику до конца 2023 года',
                  type: 'bold',
                },
                {
                  text: 'До конца 2023 года получение <b>скидки 100%</b> на все платные модули нашего сервиса',
                  type: 'default',
                },
                {
                  text: 'Получение нашего фирменного мерча в кол-ве <b>200 шт</b> (футболка, свитшот)',
                  type: 'default',
                },
                {
                  text: 'Индивидуальная рекламная интеграция',
                  type: 'default',
                },
                {
                  text: 'Бесплатные приглашения на закрытые мероприятие Getplace',
                  type: 'default',
                },
              ],
              price: '10000000',
              currency: 'тг.',
              expDate: '31.07.2023',
              btn: {
                text: 'Купить',
                bgColor: '#ffffff',
              },
            },
            {
              type: 'image',
              src: screens,
              className: 'min-[849px]:col-span-2',
            },
          ],
        ],
      },
    ],
  },
  en: {
    cardPacks: [
      {
        title: 'Custom packages',
        cardLists: [
          [
            {
              type: 'custom-card',
              title: 'Package Light',
              till: 'until',
              options: [
                {
                  text: 'One year access to Premium',
                  type: 'default',
                },
                {
                  text: 'Expanded Achievement System',
                  type: 'disabled',
                },
                {
                  text: 'Access to the referral system',
                  type: 'disabled',
                },
                {
                  text: 'Verified Gold tick with the possibility of obtaining cashback',
                  type: 'disabled',
                },
                {
                  text: 'Our branded merchandise (T-shirt, sweatshirt)',
                  type: 'disabled',
                },
              ],
              price: '12',
              currency: '$',
              expDate: '31.07.2023',
              btn: {
                text: 'Buy',
              },
            },
            {
              type: 'custom-card',
              title: 'Package Standart',
              till: 'until',
              options: [
                {
                  text: 'One year access to Premium',
                  type: 'default',
                },
                {
                  text: 'Expanded Achievement System',
                  type: 'default',
                },
                {
                  text: 'Access to the referral system',
                  type: 'disabled',
                },
                {
                  text: 'Verified Gold tick with the possibility of obtaining cashback',
                  type: 'disabled',
                },
                {
                  text: 'Our branded merchandise (T-shirt, sweatshirt)',
                  type: 'disabled',
                },
              ],
              price: '24',
              currency: '$',
              expDate: '31.07.2023',
              btn: {
                text: 'Buy',
              },
            },
            {
              type: 'custom-card',
              title: 'Package Gold',
              till: 'until',
              options: [
                {
                  text: 'One year access to Premium',
                  type: 'default',
                },
                {
                  text: 'Expanded Achievement System',
                  type: 'default',
                },
                {
                  text: 'Access to the referral system',
                  type: 'default',
                },
                {
                  text: 'Verified Gold tick with the possibility of obtaining cashback',
                  type: 'disabled',
                },
                {
                  text: 'Our branded merchandise (T-shirt, sweatshirt)',
                  type: 'disabled',
                },
              ],
              price: '55',
              currency: '$',
              expDate: '31.07.2023',
              btn: {
                text: 'Buy',
              },
            },
            {
              type: 'custom-card',
              title: 'Package Premium',
              till: 'until',
              bgColor: '#0BFFCB',
              arrow: {
                bgColor: '#FCC70A',
                position: 'top',
              },
              options: [
                {
                  text: 'One year access to Premium',
                  type: 'default',
                },
                {
                  text: 'Expanded Achievement System',
                  type: 'default',
                },
                {
                  text: 'Access to the referral system',
                  type: 'default',
                },
                {
                  text: 'Verified Gold tick with the possibility of obtaining cashback',
                  type: 'default',
                },
                {
                  text: 'Our branded merchandise (T-shirt, sweatshirt)',
                  type: 'disabled',
                },
              ],
              price: '110',
              currency: '$',
              expDate: '31.07.2023',
              btn: {
                bgColor: '#ffffff',
                text: 'Buy',
              },
            },
            {
              type: 'custom-card',
              title: 'ALL exclusive',
              till: 'until',
              bgColor: '#FCC70A',
              arrow: {
                bgColor: '#0BFFCB',
                position: 'top',
              },
              options: [
                {
                  text: 'One year access to Premium',
                  type: 'default',
                },
                {
                  text: 'Expanded Achievement System',
                  type: 'default',
                },
                {
                  text: 'Access to the referral system',
                  type: 'default',
                },
                {
                  text: 'Verified Emerald tick with an opportunity to receive cashback and trust payment up to 111$',
                  type: 'bold',
                },
                {
                  text: 'Our branded merchandise (T-shirt, sweatshirt)',
                  type: 'disabled',
                },
              ],
              price: '220',
              currency: '$',
              expDate: '31.07.2023',
              btn: {
                bgColor: '#ffffff',
                text: 'Buy',
              },
            },
            {
              type: 'image',
              src: merchEn,
            },
          ],
        ],
      },
      {
        title: 'B2B packages',
        cardLists: [
          [
            {
              type: 'custom-card',
              title: 'Light',
              till: 'until',
              options: [
                {
                  text: 'Advertising on the main screen in your region in its section',
                  type: 'default',
                },
                {
                  text: 'Until the end of 2023, get a <b>20% discount</b> on all paid modules of our service',
                  type: 'default',
                },
                {
                  text: 'Receipt of our branded merchandise in quantities of <b>10 pcs</b> (T-shirt, sweatshirt)',
                  type: 'default',
                },
                {
                  text: 'Custom advertising integration',
                  type: 'disabled',
                },
                {
                  text: 'Free invitations to private Getplace events',
                  type: 'disabled',
                },
              ],
              price: '1111',
              currency: '$',
              expDate: '31.07.2023',
              btn: {
                text: 'Buy',
              },
            },
            {
              type: 'custom-card',
              title: 'Standart',
              till: 'until',
              options: [
                {
                  text: 'Advertising on the main screen in your region in its section',
                  type: 'default',
                },
                {
                  text: 'Until the end of 2023, get a <b>40% discount</b> on all paid modules of our service',
                  type: 'default',
                },
                {
                  text: 'Receipt of our branded merchandise in quantities of <b>25 pcs</b> (T-shirt, sweatshirt)',
                  type: 'default',
                },
                {
                  text: 'Custom advertising integration',
                  type: 'disabled',
                },
                {
                  text: 'Free invitations to private Getplace events',
                  type: 'disabled',
                },
              ],
              price: '2222',
              currency: '$',
              expDate: '31.07.2023',
              btn: {
                text: 'Buy',
              },
            },
            {
              type: 'custom-card',
              title: 'Gold',
              till: 'until',
              options: [
                {
                  text: 'Advertising on the main screen in your region in its section',
                  type: 'default',
                },
                {
                  text: 'Until the end of 2023, get a <b>60% discount</b> on all paid modules of our service',
                  type: 'default',
                },
                {
                  text: 'Receipt of our branded merchandise in quantities of <b>50 pcs</b> (T-shirt, sweatshirt)',
                  type: 'default',
                },
                {
                  text: 'Custom advertising integration',
                  type: 'disabled',
                },
                {
                  text: 'Free invitations to private Getplace events',
                  type: 'disabled',
                },
              ],
              price: '4444',
              currency: '$',
              expDate: '31.07.2023',
              btn: {
                text: 'Buy',
              },
            },
          ],
          [
            {
              type: 'custom-card',
              title: 'Premium',
              till: 'until',
              options: [
                {
                  text: 'Placement of advertising on the main screen for the entire Republic until the end of 2023',
                  type: 'bold',
                },
                {
                  text: 'Until the end of 2023, get an <b>80% discount</b> on all paid modules of our service',
                  type: 'default',
                },
                {
                  text: 'Receipt of our branded merchandise in quantities of <b>100 pcs</b> (T-shirt, sweatshirt)',
                  type: 'default',
                },
                {
                  text: 'Custom advertising integration',
                  type: 'disabled',
                },
                {
                  text: 'Free invitations to private Getplace events',
                  type: 'disabled',
                },
              ],
              price: '11111',
              currency: '$',
              expDate: '31.07.2023',
              btn: {
                text: 'Buy',
              },
            },
            {
              type: 'custom-card',
              title: 'Ultimate',
              till: 'до',
              bgColor: '#FCC70A',
              arrow: {
                bgColor: '#1E1E1E',
                cbColor: '#fff',
                position: 'middle',
              },
              options: [
                {
                  text: 'Placement of advertising on the main screen for the entire Republic until the end of 2023',
                  type: 'bold',
                },
                {
                  text: 'Until the end of 2023, get an <b>100% discount</b> on all paid modules of our service',
                  type: 'default',
                },
                {
                  text: 'Receipt of our branded merchandise in quantities of <b>200 pcs</b> (T-shirt, sweatshirt)',
                  type: 'default',
                },
                {
                  text: 'Custom advertising integration',
                  type: 'default',
                },
                {
                  text: 'Free invitations to private Getplace events',
                  type: 'default',
                },
              ],
              price: '22222',
              currency: '$',
              expDate: '31.07.2023',
              btn: {
                text: 'Buy',
                bgColor: '#ffffff',
              },
            },
            {
              type: 'image',
              src: screensEn,
              className: 'min-[849px]:col-span-2',
            },
          ],
        ],
      },
    ],
  },
};
