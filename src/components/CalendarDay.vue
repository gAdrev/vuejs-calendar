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
            let eventFormDate = this.$store.state.eventFormDate;
            let eventFormActive = this.$store.state.eventFormActive;
            let isToday = this.day.isSame(this.$moment(), "day");
            return {
                day: true,
                today: isToday,
                past: this.day.isSameOrBefore(this.$moment(), "day") && !isToday,
                active: eventFormDate.isSame(this.day, "day") && eventFormActive
            }
        },
        events() {
            return this.$store.state.events.filter(evt => {
                return evt.date.isSame(this.day, "day");
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
            this.$store.commit("eventFormDate", this.day);
        }
    }
}
</script>
