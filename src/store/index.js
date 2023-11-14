import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    language: 'rus',
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
        id: 1,
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
        id: 2,
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
        text: {
          rus: `Европейский Суд по правам человека отказывает в приеме более 90% жалоб как
        неприемлемых для рассмотрения по существу. Данная статистика, равно как  Европейский Суд по правам человека отказывает в приеме более 90% жалоб как
        неприемлемых для рассмотрения по существу. Данная статистика, равно как...`,
          eng: `The European Court of Human Rights refuses to accept more than 90% of complaints as
        unacceptable for consideration on the merits. This statistic, as well as the European Court of Human Rights refuses to accept more than 90% of complaints as
        unacceptable for consideration on the merits. This statistic, as well as...`,
        },
        id: 1,
      },
      {
        text: {
          rus: `Европейский Суд по правам человека отказывает в приеме более 90% жалоб как
        неприемлемых для рассмотрения по существу. Данная статистика, равно как  Европейский Суд по правам человека отказывает в приеме более 90% жалоб как
        неприемлемых для рассмотрения по существу. Данная статистика, равно как...`,
          eng: `The European Court of Human Rights refuses to accept more than 90% of complaints as
        unacceptable for consideration on the merits. This statistic, as well as the European Court of Human Rights refuses to accept more than 90% of complaints as
        unacceptable for consideration on the merits. This statistic, as well as...`,
        },
        id: 2,
      },
      {
        text: {
          rus: `Европейский Суд по правам человека отказывает в приеме более 90% жалоб как
        неприемлемых для рассмотрения по существу. Данная статистика, равно как  Европейский Суд по правам человека отказывает в приеме более 90% жалоб как
        неприемлемых для рассмотрения по существу. Данная статистика, равно как...`,
          eng: `The European Court of Human Rights refuses to accept more than 90% of complaints as
        unacceptable for consideration on the merits. This statistic, as well as the European Court of Human Rights refuses to accept more than 90% of complaints as
        unacceptable for consideration on the merits. This statistic, as well as...`,
        },
        id: 3,
      },
      {
        text: {
          rus: `Европейский Суд по правам человека отказывает в приеме более 90% жалоб как
        неприемлемых для рассмотрения по существу. Данная статистика, равно как  Европейский Суд по правам человека отказывает в приеме более 90% жалоб как
        неприемлемых для рассмотрения по существу. Данная статистика, равно как...`,
          eng: `The European Court of Human Rights refuses to accept more than 90% of complaints as
        unacceptable for consideration on the merits. This statistic, as well as the European Court of Human Rights refuses to accept more than 90% of complaints as
        unacceptable for consideration on the merits. This statistic, as well as...`,
        },
        id: 4,
      },
      {
        text: {
          rus: `Европейский Суд по правам человека отказывает в приеме более 90% жалоб как
        неприемлемых для рассмотрения по существу. Данная статистика, равно как  Европейский Суд по правам человека отказывает в приеме более 90% жалоб как
        неприемлемых для рассмотрения по существу. Данная статистика, равно как...`,
          eng: `The European Court of Human Rights refuses to accept more than 90% of complaints as
        unacceptable for consideration on the merits. This statistic, as well as the European Court of Human Rights refuses to accept more than 90% of complaints as
        unacceptable for consideration on the merits. This statistic, as well as...`,
        },
        id: 5,
      },
      {
        text: {
          rus: `Европейский Суд по правам человека отказывает в приеме более 90% жалоб как
        неприемлемых для рассмотрения по существу. Данная статистика, равно как  Европейский Суд по правам человека отказывает в приеме более 90% жалоб как
        неприемлемых для рассмотрения по существу. Данная статистика, равно как...`,
          eng: `The European Court of Human Rights refuses to accept more than 90% of complaints as
        unacceptable for consideration on the merits. This statistic, as well as the European Court of Human Rights refuses to accept more than 90% of complaints as
        unacceptable for consideration on the merits. This statistic, as well as...`,
        },
        id: 6,
      },
      {
        text: {
          rus: `Европейский Суд по правам человека отказывает в приеме более 90% жалоб как
        неприемлемых для рассмотрения по существу. Данная статистика, равно как  Европейский Суд по правам человека отказывает в приеме более 90% жалоб как
        неприемлемых для рассмотрения по существу. Данная статистика, равно как...`,
          eng: `The European Court of Human Rights refuses to accept more than 90% of complaints as
        unacceptable for consideration on the merits. This statistic, as well as the European Court of Human Rights refuses to accept more than 90% of complaints as
        unacceptable for consideration on the merits. This statistic, as well as...`,
        },
        id: 7,
      },
      {
        text: {
          rus: `Европейский Суд по правам человека отказывает в приеме более 90% жалоб как
        неприемлемых для рассмотрения по существу. Данная статистика, равно как  Европейский Суд по правам человека отказывает в приеме более 90% жалоб как
        неприемлемых для рассмотрения по существу. Данная статистика, равно как...`,
          eng: `The European Court of Human Rights refuses to accept more than 90% of complaints as
        unacceptable for consideration on the merits. This statistic, as well as the European Court of Human Rights refuses to accept more than 90% of complaints as
        unacceptable for consideration on the merits. This statistic, as well as...`,
        },
        id: 8,
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
        tgNikname: '',
        pdfFile: '',
      },
      {
        id: 'Abraamov_V_V',
        name: {
          rus: 'Абрамов А.Б.',
          eng: 'Abramov A.B.',
        },
        fullName: {
          rus: 'Абрамов Александр Борисович',
          eng: 'Abramov Alexander Borisovich',
        },
        info: {
          rus: `Абрамов Александр Борисович 
          1966 года рождения. Адвокатский стаж более 20 лет,   кандидат юридических наук, офицер. Регистрационный номер в реестре адвокатов  Свердловской области   № 66/5. 
        <br /><br />
        Адвокат Абрамов Александр   Борисович  осуществляет адвокатскую деятельность в форме Адвокатского кабинета.   Александр   Борисович на профессиональной основе осуществляет квалифицированную юридическую помощь   физическим и юридическим лицам в целях защиты их прав, свобод и интересов, а также   обеспечения доступа к правосудию в порядке, установленном Федеральным законом № 63 от   31.05.2002 г.
        <br /><br />
          <strong>Основными направлениями деятельности Александра Борисовича являются:
          </strong>
          <ul><li>
          Представление и защита интересов физических и юридических лиц в гражданском и административном судопроизводстве на всей территории РФ;
          </li>
          <li>Участие в качестве Защитника в уголовном      судопроизводстве и производстве по делам об административных правонарушениях;
          </li>
          <li>Представление интересов в органах государственной власти, судах и правоохранительных органах РФ;
          
          </li>
          <li>Участие в качестве представителя в исполнительном производстве, а также при исполнении уголовного наказания</li>
          <li>Письменные и устные консультации по вопросам требующим юридических познаний по всем отраслям права.

          </li>

          </ul>
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
        img: 'Abramov.png',
        tel: '8(932)244-23-11',
        telLink: '8932244231',
        email: 'sadural@mail.ru',
        address: { rus: 'ЕКБ', eng: 'EKB' },
        tgNikname: '',
        pdfFile: '',
      },
    ],
    lawyerEvents: [
      {
        cardHeader: {
          rus: 'Круглый стол',
          eng: 'Round table',
        },
        img: 'slide2.png',
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
        <iframe width="100%" height="300" src="https://www.youtube.com/embed/9QWiaXDxPIM" title="&quot;Непосредственно СУД&quot; 8 серия 5 сезона" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
        pdf: [{ pdfLink: 'normal.pdf', id: 0 }, { pdfLink: 'popopo.pdf', id: 1 }],
      },
    ],
    LegalCenter: {
      header: {
        rus: `Автономная некоммерческая организация <br/> «Научно-Правовой Центр» <br/>
      ( АНО НПЦ )`,
        eng: `Autonomous non-profit organization <br/>"Scientific and Legal Center" <br/>
    (ANO NPC)`,
      },
      text: {
        rus: `Целью деятельности организации является:
      Деятельность, направленная на получение и применение новых знаний, для решения общественных, гуманитарных и иных проблем;
Оказание услуг в области науки, образования и права;
Содействие процессу формирования и развития правового информационного пространства;
Участие в научных исследованиях в области общественных и гуманитарных наук; 
Содействие повышению правосознания общества.
Предметом деятельности организации являются:
Распространение правовой информации;
Преподавательская деятельность; 
Содействие в переподготовке и повышении квалификации юристов;
Содействие развитию профессиональных качеств начинающих юристов; 
Участие в установленном порядке в законотворческой деятельности и общественной экспертизе законопроектов и действующих нормативных актов;
Содействие в оказании правовой помощи государственным, некоммерческим и коммерческим организациям, физическим лицам; 
Дача правовых заключений и проведение правовых экспертиз;
Оказание услуг по вопросу подготовки к сдаче экзаменов на статус адвоката, на статус судьи;
Консультирование по вопросам подготовки научных статей, авторефератов диссертационных работ;
Повышение и укрепление престижа профессии адвоката, правовых знаний; 
Содействие по внедрению в практику разрешения споров физических и юридических лиц с помощью деятельности третейского суда и медиации.
Осуществляет на основании лицензии образовательную деятельность.

В рамках Автономной некоммерческой организации «Научно-Правовой Центр» создана первая в России «Школа практического права». Целью создания Школы является подготовка квалифицированных юристов практиков. В основе подготовки лежат авторские разработки по вопросам ведения гражданских и уголовных  дел. 
В рамках функционирования АНО «Научно-Правовой Центр» и «Школы практического права» проводятся круглые столы и научно-практические форумы, с участием адвокатов, судей, сотрудников правоохранительных органов, на которых обсуждаются практические вопросы правоприменения и разрабатываются практические рекомендации.
      `,
        eng: `The purpose of the organization is:
      Activities aimed at obtaining and applying new knowledge to solve social, humanitarian and other problems;
      Provision of services in the field of science, education and law;
      Assistance to the process of formation and development of the legal information space;
      Participation in scientific research in the field of social sciences and humanities;
      Assistance in raising the legal awareness of society.
      The subject of the organization's activities are:
      Dissemination of legal information;
      Teaching activities;
      Assistance in retraining and advanced training of lawyers;
      Assistance in the development of professional qualities of novice lawyers;
      Participation in the prescribed manner in legislative activity and public examination of draft laws and existing regulations;
      Assistance in providing legal assistance to state, non-profit and commercial organizations, individuals;
      Giving legal opinions and conducting legal examinations;
      Provision of services on the issue of preparation for exams for the status of a lawyer, for the status of a judge;
      Consulting on the preparation of scientific articles, abstracts of dissertations;
      Increasing and strengthening the prestige of the lawyer's profession, legal knowledge;
      Assistance in the implementation of the practice of dispute resolution of individuals and legal entities through the activities of the arbitration court and mediation.
      Carries out educational activities on the basis of a license.
      
      Within the framework of the Autonomous non-profit Organization "Scientific and Legal Center", the first "School of Practical Law" in Russia was created. The purpose of the School is to train qualified legal practitioners. The training is based on the author's developments on the conduct of civil and criminal cases.
      Within the framework of the functioning of the ANO "Scientific and Legal Center" and the "School of Practical Law", round tables and scientific and practical forums are held with the participation of lawyers, judges, law enforcement officers, at which practical issues of law enforcement are discussed and practical recommendations are developed.`,
      },
    },
    allContent: {
      main: {
        imgText: {
          rus: `“ Если Вы считаете, что компетентность стоит дорого,
          то попробуйте некомпетентность — она обойдётся вам гораздо дороже. “<br><br>
           © Йохан Стаель фон Хольстайн`,
          eng: `“ If you think competence is expensive,
          then try incompetence — it will cost you much more. “<br><br>
           © Johan Stael von Holstein`,
        },
        headerArticles: {
          rus: 'Объявления',
          eng: 'Advertisements',
        },
      },
      lawyer: {
        rus: 'Адвокат',
        eng: 'Lawyer',
      },
      header: {
        main: {
          rus: 'Главная',
          eng: 'Main',
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
      EventsPage: {
        header: {
          rus: 'Статьи',
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
          eng: 'Address',
        },
      },
      EducationalPublications: {
        text: {
          rus: `
        Список опубликованных учебных изданий
         и научных трудов доктора юридических наук,
          адвоката Рудича Валерия Владимировича
        `,
          eng: `List of published educational publications
        and scientific works of the Doctor of Law,
        lawyer Rudich Valery Vladimirovich`,
        },
        textLink: {
          rus: 'Ознакомиться со статьями:',
          eng: 'Read the articles:',
        },
        button: {
          rus: 'Открыть PDF файл',
          eng: 'Open PDF file',
        },
        link: '',
      },
    },
  },
  getters: {
    getData(state) {
      axios.get(`${this.state.URL__DATA}/api/baskets`)
      // , {
      //  params: {
      //    userAccessKey: context.state.userKey,
      //  },
      // })
        // eslint-disable-next-line no-return-assign
        .then((response) => {
          if (!context.state.userKey) {
            localStorage.setItem('userAccesKey', response.data.user.accessKey);
            context.commit('updateUserKey', response.data.user.accessKey);
          }

          context.commit('updateCardProductsData', response.data.items);
        });
    },
  },
  mutations: {
    languageUpdate(state, lang) {
      state.language = lang;
    },
    addEvent(state) {
      state.lawyerEvents.push({
        cardHeader: {
          rus: '',
          eng: '',
        },
        img: '',
        cardText: {
          rus: '',
          eng: '',
        },
        content: {
          rus: '',
          eng: '',
        },
        id: 'newEvent',
        pdf: [],
      });
    },
  },
  actions: {},
  modules: {},
});
