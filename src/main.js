import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vue2Editor from "vue2-editor";
import axios from 'axios';

Vue.use(Vue2Editor);

Vue.config.productionTip = false; 

new Vue({
  router,
  store,
  axios,
  render: (h) => h(App),
}).$mount("#app");
