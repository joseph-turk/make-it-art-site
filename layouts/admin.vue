<template>
  <div>
    <the-admin-header />

    <div id="main-content">
      <nuxt/>
    </div>

    <the-footer />
  </div>
</template>

<script>
import TheAdminHeader from '~/components/TheAdminHeader.vue'
import TheFooter from '~/components/TheFooter.vue'

export default {
  components: {
    TheAdminHeader,
    TheFooter
  }
}
</script>

<style scoped>
#main-content {
  min-height: calc(100vh - 52px - 40px);
}
</style>
