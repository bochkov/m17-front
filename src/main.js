import Vue from 'vue';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(ElementUI);

const moment = require('moment');
require('moment/locale/ru');
Vue.use(require('vue-moment'), {moment});

const Gigs = () => import('./components/Gigs.vue');
// const Members = () => import('./components/Members.vue');
// const Gallery = () => import('./components/Gallery.vue');
const Music = () => import('./components/Music.vue');
// const Video = () => import('./components/Video.vue');
const News = () => import('./components/News.vue');
const Tech = () => import('./components/Tech.vue')
const routes = [
  {path: '/gigs', component: Gigs},
  // {path: '/members', component: Members},
  // {path: '/gallery', component: Gallery},
  {path: '/music', component: Music},
  // {path: '/video', component: Video},
  {path: '/news', component: News },
  {path: '/tech', component: Tech},
];
const router = new VueRouter({routes});

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
