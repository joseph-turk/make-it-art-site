<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-half-tablet">
            <h2 class="title is-2">Add New Artwork</h2>

            <hr>

            <form @submit.prevent="handleSubmit">
              <div class="field">
                <label class="label">Title</label>
                <input type="text" class="input" v-model="title">
              </div>

              <div class="field">
                <label class="label">Description</label>
                <textarea class="textarea" v-model="description" />
              </div>

              <div class="field">
                <label class="label">Price</label>
                <input type="number" class="input" v-model="price">
              </div>

              <div class="field">
                <label class="label">Image</label>
                <div class="file has-name is-fullwidth">
                  <label class="file-label">
                    <input
                      type="file"
                      name="artworkImage"
                      class="file-input"
                      ref="file"
                      @change="handleFileUpload"
                    >
                    <span class="file-cta">
                      <div class="file-label">Choose an Image</div>
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
                  :class="{ 'is-loading': createIsLoading }"
                >
                  Create Artwork
                </button>
                <nuxt-link
                  to="/admin/artwork"
                  class="button is-white"
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
  data () {
    return {
      file: null,
      filename: 'No file chosen yet...',
      title: null,
      description: null,
      price: null,
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
      formData.append('title', this.title)
      formData.append('description', this.description)
      formData.append('price', this.price)
      formData.append('image', this.file)
      formData.append('is_sold', false)

      axios
        .post(`${process.env.apiUrl}/artwork/admin/`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `JWT ${this.$store.state.auth.accessToken}`
          }
        })
        .then(response => {
          this.$router.push('/admin/artwork')
        })
        .catch(error => {
          console.log(`Error: ${error}`)
          this.createIsLoading = false
        })
    }
  }
}
</script>
