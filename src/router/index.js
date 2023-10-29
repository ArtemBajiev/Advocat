import { createRouter, createWebHashHistory } from 'vue-router';
import MainPage from '@/views/MainPage.vue';
import lawyerItem from '@/views/lawyerItem.vue';
import EventsPage from '@/views/EventsPage.vue';
import EventItem from '@/views/EventItem.vue';
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
    component: () => import(/* webpackChunkName:"AdminMain" */'../views/AdminMain.vue'),
  },
  {
    path: '/AdminLawyer/:id',
    name: 'AdminLawyer',
    component: () => import(/* webpackChunkName:"AdminLawyer" */'../views/AdminLawyer.vue'),
  },
  {
    path: '/AdminLegalCenter',
    name: 'AdminLegalCenter',
    component: () => import(/* webpackChunkName:"AdminLegalCenter" */'../views/AdminLegalCenter.vue'),
  },
  {
    path: '/AdminEvents',
    name: 'AdminEvents',
    component: () => import(/* webpackChunkName:"AdminEvents" */'../views/AdminEvents.vue'),
  },
  {
    path: '/AdminEventsItem/:id',
    name: 'AdminEventsItem',
    component: () => import(/* webpackChunkName:"AdminEventsItem" */'../views/AdminEventsItem.vue'),
  },
  {
    path: '/Aut',
    name: 'Aut',
    component: () => import(/* webpackChunkName:"Aut" */'../views/AutorizationPage.vue'),
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
