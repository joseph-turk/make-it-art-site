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
        <div class="columns is-mobile">
          <artwork-preview
            v-for="piece in artwork"
            :key="piece"
            :imgSrc="piece"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ArtworkPreview from '~/components/ArtworkPreview.vue'

export default {
  components: {
    ArtworkPreview
  },

  data () {
    return {
      artwork: [
        '/artwork/artwork-01.jpg',
        '/artwork/artwork-02.jpg',
        '/artwork/artwork-03.jpg',
        '/artwork/artwork-04.jpg'
      ]
    }
  }
}
</script>


<style scoped>
.gallery {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
}
</style>
