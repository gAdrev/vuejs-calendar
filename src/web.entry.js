import Vue from 'vue'
import "./style.scss";

import store from "./store";

import moment from "moment-timezone";
moment.tz.setDefault("UTC");

Object.defineProperty(Vue.prototype, "$moment", {
  get() { return this.$root.moment }
});

import App from "./components/App.vue";

let st = store;

new Vue({
  el: '#app',
  data: {
    moment
  },
  components: {
    App
  },
  store: store
});
