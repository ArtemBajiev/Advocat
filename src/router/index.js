import { createRouter, createWebHashHistory } from 'vue-router';
import MainPage from '@/views/MainPage.vue';
import lawyerItem from '@/views/lawyerItem.vue';
import EventsPage from '@/views/EventsPage.vue';
import EventItem from '@/views/EventItem.vue';

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
    component: EventsPage,
  },
  {
    path: '/Event/:id',
    name: 'event',
    component: EventItem,
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
