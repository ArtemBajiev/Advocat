/* eslint-disable import/no-extraneous-dependencies */
import { createApp } from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.vue';
import router from './router';
import store from './store';
import HeaderItem from './components/HeaderItem.vue';
import '../public/normalize.css';

createApp(App).use(store).use(router)
  .component('HeaderItem', HeaderItem)
  .mount('#app');
