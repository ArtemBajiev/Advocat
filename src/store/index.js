import { createStore } from 'vuex';

export default createStore({
  state: {
    language: 'eng',
    slide: [
      {
        slideText: {
          rus: ` “ Если Вы считаете, что компетентность стоит дорого, то попробуйте некомпетентность — она
        обойдётся вам гораздо дороже. “
        <br /><br />
        © Йохан Стаель фон Хольстайн`,
          eng: `“ If you think competence is expensive, then try incompetence — it's
        it will cost you much more. “
        <br /><br />
         © Johan Stael von Holstein`,
        },
        slideImg: 'slideImg1.jpg',
        id: 0,
      },
      {
        slideText: {
          rus: ` “ Если Вы считаете, что компетентность стоит дорого, то попробуйте некомпетентность — она
        обойдётся вам гораздо дороже. “
        <br /><br />
        © Йохан Стаель фон Хольстайн`,
          eng: `“ If you think competence is expensive, then try incompetence — it's
        it will cost you much more. “
        <br /><br />
         © Johan Stael von Holstein`,
        },
        slideImg: 'slide2.png',
        id: 0,
      },
      {
        slideText: {
          rus: ` “ Если Вы считаете, что компетентность стоит дорого, то попробуйте некомпетентность — она
        обойдётся вам гораздо дороже. “
        <br /><br />
        © Йохан Стаель фон Хольстайн`,
          eng: `“ If you think competence is expensive, then try incompetence — it's
        it will cost you much more. “
        <br /><br />
         © Johan Stael von Holstein`,
        },
        slideImg: 'slide3.png',
        id: 0,
      },

    ],
    slideEvents: [
      {
        slideText: '',
        slideImg: 'slideImg1.jpg',
        id: 0,
      },
      {
        slideText: '',
        slideImg: 'slide2.png',
        id: 1,
      },
      {
        slideText: '',
        slideImg: 'slide3.png',
        id: 2,
      },
    ],
    articles: [
      {
        header: {
          rus: 'Критерии жалобы в Европейский суд по правам человека',
          eng: 'Criteria for a complaint to the European Court of Human Rights',
        },
        text: {
          rus: `Европейский Суд по правам человека отказывает в приеме более 90% жалоб как
        неприемлемых для рассмотрения по существу. Данная статистика, равно как  Европейский Суд по правам человека отказывает в приеме более 90% жалоб как
        неприемлемых для рассмотрения по существу. Данная статистика, равно как...`,
          eng: `The European Court of Human Rights refuses to accept more than 90% of complaints as
        unacceptable for consideration on the merits. This statistic, as well as the European Court of Human Rights refuses to accept more than 90% of complaints as
        unacceptable for consideration on the merits. This statistic, as well as...`,
        },
        link: '',
        id: 1,
      },
    ],

    advocatsInfo: [
      {
        id: 'Rudich_V_V',
        name: {
          rus: 'Рудич В.В.',
          eng: 'Rudich V.V.',
        },
        fullName: {
          rus: 'Рудич Валерий Владимирович',
          eng: 'Rudich Valery Vladimirovich',
        },
        info: {
          rus: ` Рудич Валерий Владимирович Окончил: Сызранское Высшее Военное Авиационное училище летчиков
        имени 60-летия СССР; Уральскую государственную юридическую академию; Российскую Школу
        Частного права Уральское отделение.
        <br /><br />
        С 2002 года адвокат, доктор юридических наук, основатель школы практического права. Aвтор
        более 150 научных работ, среди которых монографии, комментарии судебной практики, учебные и
        практические пособия, научные статьи.
        <br /><br />
        Член редакционной коллегии научного журнала Вестник Ошского государственного университета
        «Право».
        <br /><br />
        За вклад в развитие юридической науки и практики, защиту прав и свобод граждан, выполнение
        Интернационального долга награжден государственными и общественными наградами, грамотами и
        благодарственными письмами государственных и муниципальных органов, общественных
        организаций.
        <br /><br />
        Активная практическая и научная деятельность, знания и профессионализм вот отличительная
        черта, позволяющая вести дела практически любой категории сложности в арбитражном,
        гражданском, уголовном и административном судопроизводстве.`,
          eng: ` Rudich Valery Vladimirovich Graduated: Syzran Higher Military Aviation School of Pilots
        named after the 60th Anniversary of the USSR; Ural State Law Academy; Russian School
        Private Law Ural Branch.
        <br /><br />
        Since 2002, lawyer, Doctor of Law, founder of the School of Practical Law. Author
        more than 150 scientific papers, including monographs, comments on judicial practice, educational and
        practical manuals, scientific articles.
        <br /><br />
        Member of the Editorial Board of the scientific journal Bulletin of Osh State University
        "Right."
        <br /><br />
        For contribution to the development of legal science and practice, protection of the rights and freedoms of citizens, implementation of
        International debt has been awarded state and public awards, diplomas and
        letters of thanks from state and municipal bodies, public
        organizations.
        <br /><br />
        Active practical and scientific activity, knowledge and professionalism are the distinctive
        a feature that allows you to conduct cases of almost any category of complexity in arbitration,
        civil, criminal and administrative proceedings.`,
        },
        img: 'rudich.png',
        tel: '8(932)244-23-11',
        telLink: '8932244231',
        email: 'sadural@mail.ru',
        address: { rus: 'ЕКБ', eng: 'EKB' },
      },
      {
        id: 'Abraamov_V_V',
        name: {
          rus: 'Рудич В.В.',
          eng: 'Rudich V.V.',
        },
        fullName: {
          rus: 'Рудич Валерий Владимирович',
          eng: 'Rudich Valery Vladimirovich',
        },
        info: {
          rus: ` Рудич Валерий Владимирович Окончил: Сызранское Высшее Военное Авиационное училище летчиков
        имени 60-летия СССР; Уральскую государственную юридическую академию; Российскую Школу
        Частного права Уральское отделение.
        <br /><br />
        С 2002 года адвокат, доктор юридических наук, основатель школы практического права. Aвтор
        более 150 научных работ, среди которых монографии, комментарии судебной практики, учебные и
        практические пособия, научные статьи.
        <br /><br />
        Член редакционной коллегии научного журнала Вестник Ошского государственного университета
        «Право».
        <br /><br />
        За вклад в развитие юридической науки и практики, защиту прав и свобод граждан, выполнение
        Интернационального долга награжден государственными и общественными наградами, грамотами и
        благодарственными письмами государственных и муниципальных органов, общественных
        организаций.
        <br /><br />
        Активная практическая и научная деятельность, знания и профессионализм вот отличительная
        черта, позволяющая вести дела практически любой категории сложности в арбитражном,
        гражданском, уголовном и административном судопроизводстве.`,
          eng: ` Rudich Valery Vladimirovich Graduated: Syzran Higher Military Aviation School of Pilots
        named after the 60th Anniversary of the USSR; Ural State Law Academy; Russian School
        Private Law Ural Branch.
        <br /><br />
        Since 2002, lawyer, Doctor of Law, founder of the School of Practical Law. Author
        more than 150 scientific papers, including monographs, comments on judicial practice, educational and
        practical manuals, scientific articles.
        <br /><br />
        Member of the Editorial Board of the scientific journal Bulletin of Osh State University
        "Right."
        <br /><br />
        For contribution to the development of legal science and practice, protection of the rights and freedoms of citizens, implementation of
        International debt has been awarded state and public awards, diplomas and
        letters of thanks from state and municipal bodies, public
        organizations.
        <br /><br />
        Active practical and scientific activity, knowledge and professionalism are the distinctive
        a feature that allows you to conduct cases of almost any category of complexity in arbitration,
        civil, criminal and administrative proceedings.`,
        },
        img: 'rudich.png',
        tel: '8(932)244-23-11',
        telLink: '8932244231',
        email: 'sadural@mail.ru',
        address: { rus: 'ЕКБ', eng: 'EKB' },
      },
    ],
    lawyerEvents: [
      {
        cardHeader: {
          rus: 'Круглый стол',
          eng: 'Round table',
        },
        cardText: {
          rus: 'Проблемы злоупотребления при возбуждении уголовных дел',
          eng: 'Problems of abuse in the initiation of criminal cases',
        },
        content: {
          rus: `5.01.2022 года прошёл международный круглый стол на тему: «Современная ситуация в Афганистане в контексте евразийской интеграции и её влияние на международное сотрудничество». <br/>ТУТ КАРТИНКА <br/>В работе круглого стола приняли участие учёные, эксперты, представители аналитических центров и представители некоммерческих организаций России, Кыргызстана, Узбекистана, Казахстана, Таджикистана, а так же
        представители МИД Афганистана, Ирана и России.
        В качестве эксперта и учёного в работе круглого стола принял участие адвокат, доктор юридических наук, профессор кафедры публичного права УрГЭУ Рудич Валерий Владимирович.
        В своём докладе он сделал предложения направленные на расширение процессов интеграции в сфере образования между странами ЕАЭС и республиками Центральной Азии. А так же впервые на публичном форуме Валерий Владимирович обосновал предложение о создании Евразийского Межгосударственного Суда по Правам Человека ‒ ЕМСПЧ. Указанные предложения получили положительную оценку у ряда независимых
        экспертов.
        5.01.2022 года прошёл международный круглый стол на тему: «Современная ситуация в Афганистане в контексте евразийской интеграции и её влияние на международное сотрудничество». <br/>ТУТ КАРТИНКА <br/>В работе круглого стола приняли участие учёные, эксперты, представители аналитических центров и представители некоммерческих организаций России, Кыргызстана, Узбекистана, Казахстана, Таджикистана, а так же
        представители МИД Афганистана, Ирана и России.
        В качестве эксперта и учёного в работе круглого стола принял участие адвокат, доктор юридических наук, профессор кафедры публичного права УрГЭУ Рудич Валерий Владимирович.
        В своём докладе он сделал предложения направленные на расширение процессов интеграции в сфере образования между странами ЕАЭС и республиками Центральной Азии. А так же впервые на публичном форуме Валерий Владимирович обосновал предложение о создании Евразийского Межгосударственного Суда по Правам Человека ‒ ЕМСПЧ. Указанные предложения получили положительную оценку у ряда независимых
        экспертов.
        5.01.2022 года прошёл международный круглый стол на тему: «Современная ситуация в Афганистане в контексте евразийской интеграции и её влияние на международное сотрудничество». <br/>ТУТ КАРТИНКА <br/>В работе круглого стола приняли участие учёные, эксперты, представители аналитических центров и представители некоммерческих организаций России, Кыргызстана, Узбекистана, Казахстана, Таджикистана, а так же
        представители МИД Афганистана, Ирана и России.
        В качестве эксперта и учёного в работе круглого стола принял участие адвокат, доктор юридических наук, профессор кафедры публичного права УрГЭУ Рудич Валерий Владимирович.
        В своём докладе он сделал предложения направленные на расширение процессов интеграции в сфере образования между странами ЕАЭС и республиками Центральной Азии. А так же впервые на публичном форуме Валерий Владимирович обосновал предложение о создании Евразийского Межгосударственного Суда по Правам Человека ‒ ЕМСПЧ. Указанные предложения получили положительную оценку у ряда независимых
        экспертов.`,
          eng: `On 5.01.2022, an international round table was held on the topic: "The current situation in Afghanistan in the context of Eurasian integration and its impact on international cooperation." <br/>HERE IS A PICTURE <br/>The round table was attended by scientists, experts, representatives of analytical centers and representatives of non-profit organizations of Russia, Kyrgyzstan, Uzbekistan, Kazakhstan, Tajikistan, as well as
        Representatives of the Foreign Ministries of Afghanistan, Iran and Russia.
        Lawyer, Doctor of Law, Professor of the Department of Public Law of USUE Rudich Valery Vladimirovich took part in the round table as an expert and scientist.
        In his report, he made proposals aimed at expanding the integration processes in the field of education between the EAEU countries and the republics of Central Asia. And also for the first time at a public forum, Valery Vladimirovich justified the proposal to create a Eurasian Interstate Court for Human Rights ‒ EMHR. These proposals received a positive assessment from a number of independent
        experts.
        On 5.01.2022, an international round table was held on the topic: "The current situation in Afghanistan in the context of Eurasian integration and its impact on international cooperation." <br/>HERE IS A PICTURE <br/>The round table was attended by scientists, experts, representatives of analytical centers and representatives of non-profit organizations of Russia, Kyrgyzstan, Uzbekistan, Kazakhstan, Tajikistan, as well as
        Representatives of the Foreign Ministries of Afghanistan, Iran and Russia.
        Lawyer, Doctor of Law, Professor of the Department of Public Law of USUE Rudich Valery Vladimirovich took part in the round table as an expert and scientist.
        In his report, he made proposals aimed at expanding the integration processes in the field of education between the EAEU countries and the republics of Central Asia. And also for the first time at a public forum, Valery Vladimirovich justified the proposal to create a Eurasian Interstate Court for Human Rights ‒ EMHR. These proposals received a positive assessment from a number of independent
        experts.
        On 5.01.2022, an international round table was held on the topic: "The current situation in Afghanistan in the context of Eurasian integration and its impact on international cooperation." <br/>HERE IS A PICTURE <br/>The round table was attended by scientists, experts, representatives of analytical centers and representatives of non-profit organizations of Russia, Kyrgyzstan, Uzbekistan, Kazakhstan, Tajikistan, as well as
        Representatives of the Foreign Ministries of Afghanistan, Iran and Russia.
        Lawyer, Doctor of Law, Professor of the Department of Public Law of USUE Rudich Valery Vladimirovich took part in the round table as an expert and scientist.
        In his report, he made proposals aimed at expanding the integration processes in the field of education between the EAEU countries and the republics of Central Asia. And also for the first time at a public forum, Valery Vladimirovich justified the proposal to create a Eurasian Interstate Court for Human Rights ‒ EMHR. These proposals received a positive assessment from a number of independent
        experts.`,
        },
        id: 'круглый_стол',

      },

    ],
    allContent: {
      lawyer: {
        rus: 'Адвокат',
        eng: 'Lawyer',
      },
      header: {
        main: {
          rus: 'Главная',
          eng: 'main',
        },
        ScientificAndLegalCenter: {
          rus: 'Научно-Правовой центер',
          eng: 'Scientific and Legal Center',
        },
        Events: {
          rus: 'Мероприятия',
          eng: 'Events',
        },
      },
      contact: {
        header: {
          rus: 'Как можно связаться со мной',
          eng: 'How can you contact me',
        },
        numberPhone: {
          rus: 'Номер телефона',
          eng: 'Phone number',
        },
        email: {
          rus: 'Почта',
          eng: 'Email',
        },
        address: {
          rus: 'Адресс',
          eng: 'address',
        },
      },
    },
  },
  getters: {
  },
  mutations: {
    languageUpdate(state, lang) {
      state.language = lang;
    },
  },
  actions: {
  },
  modules: {
  },
});
