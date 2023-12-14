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
      selectedFile: {},
    };
  },
  methods: {
    handleFileChange(event) {
      // Обработчик изменения файла
      // eslint-disable-next-line prefer-destructuring
      this.selectedFile.file = event.target.files[0];
    },
    uploadImage() {
      // Функция загрузки изображения
      // Создаем объект FormData для упаковки файла
      const formData = new FormData();
      formData.append('file', this.selectedFile.file);
      formData.append('id', 'id1');
      formData.append('fileFormat', 'img');
      formData.append('arrayName', 'arrayName1');
      // console.log(formData);
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
    },
  },
};
</script>
<style scoped>

</style>
