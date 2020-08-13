import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';

import Promo from './Promo.vue';

Vue.config.productionTip = false;

Vue.use(ElementUI);

new Vue({
  render: h => h(Promo),
}).$mount('#app-promo');
