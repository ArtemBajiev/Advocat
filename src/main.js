import { createApp } from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.vue';
import router from './router';
import store from './store';
import HeaderItem from './components/HeaderItem.vue';

createApp(App).use(store).use(router).component('HeaderItem', HeaderItem)
  .mount('#app');
