<template>
  <div>
    <section class="hero is-medium is-dark">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-2">Artwork by Rose</h1>
          <h2 class="subtitle is-3">This will be the gallery with art for sale.</h2>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="title is-3">Currently For Sale</h2>

        <div class="columns is-mobile">
          <artwork-preview
            v-if="forSale.length > 0"
            v-for="piece in forSale"
            :key="piece.id"
            :imgSrc="piece.image"
            :title="piece.title"
            :artworkID="piece.id"
          />

          <div class="column">
            <p v-if="forSale.length === 0">
              No artwork currently for sale.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="title is-3">Recently Sold</h2>
        <div class="columns is-mobile">
          <artwork-preview
            v-if="recentlySold.length > 0"
            v-for="piece in recentlySold"
            :key="piece.id"
            :imgSrc="piece.image"
            :title="piece.title"
            :artworkID="piece.id"
          />

          <div class="column">
            <p v-if="recentlySold.length === 0">
              No recently sold artwork.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import ArtworkPreview from '~/components/ArtworkPreview.vue'

export default {
  components: {
    ArtworkPreview
  },

  created () {
    axios.get(`${process.env.apiUrl}/artwork/`).then(response => {
      this.forSale = response.data.filter(artwork => !artwork.is_sold)
      this.recentlySold = response.data.filter(artwork => artwork.is_sold)
    })
  },

  data () {
    return {
      forSale: [],
      recentlySold: []
    }
  }
}
</script>
