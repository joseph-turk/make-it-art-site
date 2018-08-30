<template>
  <div>
    <the-header />

    <div id="main-content">
      <nuxt/>
    </div>

    <the-footer />
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'
import TheFooter from '~/components/TheFooter.vue'

export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style scoped>
#main-content {
  min-height: calc(100vh - 52px - 40px);
}
</style>
