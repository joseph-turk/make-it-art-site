<template>
  <div>
    <section class="hero is-medium is-warning">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-2">Workshops and Classes at Springs Studio/Gallery</h1>
          <h2 class="subtitle is-3">This is where the signup stuff will go.</h2>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="title is-3">Upcoming Events</h2>

        <div class="columns">
          <event-preview
            v-for="event in events"
            :key="event.id"
            :name="event.name"
            :eventID="event.id"
            :graphicSrc="event.graphic"
            :date="event.date"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import EventPreview from "~/components/EventPreview.vue";

export default {
  components: {
    EventPreview
  },

  created() {
    axios.get(`${process.env.apiUrl}/events/`).then(response => {
      this.events = response.data;
    });
  },

  data() {
    return {
      events: []
    };
  }
};
</script>
