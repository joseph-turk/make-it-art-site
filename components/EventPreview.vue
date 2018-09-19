<template>
  <div class="column is-half-tablet">
    <div class="card">
      <div class="card-image">
        <figure class="image">
          <img :src="graphicSrc">
        </figure>
      </div>

      <div class="card-content">
        <h3 class="title">{{ name }}</h3>
        <h4 class="subtitle">{{ date }}</h4>
      </div>

      <div class="card-footer">
        <nuxt-link
          class="card-footer-item"
          :to="`/together/${eventID}`"
        >
          Details
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    date: String,
    eventID: Number,
    graphicSrc: String
  }
};
</script>
