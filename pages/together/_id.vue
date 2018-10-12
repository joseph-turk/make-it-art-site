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
              <span
                v-if="event.is_full"
                class="has-text-danger"
              >
                (Wait List)
              </span>
            </h1>
            <h2 class="subtitle is-3">
              {{ formatDate(event.date) }}<br>
              ({{ formatTime(event.time_start) }}&ndash;
              {{ formatTime(event.time_end) }})
            </h2>
          </div>
        </div>

        <hr>

        <div class="description is-size-4">{{ event.description }}</div>

        <button type="button" class="button is-primary" @click="toggleModal">Register</button>

        <hr>

        <nuxt-link to="/together">Back to All Events</nuxt-link>
      </div>
    </section>

    <event-register-modal
      :showModal="showModal"
      :event="event"
      @toggleModal="toggleModal"
    />
  </div>
</template>

<script>
import axios from 'axios'
import { formatDate, formatTime } from '~/utilities/dateHelpers'
import EventRegisterModal from '~/components/EventRegisterModal.vue'

export default {
  components: {
    EventRegisterModal
  },

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
