import Vue from 'vue'
import App from './App.vue'
import router from './router';

import demoBlock from './components/demo-block.vue';
import LUI from '../packages/index';
// import '@/assets/css/index.scss';

Vue.config.productionTip = false

Vue.component('demo-block', demoBlock);
Vue.use(LUI);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
