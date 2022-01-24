import Vue from 'vue';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faBullhorn, faCog, faGuitar, faCompactDisc } from '@fortawesome/free-solid-svg-icons'
import { faInstagramSquare, faVk, faSpotify, faItunesNote, faYandex } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import moment from 'moment/moment.js';
import App from './App.vue';

library.add({faEnvelope, faBullhorn, faGuitar, faCompactDisc, faCog})
library.add({faInstagramSquare, faVk, faSpotify, faItunesNote, faYandex})
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(ElementUI);

require('moment/locale/ru');
Vue.use(require('vue-moment'), {moment});

const Gigs = () => import('./components/Gigs.vue');
// const Members = () => import('./components/Members.vue');
// const Gallery = () => import('./components/Gallery.vue');
const Music = () => import('./components/Music.vue');
// const Video = () => import('./components/Video.vue');
const News = () => import('./components/News.vue');
const Tech = () => import('./components/Tech.vue');

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
