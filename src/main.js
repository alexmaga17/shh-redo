import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vue2Editor from "vue2-editor";
import axios from 'axios';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import StarRating from 'vue-star-rating'

Vue.use(Vue2Editor);
Vue.use(VueSweetalert2);
Vue.use(StarRating);

Vue.config.productionTip = false; 

new Vue({
  router,
  store,
  axios,
  render: (h) => h(App),
}).$mount("#app");
