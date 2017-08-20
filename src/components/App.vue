<template>
<div>
    <div id="day-bar">
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
        <div>Sun</div>
    </div>
    <div id="calendar">
        <div v-for="week in weeks" class="calendar-week">
            <calendar-day v-for="day in week" :day="day"></calendar-day>
        </div>
    </div>
</div>
</template>
<script>
import CalendarDay from "./CalendarDay.vue";

export default {
    data() {
        return {
            month: 8,
            year: 2017
        };
    },
    computed: {
        weeks() {
            let weeks = [],
                week = [];

            for (let day of this.days) {
                week.push(day);
                if (week.length === 7) {
                    weeks.push(week);
                    week = [];
                }
            }

            return weeks;
        },
        days() {
            // Days in current month
            let days = [],
                currentDay = this.$moment(`${this.year}-${this.month}-1`, "yyyy-M-D");

            do {
                days.push(currentDay);
                currentDay = this.$moment(currentDay).add(1, "days");
            } while (currentDay.month() + 1 === this.month);

            const SUNDAY = 0,
                  MONDAY = 1;

            // Padding days
            currentDay = this.$moment(days[0]);

            if (currentDay.day() !== MONDAY) {
                do {
                    currentDay = this.$moment(currentDay).subtract(1, "days");
                    days.unshift(currentDay);
                } while (currentDay.day() !== MONDAY);
            }

            currentDay = this.$moment(days[days.length - 1]);

            if (currentDay.day() !== SUNDAY) {
                do {
                    currentDay = this.$moment(currentDay).add(1, "days");
                    days.push(currentDay);
                } while (currentDay.day() !== SUNDAY);
            }

            return days;
        },
    },
    components: {
        CalendarDay
    }
}
</script>

