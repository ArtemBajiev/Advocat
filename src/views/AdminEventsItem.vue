<!-- eslint-disable vuejs-accessibility/media-has-caption -->
<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <HeaderSlot></HeaderSlot>
  <AdminMenu></AdminMenu>
  <div class="container">
    <fieldset class="admin__card-form">
      <div class="admin__card-form__input-container">
        <div>
          <label for=""
            >Заголовок рус
            <input class="form-control" type="text" v-model="eventsItemData.cardHeader.rus" />
          </label>
          <label for=""
            >Заголовок eng
            <input class="form-control" type="text" v-model="eventsItemData.cardHeader.eng" />
          </label>
        </div>
        <div>
          <label for=""
            >Текс отображаемый на карточке рус
            <textarea
              class="form-control"
              name=""
              id=""
              v-model="eventsItemData.cardText.rus"
              cols="50"
              rows="5"
            ></textarea>
          </label>
          <label for=""
            >Текс отображаемый на карточке eng
            <textarea
              class="form-control"
              name=""
              id=""
              v-model="eventsItemData.cardText.eng"
              cols="50"
              rows="5"
            ></textarea>
          </label>
        </div>
      </div>
      <form class="admin-events__load-img" @submit.prevent="uploadImage" action="">
        <label for="img"
          ><img height="200" :src="$store.state.URL__DATA + '' + eventsItemData.img" alt="pzs" />
          <input id="img" @change="loadImage" type="file" />
        </label>
        <button type="submit" class="btn btn-primary">Загрузить картинку</button>
      </form>
    </fieldset>
    <p>РУС</p>
    <TextEditor ref="textEditorRus" :content="eventsItemData.content.rus"></TextEditor>
    <hr />
    <p>ENG</p>
    <TextEditor ref="textEditorEng" :content="eventsItemData.content.eng"></TextEditor>
    <div class="admin-events__control-form">
      <div v-if="eventsItemData.pdf">
        <a :href="$store.state.URL__DATA + '' + eventsItemData.pdf">Загруженный файл</a>
      </div>
      <form @submit.prevent="uploadPdf" action="">
        <label for="">Выбрать файл PDF <input type="file" @change="loadPdf" /></label><br />
        <button
          type="submit"
          class="btn btn-primary"
          v-text="eventsItemData.pdf ? 'Заменить PDF' : 'Добавить PDF'"
        ></button>
        <button @click.prevent="delPdf" class="btn btn-danger">Удалить</button>
      </form>
    </div>
    <button class="btn btn-primary admin__btn-save" @click="uploadObject">Сохранить</button>
  </div>
</template>
<script>
import HeaderSlot from '@/components/HeaderSlot.vue';
import AdminMenu from '@/components/AdminMenu.vue';
import TextEditor from '@/components/TextEditor.vue';
import axiosClient from '../axios';

export default {
  components: {
    TextEditor,
    HeaderSlot,
    AdminMenu,
  },

  data() {
    return {
      adminAdvocatData: [],
      selectedImg: '',
      selectedPdf: null,
      fileUrl: '',
    };
  },

  methods: {
    saveData() {
      this.eventsItemData.content.rus = this.$refs.textEditorRus.editor.getHTML();
      this.eventsItemData.content.eng = this.$refs.textEditorEng.editor.getHTML();
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
      formData.append('id', this.eventsItemData.id);
      formData.append('fileFormat', 'img');
      formData.append('arrayName', 'lawyerEvents');
      // console.log(formData);
      // Отправляем запрос на сервер
      axiosClient
        .post('http://api.sudural.ru/api/upload/file', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((response) => {
          // Обработка успешного ответа
          console.log('Файл успешно загружен:', response.data);
          this.$store.dispatch('GetData');
        })
        .catch((error) => {
          // Обработка ошибок
          console.error('Ошибка при загрузке файла:', error);
        });
    },
    uploadPdf() {
      // Функция загрузки изображения
      // Создаем объект FormData для упаковки файла
      const formData = new FormData();
      formData.append('file', this.selectedPdf);
      formData.append('id', this.eventsItemData.id);
      formData.append('fileFormat', 'pdf');
      formData.append('arrayName', 'lawyerEvents');
      // console.log(formData);
      // Отправляем запрос на сервер
      axiosClient
        .post('http://api.sudural.ru/api/upload/file', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((response) => {
          // Обработка успешного ответа
          console.log('Файл успешно загружен:', response.data);
          this.$store.dispatch('GetData');
        })
        .catch((error) => {
          // Обработка ошибок
          console.error('Ошибка при загрузке файла:', error);
        });
    },
    uploadObject() {
      this.saveData();
      const formData = new FormData();
      formData.append('arrayName', 'lawyerEvents');
      formData.append('id', this.eventsItemData.id);
      formData.append('data', JSON.stringify(this.eventsItemData));
      // console.log(formData);
      // Отправляем запрос на сервер
      axiosClient
        .post('http://api.sudural.ru/api/update', formData)
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
          arrayName: 'lawyerEvents',
          id: this.eventsItemData.id,
        })
        .then(() => {
          this.$store.dispatch('GetData');
        });
    },
  },
  computed: {
    eventsItemData() {
      return this.$store.state.receivedData.lawyerEvents.find(
        (item) => item.id === Number(this.$route.params.id),
      );
    },
  },
  beforeUnmount() {
    // this.editor.destroy();
  },
};
</script>
<style lang="scss" scoped>
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
.admin-events__load-img {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.btn-admin-menu-editor {
  width: 25px;
}

.admin__card-form {
  display: flex;
  border: 1px solid rgba(128, 128, 128, 0.548);
  max-width: 800px;
  justify-content: space-between;
  margin: 0px auto;
  margin-bottom: 40px;
  padding: 10px;
  border-radius: 20px;
}
.admin__btn-save {
  margin: 20px auto;
  display: block;
  width: 20vw;
}
.admin__card-form__input-container label {
  width: 100%;
  padding-right: 20px;
}
.admin-events__control-form{

}
</style>
