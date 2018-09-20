<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-half">
            <h1 class="title is-1">Log In</h1>

            <form @submit.prevent="logIn">
              <div class="field">
                <input v-focus id="username" class="input" type="text" placeholder="Username" v-model="username">
              </div>

              <div class="field">
                <input id="password" class="input" type="password" placeholder="Password" v-model="password">
              </div>

              <button class="button is-primary">Log In</button>

              <div class="notification is-danger" v-if="message">
                <button type="button" class="delete" @click="message = null"></button>
                {{ message }}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
const Cookie = process.browser ? require('js-cookie') : undefined

export default {
  middleware: 'notAuthenticated',
  data () {
    return {
      username: '',
      password: '',
      message: null
    }
  },
  computed: {
    token () {
      return this.$store.state.token
    }
  },
  methods: {
    logIn () {
      axios
        .post(`${process.env.apiUrl}/auth/obtain_token/`, {
          username: this.username,
          password: this.password
        })
        .then(response => {
          console.log(response)
          this.$store.commit('setAuth', { accessToken: response.data.token })
          Cookie.set('auth', { accessToken: response.data.token })
          this.$router.push('/admin')
        })
        .catch(error => {
          console.log(error)
          this.message =
            'Login failed. Make sure you have the correct username and password.'
        })
    }
  }
}
</script>
