import { createRouter, createWebHashHistory } from 'vue-router';
import MainPage from '@/views/MainPage.vue';
import lawyerItem from '@/views/lawyerItem.vue';
import EventsPage from '@/views/EventsPage.vue';
import EventItem from '@/views/EventItem.vue';
import LegalCenter from '@/views/LegalCenter.vue';
import AdminMain from '@/views/AdminMain.vue';
import AdminLawyer from '@/views/AdminLawyer.vue';

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
    path: '/Events',
    name: 'EventsPage',
    component: EventsPage,
  },
  {
    path: '/Event/:id',
    name: 'event',
    component: EventItem,
  },
  {
    path: '/Event/:id',
    name: 'event',
    component: EventItem,
  },
  {
    path: '/LegalCenter',
    name: 'LegalCenter',
    component: LegalCenter,
  },
  {
    path: '/adminMain',
    name: 'AdminMain',
    component: AdminMain,
  },
  {
    path: '/AdminLawyer/:id',
    name: 'AdminLawyer',
    component: AdminLawyer,
  },
];

const router = createRouter({
  history: createWebHashHistory(),

  scrollBehavior() {
    return { left: 0, top: 0 };
  },
  routes,
});

export default router;
