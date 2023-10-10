import { createRouter, createWebHashHistory } from 'vue-router';
import MainPage from '@/views/MainPage.vue';
import lawyerItem from '@/views/lawyerItem.vue';
import LegalCenter from '@/views/LegalCenter.vue';

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
  {
    path: '/Legal_center',
    name: 'legalCenter',
    component: LegalCenter,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
