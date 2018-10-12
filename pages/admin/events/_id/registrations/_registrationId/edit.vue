<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-two-thirds-desktop">
            <h2 class="title is-2">Edit Registration: ({{ registration.name }})</h2>

            <hr>

            <form @submit.prevent="handleSubmit">
              <div class="field">
                <label class="label">Event</label>
                <input
                  type="text"
                  class="input is-disabled is-static"
                  v-model="registration.event.name"
                  readonly
                >
              </div>

              <div class="field">
                <label class="label">Name</label>
                <input type="text" class="input" v-model="registration.name">
              </div>

              <div class="field">
                <label class="label">Email</label>
                <input type="text" class="input" v-model="registration.email">
              </div>

              <div class="field">
                <label class="checkbox">
                  <input type="checkbox" v-model="registration.is_wait_list">
                  Wait List?
                </label>
              </div>

              <hr>

              <div class="field form-buttons">
                <button
                  type="submit"
                  class="button is-primary"
                  :class="{ 'is-loading': saveIsLoading }"
                >
                  Save
                </button>
                <nuxt-link
                  :to="`/admin/events/${registration.event.id}`"
                  class="button is-light"
                >
                  Cancel
                </nuxt-link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData ({ params, store }) {
    return axios
      .get(`${process.env.apiUrl}/events/admin/registrations/${params.registrationId}/`, {
        headers: {
          'Authorization': `JWT ${store.state.auth.accessToken}`
        }
      })
      .then(response => {
        return {
          registration: response.data
        }
      })
      .catch(error => {
        throw error
      })
  },

  data () {
    return {
      saveIsLoading: false
    }
  },

  methods: {
    handleSubmit () {
      this.saveIsLoading = true

      axios
        .patch(`${process.env.apiUrl}/events/admin/registrations/${this.registration.id}/`,
          this.registration,
          {
            headers: {
              'Authorization': `JWT ${this.$store.state.auth.accessToken}`
            }
          }
        )
        .then(response => {
          this.$router.push(`/admin/events/${this.registration.event.id}`)
        })
        .catch(error => {
          this.saveIsLoading = false
          throw error
        })
    }
  }
}
</script>
