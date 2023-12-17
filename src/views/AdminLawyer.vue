<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <section name="admin-lawyer">
    <HeaderSlot></HeaderSlot>
    <AdminMenu></AdminMenu>
    <div class="container">
      <fieldset class="admin__lawyer-info">
        <label for=""
          >ФИО рус<input
            class="form-control"
            name="nameRus"
            type="text"
            v-model="getAdvocatInfo.name.rus"
        /></label>
        <label for=""
          >ФИО eng<input
            class="form-control"
            name="nameRus"
            type="text"
            v-model="getAdvocatInfo.name.eng"
        /></label>
        <label for=""
          >Полное ФИО рус<input
            class="form-control"
            name="fullNameRus"
            type="text"
            v-model="getAdvocatInfo.fullName.rus"
        /></label>
        <label for=""
          >Полное ФИО eng<input
            class="form-control"
            name="fullNameRus"
            type="text"
            v-model="getAdvocatInfo.fullName.eng"
        /></label>
      </fieldset>
      <div class="admin__lawyer-img">
        <img
          v-if="getAdvocatInfo.img"
          width="300"
          :src="`${$store.state.URL__DATA}${getAdvocatInfo.img}`"
          alt=""
        />
        <form @submit.prevent="uploadImage" class="admin-lawyer__form-img">
          <label for=""><input type="file" @change="loadImage" /></label>
          <button type="submit" class="btn btn-primary">Заменить</button>
        </form>
      </div>
      <p>РУС</p>
      <TextEditor ref="textEditorRus" :content="getAdvocatInfo.info.rus"></TextEditor>
      <hr />
      <p>ENG</p>
      <TextEditor ref="textEditorEng" :content="getAdvocatInfo.info.eng"></TextEditor>
      <section name="contacts">
        <fieldset class="admin__lawyer__contacts">
          <div class="admin__lawyer__contacts__inputs">
            <label for=""
              >Номер телефона
              <input class="form-control" type="number" v-model="getAdvocatInfo.telLink"
            /></label>
            <label for=""
              >Email <input class="form-control" type="text" v-model="getAdvocatInfo.email"
            /></label>
            <label for=""
              >Адресс <input class="form-control" type="text" v-model="getAdvocatInfo.address.rus"
            /></label>
          </div>
          <div class="admin__lawyer__contacts__inputs">
            <label for=""
              >Адресс eng
              <input class="form-control" type="text" v-model="getAdvocatInfo.address.eng"
            /></label>
            <label for=""
              >Telegram
              <input class="form-control" type="number" v-model="getAdvocatInfo.tgNikname"
            /></label>
          </div>
        </fieldset>
      </section>
      <form class="admin-lawyer__articles" @submit.prevent="uploadPdf">
        <label for=""><strong>Статьи</strong><br /><input type="file" @change="loadPdf"/></label>
        <div v-if="getAdvocatInfo.pdf">
          <a :href="`${$store.state.URL__DATA}${getAdvocatInfo.pdf}`">загруженный файл</a>
        </div>
        <button type="submit" class="btn btn-primary"
        v-text="getAdvocatInfo.pdf ? 'Заменить': 'Добавить' "></button>
        <button class="btn btn-danger" @click.prevent="delPdf()">Удалить</button>
      </form>
      <button class="btn btn-primary admin__btn-save" @click.prevent="uploadObject">
        Сохранить
      </button>
    </div>
  </section>
</template>
<script>
import TextEditor from '@/components/TextEditor.vue';
import HeaderSlot from '@/components/HeaderSlot.vue';
import AdminMenu from '@/components/AdminMenu.vue';
import axiosClient from '@/axios';

export default {
  components: {
    TextEditor,
    HeaderSlot,
    AdminMenu,
  },

  data() {
    return {
      selectedPdf: null,
      selectedImg: null,
    };
  },

  methods: {
    saveData() {
      this.getAdvocatInfo.info.rus = this.$refs.textEditorRus.editor.getHTML();
      this.getAdvocatInfo.info.eng = this.$refs.textEditorEng.editor.getHTML();
    },
    loadPdf(event) {
      // eslint-disable-next-line prefer-destructuring
      this.selectedPdf = event.target.files[0];
    },
    loadImage(event) {
      // eslint-disable-next-line prefer-destructuring
      this.selectedImg = event.target.files[0];
      console.log(this.selectedImg);
    },
    uploadImage() {
      // Функция загрузки изображения
      // Создаем объект FormData для упаковки файла
      const formData = new FormData();
      formData.append('file', this.selectedImg);
      formData.append('id', this.getAdvocatInfo.id);
      formData.append('fileFormat', 'img');
      formData.append('arrayName', 'advocatsInfo');
      // console.log(formData);
      // Отправляем запрос на сервер
      axiosClient
        .post(`${this.$store.state.URL__DATA}api/upload/file`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(() => {
          alert('Файл успешно загружен');
          this.$store.dispatch('GetData');
        })
        .catch((error) => {
          alert(`Ошибка при загрузке файла. Код ошибки: ${error.response.status}`);
        });
    },
    uploadPdf() {
      // Функция загрузки изображения
      // Создаем объект FormData для упаковки файла
      const formData = new FormData();
      formData.append('file', this.selectedPdf);
      formData.append('id', this.getAdvocatInfo.id);
      formData.append('fileFormat', 'pdf');
      formData.append('arrayName', 'advocatsInfo');
      // console.log(formData);
      // Отправляем запрос на сервер
      axiosClient
        .post(`${this.$store.state.URL__DATA}api/upload/file`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(() => {
          // Обработка успешного ответа
          alert('Файл успешно загружен');
          this.$store.dispatch('GetData');
        })
        .catch((error) => {
          // Обработка ошибок
          alert(`Ошибка при загрузке файла. Код ошибки: ${error.response.status}`);
        });
    },
    uploadObject() {
      // Функция загрузки изображения
      // Создаем объект FormData для упаковки файла
      this.saveData();
      const formData = new FormData();
      formData.append('arrayName', 'advocatsInfo');
      formData.append('id', this.getAdvocatInfo.id);
      formData.append('data', JSON.stringify(this.getAdvocatInfo));
      // console.log(formData);
      // Отправляем запрос на сервер
      axiosClient
        .post(`${this.$store.state.URL__DATA}api/update`, formData)
        .then((response) => {
          // Обработка успешного ответа
          alert('Данные обновлены:', response.data);
          console.log(response);
          this.$store.dispatch('GetData');
        })
        .catch((error) => {
          // Обработка ошибок
          alert('Ошибка обновления:', error);
          console.error('Ошибка обновления:', error);
        });
    },
    delPdf() {
      axiosClient
        .post(`${this.$store.state.URL__DATA}api/delete/pdf`, {
          arrayName: 'advocatsInfo',
          id: this.getAdvocatInfo.id,
        })
        .then(() => {
          this.$store.dispatch('GetData');
        });
    },
  },
  computed: {
    getAdvocatInfo() {
      // eslint-disable-next-line max-len
      return this.$store.state.receivedData.advocatsInfo.find(
        (item) => item.id === this.$route.params.id,
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.btn-admin-menu-editor {
  width: 25px;
}
.is-active {
  background-color: rgba(150, 150, 150, 0.329) !important;
}
.buttons-editor button {
  border: 0px;
  padding: 7px;
  border-left: 1px solid #0000001f;
  border-right: 1px solid #0000001f;
  margin: 0px 3px;
  background-color: transparent;
  height: 50px;
  border-radius: 5px;
  margin-bottom: 5px;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.363);
}
.buttons-editor {
  display: flex;
  justify-content: space-between;
}
.admin-lawyer__form-img {
  margin-top: 20px;
  text-align: center;
  margin-left: auto;
}
.admin-lawyer__form-img {
  margin: 10px;
  margin-left: auto;
}
.admin__lawyer-info {
  display: flex;
}
.admin__lawyer-info label {
  flex: 1 1 auto;
  margin: 4px;
}
.admin__lawyer-img {
  margin: 0px auto;
  max-width: 50%;
  padding: 30px;
  display: block;
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.329);
  border-radius: 20px;
}
.admin__lawyer-img img {
  display: block;
  margin: auto;
}
.img-admin {
  max-height: 300px;
}
.admin__lawyer__contacts__inputs {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  padding: 20px;
}
.admin__lawyer__contacts {
  display: flex;
  justify-content: space-between;
}
.admin__btn-save {
  margin: 20px auto;
  display: block;
  width: 20vw;
}
.admin-lawyer__articles
{
  border: 1px solid rgba(128, 128, 128, 0.438);
  border-radius: 10px;
  padding: 10px;
  display: inline-block;
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.329);
}
.tiptap {
  max-width: 1226px;
  padding: 0px 12px;
  margin: 0px auto;
  min-height: 600px !important;
  border: 1px solid rgb(0, 0, 0);
}
.tiptap {
  > * + * {
    margin-top: 0.75em;
  }

  ul,
  ol {
    padding: 0 1rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.1;
  }

  code {
    background-color: rgba(#616161, 0.1);
    color: #616161;
  }

  pre {
    background: #0d0d0d;
    color: #fff;
    font-family: "JetBrainsMono", monospace;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;

    code {
      color: inherit;
      padding: 0;
      background: none;
      font-size: 0.8rem;
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }

  blockquote {
    padding-left: 1rem;
    border-left: 2px solid rgba(#0d0d0d, 0.1);
  }

  hr {
    border: none;
    border-top: 2px solid rgba(#0d0d0d, 0.1);
    margin: 2rem 0;
  }
}
.tip-img {
  float: left;
  max-height: 300px;
}
</style>
