<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column">
            <figure class="image">
              <img :src="event.graphic">
            </figure>
          </div>

          <div class="column event-info">
            <h1 class="title is-2">
              {{ event.name }}
              <span v-if="event.is_full">
                (Full)
              </span>
            </h1>
            <h2 class="subtitle is-3">
              {{ formatDate(event.date) }}<br>
              ({{ formatTime(event.time_start) }}&ndash;
              {{ formatTime(event.time_end) }})
            </h2>

            <nuxt-link
              :to="`/admin/events/${event.id}/edit`"
              class="button is-primary"
              @click="toggleModal"
            >
              Edit Event
            </nuxt-link>
          </div>
        </div>

        <hr>

        <div class="description is-size-4">{{ event.description }}</div>

        <hr>

        <div class="columns">
          <div class="column">
            <h2 class="title">Registered</h2>

            <div v-if="getRegistrations(event).length > 0">
              <table class="table is-fullwidth">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th style="width: 100px"></th>
                  </tr>
                </thead>

                <tbody>
                  <tr
                    v-for="registration in getRegistrations(event)"
                    :key="registration.id"
                  >
                    <td>{{ registration.name }}</td>
                    <td>{{ registration.email }}</td>
                    <td>
                      <nuxt-link
                        :to="`/admin/events/${event.id}/registrations/${registration.id}/edit`"
                        class="button"
                      >
                        Edit
                      </nuxt-link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p v-else>No one has registered for this event yet</p>
          </div>

          <div class="column">
            <h2 class="title">Wait List</h2>

            <div v-if="getWaitList(event).length > 0">
              <table class="table is-fullwidth">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th style="width: 100px"></th>
                  </tr>
                </thead>

                <tbody>
                  <tr
                    v-for="registration in getWaitList(event)"
                    :key="registration.id"
                  >
                    <td>{{ registration.name }}</td>
                    <td>{{ registration.email }}</td>
                    <td>
                      <nuxt-link
                        :to="`/admin/events/${event.id}/registrations/${registration.id}/edit`"
                        class="button"
                      >
                        Edit
                      </nuxt-link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p v-else>No one is on the wait list for this event</p>
          </div>
        </div>

        <hr>

        <nuxt-link to="/admin/events">Back to All Events</nuxt-link>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import { formatDate, formatTime } from '~/utilities/dateHelpers'
import { getRegistrations, getWaitList } from '~/utilities/eventHelpers'

export default {
  asyncData ({ params }) {
    return axios
      .get(`${process.env.apiUrl}/events/${params.id}/`)
      .then(response => {
        return {
          event: response.data
        }
      })
  },

  data () {
    return {
      showModal: false
    }
  },

  methods: {
    toggleModal () {
      this.showModal = !this.showModal
    },

    formatDate (date) {
      return formatDate(date)
    },

    formatTime (time) {
      return formatTime(time)
    },

    getRegistrations (event) {
      return getRegistrations(event)
    },

    getWaitList (event) {
      return getWaitList(event)
    }
  }
}
</script>

<style scoped>
.event-info {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.description {
  margin-bottom: 2rem;
}
</style>
