<template>
    <div :class="classObject" @click="captureClick">
        {{ day.format("D") }}
        <ul class="event-list">
            <li v-for="event in events">{{ event.description }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ["day"],
    computed: {
        classObject() {
            let isToday = this.day.isSame(this.$moment(), "day");
            return {
                day: true,
                today: isToday,
                past: this.day.isSameOrBefore(this.$moment(), "day") && !isToday
            }
        },
        events() {
            let mockData = [
                { description: "Event", date: this.$moment() },
                { description: "Another", date: this.$moment("2017-08-14", "YYYY-MM-DD") },
                { description: "Third", date: this.$moment() },
            ];
            return mockData.filter(event => {
                return event.date.isSame(this.day, "day");
            });
        }
    },
    methods: {
        captureClick(event) {
            const pos = {
                x: event.clientX,
                y: event.clientY
            };
            this.$store.commit("eventFormPos", pos);
            this.$store.commit("eventFormActive", true);
        }
    }
}
</script>
