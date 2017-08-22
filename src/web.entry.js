import Vue from 'vue'
import "./style.scss";

import store from "./store";

import moment from "moment-timezone";
moment.tz.setDefault("UTC");

Object.defineProperty(Vue.prototype, "$moment", {
  get() { return this.$root.moment }
});

import App from "./components/App.vue";

let events = [
  { description: "Event", date: moment() },
  { description: "Another", date: moment("2017-08-14", "YYYY-MM-DD") },
  { description: "Third", date: moment() },
];
let initialState = Object.assign({}, store.state, { events });

store.replaceState(initialState);

new Vue({
  el: '#app',
  data: {
    moment
  },
  components: {
    App
  },
  store: store,
  render(createElement) {
    let vnode = createElement(
      "div",
      { attrs: { id: "app" } },
      [
        createElement("app")
      ]
    );
    console.log(vnode);
    return vnode;
  }
});
