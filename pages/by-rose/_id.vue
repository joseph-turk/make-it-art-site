<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column">
            <figure class="image">
              <img :src="artwork.image">
            </figure>
          </div>

          <div class="column">
            <div class="artwork-info">
              <div>
                <h1 class="title is-1">{{ artwork.title }} ({{ artwork.is_sold ? 'SOLD' : `$${artwork.price}` }})</h1>

                <p>{{ artwork.description }}</p>
              </div>

              <div>
                <button
                  class="button is-primary"
                  v-if="!artwork.is_sold"
                  @click="toggleModal"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <nuxt-link to="/by-rose">Back to All Artwork</nuxt-link>
      </div>
    </section>

    <div class="modal" :class="{ 'is-active': showModal }">
      <div class="modal-background" @click="toggleModal"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Purchase</p>
          <button class="delete" aria-label="close" @click="toggleModal"></button>
        </header>
        <section class="modal-card-body">
          This will be the purchase form to take credit card and other info.
        </section>
        <footer class="modal-card-foot">
          <button class="button is-primary" @click="toggleModal">Buy Now</button>
          <button class="button" @click="toggleModal">Cancel</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  asyncData ({ params }) {
    return axios.get(`${process.env.apiUrl}/artwork/single/${params.id}`)
      .then(response => {
        return {
          artwork: response.data
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
.artwork-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
</style>
