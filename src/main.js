import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  render: (h) => h(App),
  created() {
    console.log('created');
  },
  router,
  store,
});
// .$mount('#app'); This is required only if the in stance doesn't have el option
