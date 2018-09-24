<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-half">
            <h2 class="title is-2">Edit Event: {{ event.name }}</h2>

            <hr>

            <form @submit.prevent="handleSubmit">
              <div class="field">
                <label for="eventName" class="label">Name</label>
                <input type="text" class="input" id="eventName" v-model="event.name">
              </div>

              <div class="field">
                <label for="eventDescription" class="label">Description</label>
                <textarea name="description" class="textarea" v-model="event.description"></textarea>
              </div>

              <div class="field">
                <label for="eventDate" class="label">Date</label>
                <input type="date" name="eventDate" class="input" v-model="event.date">
              </div>

              <div class="field">
                <label for="eventStart" class="label">Start Time</label>
                <time-picker
                  inputClass="input"
                  selectClass="select"
                  :defaultTime="event.time_start"
                  ref="startTime"
                />
              </div>

              <div class="field">
                <label for="eventEnd" class="label">End Time</label>
                <time-picker
                  inputClass="input"
                  selectClass="select"
                  :defaultTime="event.time_end"
                  ref="endTime"
                />
              </div>

              <div class="field">
                <label for="eventCapacity" class="label">Capacity</label>
                <input type="number" name="eventCapacity" class="input" v-model="event.capacity">
              </div>

              <div class="field">
                <label class="label">New Graphic (Optional)</label>
                <div class="file has-name is-fullwidth">
                  <label class="file-label">
                    <input
                      type="file"
                      name="eventGraphic"
                      class="file-input"
                      ref="file"
                      @change="handleFileUpload"
                    >
                    <span class="file-cta">
                      <div class="file-label">Choose a Graphic</div>
                    </span>
                    <div class="file-name">{{ filename }}</div>
                  </label>
                </div>
              </div>

              <div class="field">
                <label class="checkbox">
                  <input type="checkbox" v-model="event.is_full">
                  Full?
                </label>
              </div>

              <hr>

              <div class="field form-buttons">
                <button
                  type="submit"
                  class="button is-primary"
                  :class="{'is-loading': submitIsLoading}"
                >
                  Save
                </button>
                <nuxt-link to="/admin/events" class="button is-light">Cancel</nuxt-link>
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
// import moment from 'moment'

export default {
  asyncData ({ params, store }) {
    return axios
      .get(`${process.env.apiUrl}/events/admin/${params.id}/`, {
        headers: {
          'Authorization': `JWT ${store.state.auth.accessToken}`
        }
      })
      .then(response => {
        return {
          event: response.data
        }
      })
  },

  data () {
    return {
      file: null,
      filename: 'No file chosen yet...',
      submitIsLoading: false
    }
  },

  methods: {
    handleFileUpload () {
      this.file = this.$refs.file.files[0]
      this.filename = this.file.name
    },

    handleSubmit () {
      this.createIsLoading = true

      let formData = new FormData()

      if (this.file) formData.append('graphic', this.file)
      formData.append('name', this.event.name)
      formData.append('description', this.event.description)
      formData.append('date', this.event.date)
      formData.append('time_start', this.$refs.startTime.calculatedTime)
      formData.append('time_end', this.$refs.endTime.calculatedTime)
      formData.append('capacity', this.event.capacity)
      formData.append('is_full', this.event.is_full)

      axios
        .patch(`${process.env.apiUrl}/events/admin/${this.event.id}/`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `JWT ${this.$store.state.auth.accessToken}`
          }
        })
        .then(response => {
          this.$router.push('/admin/events')
        })
        .catch(error => {
          this.createIsLoading = false
          throw error
        })
    }
  }
}
</script>
