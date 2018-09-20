<template>
  <div>
    <section class="section">
      <div class="container">
        <h2 class="title is-2">Edit Artwork</h2>

        <form @submit.prevent="handleSubmit">
          <div class="field">
            <label for="pieceTitle" class="label">Title</label>
            <input type="text" class="input" id="pieceTitle" v-model="artwork.title">
          </div>

          <div class="field">
            <label for="pieceDescription" class="label">Description</label>
            <textarea id="pieceDescription" class="textarea" v-model="artwork.description"></textarea>
          </div>

          <div class="field">
            <label for="piecePrice" class="label">Price</label>
            <input id="piecePrice" type="number" step="0.01" class="input" v-model="artwork.price">
          </div>

          <div class="field">
            <label for="pieceIsSold" class="label">
              <input type="checkbox" id="pieceIsSold" v-model="artwork.is_sold">
              Sold?
            </label>
          </div>

          <button
            type="submit"
            class="button is-primary"
            :class="{ 'is-loading': loading }"
          >
            Save
          </button>

          <div class="notification is-success" v-if="showNotification">
            <button type="button" class="delete" @click="showNotification = false"></button>
            Artwork saved successfully!
          </div>
        </form>

        <nuxt-link to="/admin/artwork">Back to All Artwork</nuxt-link>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      loading: false,
      showNotification: false
    }
  },

  asyncData ({ params, store }) {
    return axios
      .get(`${process.env.apiUrl}/artwork/admin/${params.id}/`, {
        headers: {
          'Authorization': `JWT ${store.state.auth.accessToken}`
        }
      })
      .then(response => {
        return {
          artwork: response.data
        }
      })
  },

  methods: {
    handleSubmit () {
      this.loading = true

      axios
        .patch(`${process.env.apiUrl}/artwork/admin/${this.artwork.id}/`, {
          title: this.artwork.title,
          description: this.artwork.description,
          price: this.artwork.price,
          is_sold: this.artwork.is_sold
        }, {
          headers: {
            'Authorization': `JWT ${this.$store.state.auth.accessToken}`
          }
        })
        .then(() => {
          this.loading = false
          // this.showNotification = true
          this.$router.push('/admin/artwork')
        })
        .catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>
form {
  margin: 2rem auto;
}

.field {
  margin-bottom: 1rem;
}

.notification {
  margin: 1rem auto;
}
</style>
