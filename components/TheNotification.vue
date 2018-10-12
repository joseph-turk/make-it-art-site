<template>
  <div class="notification is-dark has-text-light">
    <button
      class="delete"
      @click="dismissNotification"
    />
    {{ notificationContent }}
  </div>
</template>

<script>
export default {
  props: {
    notificationContent: {
      type: String,
      required: true
    }
  },

  methods: {
    dismissNotification () {
      this.$store.commit('dismissNotification')
    }
  }
}
</script>

<style scoped>
div {
  position: fixed;
  top: calc(64px + 2rem);
  right: 2rem;
}
</style>
