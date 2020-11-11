import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './router'
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/vi'


Vue.use(VueRouter)
Vue.use(ElementUI, { locale })


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
