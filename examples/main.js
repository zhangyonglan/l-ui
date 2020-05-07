import Vue from 'vue'
import App from './App.vue'
import router from './router';

import Crumb from './components/crumb.vue'
import demoBlock from './components/demo-block.vue';
import LUI from '../packages/index';
import '@/assets/css/index.scss';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

Vue.component('demo-block', demoBlock);
Vue.use(LUI);
Vue.use(ElementUI);

Vue.component('bread-crumb',Crumb);
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
