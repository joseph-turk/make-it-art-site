<template>
  <div
    class="modal"
    :class="{ 'is-active': showModal }"
    @keyup.esc="toggleModal"
  >
    <div class="modal-background" @click="toggleModal"></div>

    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Add New Tag</p>
        <button
          class="delete"
          aria-label="close"
          @click="toggleModal"
        />
      </header>

      <section class="modal-card-body">
        <form @submit.prevent="handleTagSubmit">
          <div class="field">
            <label
              for="name"
              class="label"
            >
              Name
            </label>

            <input
              id="name"
              type="text"
              class="input"
              v-model="tag.name"
            >
          </div>

          <div class="field">
            <label
              for="description"
              class="label"
            >
              Description
            </label>

            <input
              id="description"
              type="text"
              class="input"
              v-model="tag.description"
            >
          </div>
        </form>
      </section>

      <footer class="modal-card-foot">
        <button
          class="button is-primary"
          :class="{ 'is-loading': submitIsLoading }"
          @click="handleTagSubmit"
        >
          Add
        </button>

        <button
          class="button"
          @click="toggleModal"
        >
          Cancel
        </button>
      </footer>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: {
    showModal: {
      type: Boolean,
      required: true
    }
  },

  data () {
    return {
      submitIsLoading: false,
      tag: {
        name: '',
        description: ''
      }
    }
  },

  methods: {
    toggleModal () {
      this.tag.name = ''
      this.tag.description = ''
      this.$emit('toggleModal')
    },

    handleTagSubmit () {
      this.submitIsLoading = true

      axios
        .post(`${process.env.apiUrl}/lessons/admin/tags/`,
          this.tag,
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `JWT ${this.$store.state.auth.accessToken}`
            }
          })
        .then(response => {
          this.tag.name = ''
          this.tag.description = ''
          this.$emit('updateTags')
          this.$emit('toggleModal')
          this.$store.commit('setNotification', 'Tag saved')
        })
        .catch(error => {
          this.submitIsLoading = false
          this.$store.commit('setNotification', 'Sorry, tag couldn\'t be saved')
          throw error
        })
    }
  }
}
</script>
