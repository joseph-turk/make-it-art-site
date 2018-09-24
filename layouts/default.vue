<template>
  <div>
    <the-header />

    <div id="main-content">
      <the-notification
        v-if="$store.state.showNotification"
        :notificationContent="$store.state.notificationContent"
      />
      <nuxt/>
    </div>

    <the-footer />
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'
import TheFooter from '~/components/TheFooter.vue'
import TheNotification from '~/components/TheNotification.vue'

export default {
  components: {
    TheHeader,
    TheFooter,
    TheNotification
  }
}
</script>

<style scoped>
#main-content {
  min-height: calc(100vh - 52px - 40px);
}
</style>
