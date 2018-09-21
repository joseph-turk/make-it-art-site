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
            <h1 class="title is-2">{{ event.name }}</h1>
            <h2 class="subtitle is-3">{{ event.date }}<br>({{ event.time_start }}&ndash;{{ event.time_end }})</h2>
          </div>
        </div>

        <hr>

        <div class="description is-size-4">{{ event.description }}</div>

        <button type="button" class="button is-primary" @click="toggleModal">Register</button>

        <hr>

        <nuxt-link to="/together">Back to All Events</nuxt-link>
      </div>
    </section>

    <event-register-modal :showModal="showModal" @toggleModal="toggleModal" />
  </div>
</template>

<script>
import axios from 'axios'
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
