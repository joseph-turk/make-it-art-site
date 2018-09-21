<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-half">
            <h2 class="title is-2">Add New Event</h2>

            <hr>

            <form @submit.prevent="handleSubmit">
              <div class="field">
                <label for="eventName" class="label">Name</label>
                <input type="text" class="input" id="eventName" v-model="name">
              </div>

              <div class="field">
                <label for="eventDescription" class="label">Description</label>
                <textarea name="description" class="textarea" v-model="description"></textarea>
              </div>

              <div class="field">
                <label for="eventDate" class="label">Date</label>
                <input type="date" name="eventDate" class="input" v-model="date">
              </div>

              <div class="field">
                <label for="eventStart" class="label">Start Time</label>
                <time-picker inputClass="input" selectClass="select" ref="startTime" />
              </div>

              <div class="field">
                <label for="eventEnd" class="label">End Time</label>
                <time-picker inputClass="input" selectClass="select" ref="endTime" />
              </div>

              <div class="field">
                <label for="eventCapacity" class="label">Capacity</label>
                <input type="number" name="eventCapacity" class="input" v-model="capacity">
              </div>

              <div class="field">
                <label class="label">Graphic</label>
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

              <hr>

              <div class="field form-buttons">
                <button
                  type="submit"
                  class="button is-primary"
                  :class="{'is-loading': createIsLoading}"
                >
                  Create Event
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

export default {
  data () {
    return {
      file: null,
      filename: 'No file chosen yet...',
      name: null,
      description: null,
      date: null,
      startTime: null,
      endTime: null,
      capacity: null,
      createIsLoading: false
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
      formData.append('graphic', this.file)
      formData.append('name', this.name)
      formData.append('description', this.description)
      formData.append('date', this.date)
      formData.append('time_start', this.$refs.startTime.calculatedTime)
      formData.append('time_end', this.$refs.endTime.calculatedTime)
      formData.append('capacity', this.capacity)
      formData.append('is_full', false)

      axios
        .post(`${process.env.apiUrl}/events/admin/`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `JWT ${this.$store.state.auth.accessToken}`
          }
        })
        .then(response => {
          this.$router.push('/admin/events')
        })
        .catch(err => {
          console.log(`Error: ${err}`)
          this.createIsLoading = false
        })
    }
  }
}
</script>
