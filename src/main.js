import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import vuetify from './plugins/vuetify';
import {routes} from './routes';
import VueResource from 'vue-resource';

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
  mode: "history",
  routes
})

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
