import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  render: (h) => h(App),
  created() {
    console.log('created');
  },
  router,
});
// .$mount('#app'); This is required only if the in stance doesn't have el option
