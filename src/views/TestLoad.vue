<!-- Ваш Vue-компонент -->
<template>
  <br>
  <br>
  <br>
  <br>
  <br>
    <div>
      <!--eslint-disable-next-line vuejs-accessibility/form-control-has-label-->
      <input type="file" @change="handleFileChange" />
      <button @click="uploadImage">Загрузить изображение</button>
    </div>
    <br>
    <br>
    <br>
    <div class="div">1</div>
    <div class="div">1</div>
    <div class="nodiv">2</div>
  </template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      selectedFile: null,
    };
  },
  methods: {
    handleFileChange(event) {
      // Обработчик изменения файла
      const file = {};
      // eslint-disable-next-line prefer-destructuring
      file.file = event.target.files[0];
      file.text = { text1: '123123', text2: '123123' };
      this.selectedFile = file;
    },
    uploadImage() {
      // Функция загрузки изображения
      if (this.selectedFile) {
        // Создаем объект FormData для упаковки файла
        const formData = new FormData();
        formData.append('file', this.selectedFile.file);
        formData.append('text', this.selectedFile.text);
        console.log(formData);
        // Отправляем запрос на сервер
        axios
          .post('http://api.sudural.ru/api/upload', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          .then((response) => {
            // Обработка успешного ответа
            console.log('Файл успешно загружен:', response.data);
          })
          .catch((error) => {
            // Обработка ошибок
            console.error('Ошибка при загрузке файла:', error);
          });
      } else {
        console.error('Выберите файл для загрузки.');
      }
    },
  },
};
</script>
<style scoped>

</style>
