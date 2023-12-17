<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
    <HeaderSlot></HeaderSlot>
    <AdminMenu></AdminMenu>
    <section>
        <div class="container">
            <ul class="Admin__slider">
                <li class="Admin__slide-item" v-for="slide in
                 slideEventsData.slice().reverse()" :key="slide.id">
                    <!--eslint-disable-next-line vuejs-accessibility/anchor-has-content-->
                    <a :href="`${$store.state.URL__DATA}${slide.pdf}`">
                    <img width="300" :src="`${$store.state.URL__DATA}${slide.img}`" alt=""></a>
                    <button class="btn admin__slide__del-btn"
                     @click="delSlide(slide.id)"></button>
                </li>
                <li class="Admin__slide-item Admin__slide-item-form">
                    <form ref="formEvent" @submit.prevent="uploadFiles">
                        <label for="">Выберите картинку
                        <input @change="loadImg" type="file">
                        </label>
                        <label for="">Выберите файл pdf
                        <input @change="loadPdf" type="file">
                        </label>
                        <label for="">rus
                        <input id="" type="text" v-model="newSlide.text.rus"
                         cols="30" rows="10"></label>
                         <label for="">eng
                        <input name="" type="text" id="" v-model="newSlide.text.eng"
                         cols="30" rows="10"></label>
                        <button type="submit" class="btn btn-primary">Добавить</button>
                    </form>
                </li>
            </ul>
            <ul class="admin__event__cards">
                <!--<li class="admin__event__card-item"
                v-for="item in lawyerEventsData.slice().reverse()" :key="item.id">
                <router-link :to="{name:'AdminEventsItem', params:{id: item.id}}">
                    <div class="admin__event__card-item__text">
                        <h4>{{ item.cardHeader.rus }}</h4><div v-html="item.cardText.rus"></div>
                    </div><img src="" width="200px" alt="">
                </router-link>
                </li>-->
                <li class="admin-event__item"
                 v-for="item in lawyerEventsData.slice().reverse()" :key="item.id">
                 <router-link :to="{name:'AdminEventsItem', params:{id: item.id}}">
                  <EventCard
                 :item="item"></EventCard></router-link>
                 <button class="btn
                 btn-del-event" @click.prevent="delEvent(item.id)"></button>
                </li>
                <button class="btn admin-event__item add-events" @click.prevent="addEvent()">
                    +
                </button>
            </ul>
        </div>
    </section>
</template>
<script>
import HeaderSlot from '@/components/HeaderSlot.vue';
import AdminMenu from '@/components/AdminMenu.vue';
import EventCard from '@/components/EventCard.vue';
import axiosClient from '@/axios';

export default {
  components: { HeaderSlot, AdminMenu, EventCard },
  data() {
    return {
      newSlide: {
        img: '',
        pdf: '',
        text: {
          rus: '',
          eng: '',
        },
      },
    };
  },
  computed: {
    lawyerEventsData() {
      return this.$store.state.receivedData.lawyerEvents;
    },
    slideEventsData() {
      return this.$store.state.receivedData.slideEvents;
    },
  },
  mounted() {
    // eslint-disable-next-line no-unused-vars
  },
  methods: {
    loadImg(event) {
      if (event.target.files[0].name.split('.').pop() === 'jpg'
      || event.target.files[0].name.split('.').pop() === 'png'
      || event.target.files[0].name.split('.').pop() === 'jpeg') {
        // eslint-disable-next-line prefer-destructuring
        this.newSlide.img = event.target.files[0];
      } else {
        this.$refs.formEvent.reset();
        alert('Неверный формат файла');
      }
    },
    loadPdf(event) {
      // eslint-disable-next-line prefer-destructuring
      if (event.target.files[0].name.split('.').pop() === 'pdf'
      || event.target.files[0].name.split('.').pop() === 'pptx') {
        // eslint-disable-next-line prefer-destructuring
        this.newSlide.pdf = event.target.files[0];
      } else {
        this.$refs.formEvent.reset();
        alert('Неверный формат файла');
      }
    },
    uploadFiles() {
      // Функция загрузки изображения
      // Создаем объект FormData для упаковки файла
      const formData = new FormData();
      formData.append('filePdf', this.newSlide.pdf);
      formData.append('fileImg', this.newSlide.img);
      formData.append('text', JSON.stringify(this.newSlide.text));
      formData.append('lastId', this.slideEventsData.length);
      // console.log(formData);
      // Отправляем запрос на сервер
      axiosClient
        .post('http://api.sudural.ru/api/add/slide', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((response) => {
          // Обработка успешного ответа
          console.log('Файл успешно загружен:', response.data);
          this.$refs.formEvent.reset();
          this.$store.dispatch('GetData');
        })
        .catch((error) => {
          // Обработка ошибок
          console.error('Ошибка при загрузке файла:', error);
        });
    },
    addEvent() {
      axiosClient.post(`${this.$store.state.URL__DATA}api/add/lawyer/event`, {
        // eslint-disable-next-line max-len
        lastId: this.lawyerEventsData.length > 0 ? this.lawyerEventsData[this.lawyerEventsData.length - 1].id : 1,
      }).then(() => {
        // eslint-disable-next-line max-len
        console.log(this.lawyerEventsData.lenght);
        alert('Добавлен');
        this.$store.dispatch('GetData');
      });
    },
    delSlide(id) {
      if (window.confirm('Подтвердите удаление')) {
        const formData = new FormData();
        formData.append('id', id);
        console.log(id);
        axiosClient.post('http://api.sudural.ru/api/delete/slide', formData)
          .then((response) => {
            console.log(response.data);
            this.$store.dispatch('GetData');
          });
      }
    },
    delEvent(id) {
      if (window.confirm('Подтвердите удаление')) {
        console.log(id);
        axiosClient.post(`${this.$store.state.URL__DATA}api/delete/lawyer/event`, {
          id,
        }).then(() => {
          alert('Удалён');
          this.$store.dispatch('GetData');
        });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.Admin__slider
{
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    justify-content: center;
    margin-top: 20px;
    border-radius: 20px;
    padding: 20px;
    box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.329);
}
.tiptap{
  border: 1px solid rgba(128, 128, 128, 0.418) !important;
  border-radius: 20px;
    padding: 20px;
}
.admin__slide__del-btn
{
    position: absolute;
    z-index: 1;
    right: 0;
    border-radius: 50%;
    padding: 10px;
    background-color: transparent;
    background-color: red;
    background-image: url('../assets/img/close.svg');
    background-size: 60%;
    background-position: center;
    background-repeat: no-repeat;
    margin: 10px;
}
.Admin__slide-item
{
    position: relative;
}
.Admin__slide-item-form > *
{
    display: flex;
    flex-direction: column;
    height: 100%;
    max-width: 300px;
    justify-content: space-between;
    text-align: center;
    border: 1px solid rgba(128, 128, 128, 0.432);
    padding: 20px;
    border-radius: 20px;
    box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.329);
}
.admin__event__cards
{
  list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.admin-event__item
{
  position: relative;
  width: 48%;
  margin: 30px 0px;
}
.admin__event__card-item
{
  position: relative;
}
.btn-del-event{
  position: absolute;
  right: 20px;
  top: 0;
  border-radius: 50%;
  z-index: 10;
  margin-top: 10px;
    border-radius: 50%;
    padding: 10px;
    background-color: transparent;
    background-color: red;
    background-image: url('../assets/img/close.svg');
    background-size: 60%;
    background-position: center;
    background-repeat: no-repeat;
    margin: 10px;
}
.admin__event__card-item__text
{
    height: 100%;
    width: 100%;
}
.add-events
{
    background-color: rgba(128, 128, 128, 0.349);
    font-size: 50px;
    font-weight: 700;
    color: white;
}
.admin__event__card-item
{
    border: 1px solid black;
    padding: 10px;
    border-radius: 10px;
    width: 49%;
    display: inline-block;
    border: 1px solid rgba(128, 128, 128, 0.418);
    box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.384);
    margin-bottom: 25px;
}

</style>
