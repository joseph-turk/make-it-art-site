<template>
  <div class="column is-half-mobile is-one-third-tablet is-one-quarter-desktop">
    <figure class="image is-square">
      <img :src="imgSrc">
      <div class="overlay is-size-4 is-bold" @click="toggleModal">Artwork Title</div>
    </figure>

    <div class="modal" :class="{ 'is-active': modalOpen }">
      <div class="modal-background" @click="toggleModal"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <h2 class="modal-card-title">Not Available Yet</h2>
        </header>
        <section class="modal-card-body">
          <p>This site isn't hooked up to the real functionality yet, so you can't view details on a piece.</p>
        </section>
        <footer class="modal-card-foot">
          <button class="button" @click="toggleModal">Close</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: String
  },

  data () {
    return {
      modalOpen: false
    }
  },

  methods: {
    toggleModal () {
      this.modalOpen = !this.modalOpen
    }
  }
}
</script>

<style scoped>
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  opacity: 0;
  transition: all 0.2s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
}

figure {
  cursor: pointer;
}

figure:hover .overlay {
  opacity: 1;
  background-color: rgba(255, 255, 255, 0.7);
}
</style>
