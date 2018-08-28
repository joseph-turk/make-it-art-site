<template>
  <div>
    <the-header />

    <div id="main-content">
      <nuxt/>
    </div>
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'
export default {
  components: {
    TheHeader
  }
}
</script>

<style scoped>
#main-content {
  margin-top: 128px;
}
</style>
