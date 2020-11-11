import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './router'
import ElementUI from 'element-ui';


Vue.use(VueRouter)
Vue.use(ElementUI);

const router = new VueRouter({
  routes
})
// bus event
export const busData = new Vue();
Vue.config.productionTip = false

new Vue({
  el:'#app',
  router,
  render: h => h(App)
});
