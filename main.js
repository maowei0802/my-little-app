import App from './App';
import module from 'ajax/api/index.js';
import userMixin from './common/rulesMixin.js';
import commonMixin from './common/commonMixin.js';
import store from './store/index.js'
// #ifndef VUE3
import Vue from 'vue';
Vue.config.productionTip = false;
Vue.prototype.$http = module
App.mpType = 'app';
Vue.use(userMixin);
Vue.use(commonMixin);
const app = new Vue({
    ...App,
	store
});
app.$mount();
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue';
export function createApp() {
  const app = createSSRApp(App);
  return {
    app,
  }
}
// #endif