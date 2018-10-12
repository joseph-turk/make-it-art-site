<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-half-tablet">
            <h2 class="title is-2">Edit Field</h2>

            <hr>

            <form @submit.prevent="handleSubmit">
              <div class="field">
                <label class="label">Field Name</label>
                <input
                  type="text"
                  class="input is-static"
                  readonly
                  v-model="content.field_name"
                >
              </div>

              <div class="field">
                <label class="label">Field Text</label>
                <input
                  type="text"
                  class="input"
                  v-model="content.field_content"
                >
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
                  to="/admin"
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
  asyncData ({ params, store }) {
    return axios
      .get(`${process.env.apiUrl}/content/admin/${params.id}/`, {
        headers: {
          'Authorization': `JWT ${store.state.auth.accessToken}`
        }
      })
      .then(response => {
        return {
          content: response.data
        }
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
        .patch(`${process.env.apiUrl}/content/admin/${this.content.id}/`,
          {
            field_content: this.content.field_content
          },
          {
            headers: {
              'Authorization': `JWT ${this.$store.state.auth.accessToken}`
            }
          })
        .then(() => {
          this.$router.push('/admin')
        })
        .catch(error => {
          this.saveIsLoading = false
          throw error
        })
    }
  }
}
</script>
