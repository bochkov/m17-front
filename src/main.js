import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'

Vue.config.productionTip = false;

Vue.use(ElementUI);

const moment = require('moment');
require('moment/locale/ru');
Vue.use(require('vue-moment'), {moment});

new Vue({
  render: h => h(App),
}).$mount('#app');
