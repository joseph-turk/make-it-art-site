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

        <table class="table is-fullwidth">
          <thead>
            <tr>
              <th style="width: 100px"></th>
              <th>Name</th>
              <th>Date</th>
              <th>Capacity</th>
              <th>Full?</th>
            </tr>
          </thead>

          <tbody>
            <tr
              v-for="event in events"
              :key="event.id"
            >
              <td><nuxt-link :to="`/admin/events/${event.id}`" class="button">Edit</nuxt-link></td>
              <td>{{ event.name }}</td>
              <td>{{ event.date }}</td>
              <td>{{ event.capacity }}</td>
              <td>{{ event.is_full ? '&#10004;' : '' }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      events: []
    }
  },

  created () {
    axios
      .get(`${process.env.apiUrl}/events/admin/`, {
        headers: {
          Authorization: `JWT ${this.$store.state.auth.accessToken}`
        }
      })
      .then(response => {
        this.events = response.data
      })
  }
}
</script>
