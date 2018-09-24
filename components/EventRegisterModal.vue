<template>
  <div class="modal" :class="{ 'is-active': showModal }" @keyup.esc="toggleModal">
    <div class="modal-background" @click="toggleModal"></div>

    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Register</p>
        <button class="delete" aria-label="close" @click="toggleModal"></button>
      </header>
      <section class="modal-card-body">
        <div
          class="card has-background-warning full-notification"
          v-if="event.is_full"
        >
          <div class="card-content">
            <div class="content has-text-centered has-text-weight-bold">
              This event is currently full. You will be placed on the wait list.
            </div>
          </div>
        </div>
        <form @submit.prevent="handleSubmit">
          <div class="field">
            <label class="label">Name</label>
            <input type="text" class="input" v-model="registration.name">
          </div>

          <div class="field">
            <label class="label">Email</label>
            <input type="text" class="input" v-model="registration.email">
          </div>
        </form>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-primary" @click="handleSubmit">Register</button>
        <button class="button" @click="toggleModal">Cancel</button>
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
    },
    event: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
      submitIsLoading: false,
      registration: {
        name: '',
        email: ''
      }
    }
  },

  methods: {
    toggleModal () {
      this.$emit('toggleModal')
    },

    handleSubmit () {
      this.submitIsLoading = true

      const registration = {
        event: this.event,
        name: this.registration.name,
        email: this.registration.email
      }

      axios
        .post(`${process.env.apiUrl}/events/registrations/create/`, registration)
        .then(response => {
          this.registration.name = ''
          this.registration.email = ''
          this.$emit('toggleModal')
          this.$store.commit('setNotification', 'You have been successfully registered')
        })
        .catch(error => {
          this.submitIsLoading = false
          this.$store.commit('setNotification', 'Sorry, your registration was unsuccessful')
          throw error
        })
    }
  }
}
</script>

<style scoped>
.full-notification {
  margin-bottom: 1rem;
}
</style>
