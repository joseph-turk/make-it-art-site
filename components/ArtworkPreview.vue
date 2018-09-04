<template>
  <div class="column is-half-mobile is-one-third-tablet is-one-quarter-desktop">
    <figure class="image is-square">
      <nuxt-link :to="`/by-rose/${artworkID}`">
        <img :src="imgSrc">
        <div class="overlay is-size-4 is-bold">{{ title }}</div>
      </nuxt-link>
    </figure>
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: String,
    title: String,
    artworkID: Number
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
