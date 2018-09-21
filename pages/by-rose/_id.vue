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

    <artwork-purchase-modal :showModal="showModal" @toggleModal="toggleModal" />
  </div>
</template>

<script>
import axios from 'axios'
import ArtworkPurchaseModal from '~/components/ArtworkPurchaseModal.vue'

export default {
  components: {
    ArtworkPurchaseModal
  },

  asyncData ({ params }) {
    return axios.get(`${process.env.apiUrl}/artwork/${params.id}`)
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
