import Vue from "vue"
import App from "./App.vue"
import "@/assets/css/tailwind.css";
import VueChartkick from 'vue-chartkick'
import 'chartkick/chart.js'
import {VueSpinners} from "@saeris/vue-spinners";

import router from "@/router"

import { dollarFilter } from "@/filters" //Implementamos los filtros
import { percentFilter } from "@/filters"

Vue.use(VueSpinners);
Vue.use(VueChartkick)
Vue.filter("dollar", dollarFilter) //Para utilizar llamamos una funcion de vue
Vue.filter("percent", percentFilter) //Para utilizar llamos una funcion
Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app")
