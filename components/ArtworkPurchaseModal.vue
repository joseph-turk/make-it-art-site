<template>
  <div class="modal" :class="{ 'is-active': showModal }">
    <div class="modal-background" @click="toggleModal"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Purchase</p>
        <button class="delete" aria-label="close" @click="toggleModal"></button>
      </header>
      <section class="modal-card-body">
        This will be the purchase form to take credit card and other info.
      </section>
      <footer class="modal-card-foot">
        <button class="button is-primary" @click="toggleModal">Buy Now</button>
        <button class="button" @click="toggleModal">Cancel</button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showModal: {
      type: Boolean,
      required: true
    }
  },

  methods: {
    toggleModal () {
      this.$emit('toggleModal')
    }
  }
}
</script>
