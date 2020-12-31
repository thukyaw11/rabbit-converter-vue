import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueAnalytics from 'vue-analytics'
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueAnalytics, {
  id: 'UA-150323980-1',
});
export const bus = new Vue();

new Vue({
  bus,
  render: h => h(App),
}).$mount('#app')

