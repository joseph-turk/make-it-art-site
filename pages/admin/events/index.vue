<template>
  <div>
    <section class="hero is-warning">
      <div class="hero-body">
        <div class="container">
          <h2 class="title is-2">Events</h2>
          <h3 class="subtitle is-3">This is where you will manage the events/classes in the studio</h3>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <nuxt-link to="/admin/events/create" class="button is-primary">Add New Event</nuxt-link>

        <hr>

        <h3 class="title">Upcoming Events</h3>

        <table class="table is-fullwidth" v-if="events.length > 0">
          <thead>
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Capacity</th>
              <th>Full?</th>
              <th style="width: 160px"></th>
            </tr>
          </thead>

          <tbody>
            <tr
              v-for="event in events"
              :key="event.id"
            >
              <td>{{ event.name }}</td>
              <td>{{ event.date }}</td>
              <td>
                {{ formatTime(event.time_start) }}&ndash;
                {{ formatTime(event.time_end) }}
              </td>
              <td>{{ event.capacity }}</td>
              <td>{{ event.is_full ? '&#10004;' : '' }}</td>
              <td class="table-actions">
                <nuxt-link :to="`/admin/events/${event.id}`" class="button is-link">Details</nuxt-link>
                <nuxt-link :to="`/admin/events/${event.id}/edit`" class="button is-light">Edit</nuxt-link>
              </td>
            </tr>
          </tbody>
        </table>

        <p v-else>There are no upcoming events.</p>

        <hr>

        <h3 class="title">Past Events</h3>

        <table class="table is-fullwidth" v-if="pastEvents.length > 0">
          <thead>
            <tr>
              <th style="width: 100px"></th>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Capacity</th>
              <th>Full?</th>
            </tr>
          </thead>

          <tbody>
            <tr
              v-for="event in pastEvents"
              :key="event.id"
            >
              <td><nuxt-link :to="`/admin/events/${event.id}`" class="button">Edit</nuxt-link></td>
              <td>{{ event.name }}</td>
              <td>{{ event.date }}</td>
              <td>
                {{ formatTime(event.time_start) }}&ndash;
                {{ formatTime(event.time_end) }}
              </td>
              <td>{{ event.capacity }}</td>
              <td>{{ event.is_full ? '&#10004;' : '' }}</td>
            </tr>
          </tbody>
        </table>
        <p v-else>There are no past events.</p>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import { formatTime } from '~/utilities/dateHelpers.js'

export default {
  data () {
    return {
      events: [],
      pastEvents: []
    }
  },

  created () {
    this.fetchUpcomingEvents()
    this.fetchPastEvents()
  },

  methods: {
    fetchUpcomingEvents () {
      axios
        .get(`${process.env.apiUrl}/events/admin/`, {
          headers: {
            Authorization: `JWT ${this.$store.state.auth.accessToken}`
          }
        })
        .then(response => {
          this.events = response.data
        })
    },

    fetchPastEvents () {
      axios
        .get(`${process.env.apiUrl}/events/admin/past/`, {
          headers: {
            Authorization: `JWT ${this.$store.state.auth.accessToken}`
          }
        })
        .then(response => {
          this.pastEvents = response.data
        })
    },

    formatTime (time) {
      return formatTime(time)
    }
  }
}
</script>

<style scoped>
.table-actions {
  white-space: nowrap;
}

.table-actions *:not(:last-child) {
  margin-right: 0.5rem;
}
</style>
