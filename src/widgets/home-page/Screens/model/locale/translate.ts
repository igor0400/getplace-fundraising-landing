import screen1 from 'public/images/screen-card1.svg';
import screen2 from 'public/images/screen-card2.svg';
import screen3 from 'public/images/screen-card3.svg';
import screen4 from 'public/images/screen-card4.svg';
import screen5 from 'public/images/screen-card5.svg';
import screen1En from 'public/images/screen-card1-en.svg';
import screen2En from 'public/images/screen-card2-en.svg';
// import screen3En from 'public/images/screen-card3-en.svg';
// import screen4En from 'public/images/screen-card4-en.svg';
// import screen5En from 'public/images/screen-card5-en.svg';

export default {
  ru: {
    screens: [
      {
        title: 'Система бонус',
        description: `
            1. Специальные предложения и постоянные скидки для пользователей нашего приложения. <br/>
            2. Система кэшбэка за оформление заказов и бронирование в заведениях-партнерах. <br/>
            3. Реферальная система, позволяющая получать реальные деньги за приглашение друзей. <br/>
`,
        imageUrl: screen1,
        float: 'right',
      },
      {
        title: 'Централизованный аккаунт',
        description: `
            1. Удобное администрирование всеми вашими заведениями с помощью нашей административной панели. <br/>
            2. Возможность отслеживать аналитику по каждому из заведений, сравнивать показатели. <br/>
            3. Онлайн оплата. <br/>
`,
        imageUrl: screen2,
        float: 'left',
      },
      {
        title: 'Доверительный платеж',
        description:
          'После 3 месяцев пользования нашим приложением есть возможность открыть линию доверительного платежа и расплачиваться у партнеров если у вас не хватило денег.',
        imageUrl: screen3,
        float: 'right',
      },
      {
        title: 'Честная система отзывов',
        description:
          'Возможность оставить отзыв только после посещения заведения, оценив все основные аспекты в комбинации с системой защиты от спама позволяет избавиться от “накрученных” отзывов и показывать клиентам только реальные рецензии.',
        imageUrl: screen4,
        float: 'left',
      },
      {
        title: 'Геймификация',
        description:
          '“Камень ножницы бумага.” В детстве одна из самых популярных игр, которая собирала во дворах большое количество детей и решала вопрос кто будет маица в догонялках, или кто водящий в игре прятки, не говоря уже про дворовой футбол, где с помощью данной игры распределялись дети по командам. Мы интегрировали данную игру в наш сервис добавивь азарта и дух соревнований между людьми.',
        imageUrl: screen5,
        float: 'right',
      },
    ],
  },
  en: {
    screens: [
      {
        title: 'Easy transition to our system',
        description:
          'Free migration to our system we will make by ourselves - we will transfer the profile of the client base of your club and all related parameters, such as balance, discount, privileges',
        imageUrl: screen1En,
        float: 'right',
      },
      {
        title: 'Built-in shopping in Shell',
        description:
          'Sales of time, drinks and food can be organized through a free module ONYX store, which will allow your customers to shop: directly from within the client shell',
        imageUrl: screen2En,
        float: 'left',
      },
      {
        title: 'Booking and online payment module',
        description:
          'ONYX booking is a free module. Through which you can set up a reservation (via mobile app, website or call the administrator). With the ability to book both computers and set-top boxes',
        imageUrl: screen3,
        float: 'right',
      },
      {
        title: 'Finance and analytics',
        description:
          'The owner or manager can easily track and analyze information on the work of his club. In real time, he can see the dynamics of visits to the institution, statistics, on which computers users spend more time and which games they play more willingly. It is also possible to control workload, customize pricing plans, create individual loyalty programs for players, and calculate staff efficiency.',
        imageUrl: screen4,
        float: 'left',
      },
      {
        title: 'Console management',
        description:
          'Thanks to our development of the console controller, the administrator can control the console directly from the club card.',
        imageUrl: screen5,
        float: 'right',
      },
    ],
  },
};
