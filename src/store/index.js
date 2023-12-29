import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    language: 'rus',
    URL__DATA: 'https://api.sudural.ru/',
    receivedData: {},
    loading: true,

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
        advantages: [
          {
            id: 1,
            rus: 'тут должен быть текст о качестве, опыте и надежности',
            eng: 'there should be a text about quality, experience and reliability',
            img: 'Themis.png',
          },
          {
            id: 2,
            rus: 'тут должен быть текст о качестве, опыте и надежности',
            eng: 'there should be a text about quality, experience and reliability',
            img: 'scales.png',
          },
          {
            id: 3,
            rus: 'тут должен быть текст о качестве, опыте и надежности',
            eng: 'there should be a text about quality, experience and reliability',
            img: 'scales.png',
          },
        ],
        bottomText: {
          rus: 'Принимая во внимание показатели успешности, консультация с широким активом обеспечивает широкому кругу (специалистов) участие в формировании прогресса профессионального сообщества. Но базовые сценарии поведения пользователей могут быть рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок. ',
          eng: 'Taking into account success rates, consultation with a broad asset ensures that a wide range of (specialists) participate in shaping the progress of the professional community. But the basic scenarios of user behavior can be considered exclusively in the context of marketing and financial prerequisites.',
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
          rus: 'Мероприятия',
          eng: 'Events',
        },
        moreDetailed: {
          rus: 'Подробнее',
          eng: 'More detailed',
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
        pdf: {
          rus: 'Подробнее ознакомиться с материалом вы можете по ссылке',
          eng: 'To learn more about the material, follow the link',
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
  },
  mutations: {
    updateData(state, data) {
      state.receivedData = data;
    },
    loadingUpdate(state, bool) {
      state.loading = bool;
    },
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
  actions: {
    async GetData(context) {
      axios.get(`${this.state.URL__DATA}api/get`)
        .then((response) => {
          context.commit('updateData', response.data.pages);
          context.commit('loadingUpdate', false);
        });
    },
  },
  modules: {},
});
