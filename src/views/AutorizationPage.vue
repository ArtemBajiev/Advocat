<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template >
    <HeaderSlot></HeaderSlot>
    <div class="autorization__window">
        <p class="autorization__text">Авторизация</p>
        <form @submit.prevent="autorization()">
        <input class="form-control autorization__input" :class="{'is-invalid': erroe}"
         v-model="login" type="text" placeholder="Логин">
        <input class="form-control autorization__input" :class="{'is-invalid': erroe}"
         v-model="password" type="password" placeholder="Пароль">
         <div id="validationServer05Feedback" class="invalid-feedback">
             Неверный логин или пароль
        </div>
        <button class="btn btn-light">Войти</button>
        </form>
    </div>
</template>
<script>
import HeaderSlot from '@/components/HeaderSlot.vue';
import axios from 'axios';

export default {
  components: { HeaderSlot },
  data() {
    return {
      login: '',
      password: '',
      erroe: false,
    };
  },
  methods: {
    autorization() {
      axios.post('http://api.sudural.ru/api/login', {
        login: this.login,
        password: this.password,
      }).then((response) => {
        this.$router.push('/adminMain');
        localStorage.setItem('userAccesKey', response.data);
      }).catch(() => { this.erroe = true; });
    },
  },
};

</script>
<style lang="scss">
.autorization__window
{
    max-width: 600px;
    width: 100%;
    background-color: #a98d6f4f;
    display: flex;
    flex-direction: column;
    padding: 3%;
    margin: 10% auto;
    border-radius: 20px;
}
.autorization__input
{
    display: block;
    height: 50px;
    border-radius: 10px;
    border: 0px;
    box-shadow: 0px 0px 2px 0px black;
    padding: 10px;
}
.autorization__input:not(:last-child)
{
    margin-bottom: 20px;
}
.autorization__text
{
    color: #8C6843;
}
</style>
