import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
const data = { a: 1 };
// eslint-disable-next-line no-new
const app = new Vue({
  el: '#app',
  data,
  render: (h) => h(App),
  created() {
    console.log('created');
  },
  router,
  store,
});
// .$mount('#app'); This is required only if the in stance doesn't have el option

store.$app = app; // this line adds $app to your store object
