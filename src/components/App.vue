<template>
    <div>
        <div v-for="day in days">{{ day }}</div>
    </div>
</template>
<script>

export default {
    data() {
        return {
            month: 2,
            year: 2017
        };
    },
    computed: {
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
        }
    }
}
</script>

