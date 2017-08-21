import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import moment from "moment-timezone";
moment.tz.setDefault("UTC");

export default new Vuex.Store({
  state: {
    currentYear: 2017,
    currentMonth: 8,
    eventFormPosX: 0,
    eventFormPosY: 0,
    eventFormActive: false,
    events: [
        { description: "Event", date: moment() },
        { description: "Another", date: moment("2017-08-14", "YYYY-MM-DD") },
        { description: "Third", date: moment() },
    ],
    eventFormDate: moment()
  },
  mutations: {
    setCurrentMonth(state, payload) {
      state.currentMonth = payload;
    },
    setCurrentYear(state, payload) {
      state.currentYear = payload;
    },
    eventFormPos(state, payload) {
      state.eventFormPosX = payload.x;
      state.eventFormPosY = payload.y;
    },
    eventFormActive(state, payload) {
      state.eventFormActive = payload;
    },
    addEvent(state, payload) {
      state.events.push({
        description: payload,
        date: state.eventFormDate
      });
    },
    eventFormDate(state, payload) {
      state.eventFormDate = payload;
    }
  }
});