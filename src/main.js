import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  render: (h) => h(App),
  created() {
    console.log('created');
  },
});
// .$mount('#app'); This is required only if the in stance doesn't have el option
