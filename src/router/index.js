import { createRouter, createWebHashHistory } from 'vue-router';
import MainPage from '@/views/MainPage.vue';
import lawyerItem from '@/views/lawyerItem.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainPage,
  },
  {
    path: '/lawyer/:id',
    name: 'lawyer',
    component: lawyerItem,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
