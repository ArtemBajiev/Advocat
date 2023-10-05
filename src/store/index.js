import { createStore } from 'vuex';

export default createStore({
  state: {
    slide: [
      {
        slideText: ` “ Если Вы считаете, что компетентность стоит дорого, то попробуйте некомпетентность — она
        обойдётся вам гораздо дороже. “
        <br /><br />
        © Йохан Стаель фон Хольстайн`,
        slideImg: 'slideImg1.jpg',
        id: 0,
      },
      {
        slideText: ` “ 2“
        <br /><br />
        © Йохан Стаель фон Хольстайн`,
        slideImg: 'slide2.png',
        id: 1,
      },
      {
        slideText: ` “ 3“
        <br /><br />
        © Йохан Стаель фон Хольстайн`,
        slideImg: 'slide3.png',
        id: 2,
      },
    ],
    articles: [
      {
        header: 'Критерии жалобы в Европейский суд по правам человека',
        text: `Европейский Суд по правам человека отказывает в приеме более 90% жалоб как
        неприемлемых для рассмотрения по существу. Данная статистика, равно как  Европейский Суд по правам человека отказывает в приеме более 90% жалоб как
        неприемлемых для рассмотрения по существу. Данная статистика, равно как...`,
        link: '',
        id: 1,
      },
      {
        header: 'Критерии жалобы в Европейский суд по правам человека',
        text: `Европейский Суд по правам человека отказывает в приеме более 90% жалоб как
        неприемлемых для рассмотрения по существу. Данная статистика, равно как... Европейский Суд по правам человека отказывает в приеме более 90% жалоб как
        неприемлемых для рассмотрения по существу. Данная статистика, равно как...`,
        link: '',
        id: 2,
      },
      {
        header: 'Критерии жалобы в Европейский суд по правам человека',
        text: `Европейский Суд по правам человека отказывает в приеме более 90% жалоб как
        неприемлемых для рассмотрения по существу. Данная статистика, равно как... Европейский Суд по правам человека отказывает в приеме более 90% жалоб как
        неприемлемых для рассмотрения по существу. Данная статистика, равно как...`,
        link: '',
        id: 3,
      },
      {
        header: 'Критерии жалобы в Европейский суд по правам человека',
        text: `Европейский Суд по правам человека отказывает в приеме более 90% жалоб как
        неприемлемых для рассмотрения по существу. Данная статистика, равно как... Европейский Суд по правам человека отказывает в приеме более 90% жалоб как
        неприемлемых для рассмотрения по существу. Данная статистика, равно как...`,
        link: '',
        id: 4,
      },
      {
        header: 'Критерии жалобы в Европейский суд по правам человека',
        text: `Европейский Суд по правам человека отказывает в приеме более 90% жалоб как
        неприемлемых для рассмотрения по существу. Данная статистика, равно как... Европейский Суд по правам человека отказывает в приеме более 90% жалоб как
        неприемлемых для рассмотрения по существу. Данная статистика, равно как...`,
        link: '',
        id: 5,
      },
      {
        header: 'Критерии жалобы в Европейский суд по правам человека',
        text: `Европейский Суд по правам человека отказывает в приеме более 90% жалоб как
        неприемлемых для рассмотрения по существу. Данная статистика, равно как... Европейский Суд по правам человека отказывает в приеме более 90% жалоб как
        неприемлемых для рассмотрения по существу. Данная статистика, равно как...`,
        link: '',
        id: 6,
      },
      {
        header: 'Критерии жалобы в Европейский суд по правам человека',
        text: `Европейский Суд по правам человека отказывает в приеме более 90% жалоб как
        неприемлемых для рассмотрения по существу. Данная статистика, равно как...`,
        link: '',
        id: 7,
      },
      {
        header: 'Критерии жалобы в Европейский суд по правам человека',
        text: `Европейский Суд по правам человека отказывает в приеме более 90% жалоб как
        неприемлемых для рассмотрения по существу. Данная статистика, равно как... Европейский Суд по правам человека отказывает в приеме более 90% жалоб как
        неприемлемых для рассмотрения по существу. Данная статистика, равно как...`,
        link: '',
        id: 8,
      },
    ],

    advocatsInfo: [
      {
        id: 'Rudich_V_V',
        name: 'Рудич В.В.',
        fullName: 'Рудич Валерий Владимирович',
        info: ` Рудич Валерий Владимирович Окончил: Сызранское Высшее Военное Авиационное училище летчиков
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
        img: 'rudich.png',
        tel: '8(932)244-23-11',
        telLink: '8932244231',
        email: 'sadural@mail.ru',
        address: 'ЕКБ',
      },
      {
        id: 'Abramov_A_B',
        name: 'Абрамов А.Б.',
        fullName: 'Абрамов Александр Борисович',
        info: ` Абрамов Александр Борисович 
        1966 года рождения. Адвокатский стаж более 20 лет,   кандидат юридических наук, офицер.
         Регистрационный номер в реестре адвокатов  Свердловской области   № 66/5. 
        <br /><br />
        Адвокат Абрамов Александр   Борисович  осуществляет адвокатскую деятельность в форме Адвокатского кабинета.
        Александр   Борисович на профессиональной основе осуществляет квалифицированную юридическую помощь
        физическим и юридическим лицам в целях защиты их прав, свобод и интересов, а также   обеспечения доступа
        к правосудию в порядке, установленном Федеральным законом № 63 от   31.05.2002 г. 
        <br /><br />
        <strong>  Основными направлениями деятельности Александра Борисовича являются:</strong>
        <br /><br />
        <ul class="lawyer__list-text">
        <li>
        Представление и защита интересов физических и юридических лиц в гражданском и административном судопроизводстве на всей территории РФ;
        </li>
        <li>
        Участие в качестве Защитника в уголовном судопроизводстве и производстве по делам об административных правонарушениях;
        </li>
        <li>
        Представление интересов в органах государственной власти, судах и правоохранительных органах РФ;
        </li>
        <li>
        Участие в качестве представителя в исполнительном производстве, а также при исполнении уголовного наказания
        </li>
        <li>
        Письменные и устные консультации по вопросам требующим юридических познаний по всем отраслям права.
        </li>
        </ul>
        `,
        img: 'Abramov.png',
        tel: '8932244231',
        telLink: '8932244231',
        email: 'sadural@mail.ru',
        address: 'ЕКБ',
      },
    ],
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
