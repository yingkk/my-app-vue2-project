import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "@/styles/index.less"; // global css
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuex from "vuex";
import VueRouter from "vue-router";

import "@/mock";

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(Vuex);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
