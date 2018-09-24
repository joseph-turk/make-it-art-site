<template>
  <div>
    <section class="hero is-large is-primary">
      <div class="hero-body">
        <div class="container welcome-container has-text-centered">
          <h1 class="title is-1">{{ welcomeHeader }}</h1>
          <h3 class="subtitle is-3">{{ welcomeMessage }}</h3>
        </div>
      </div>
    </section>

    <section class="section is-medium">
      <div class="container">
        <h2 class="title is-2">{{ discoverHeader }}</h2>

        <div class="columns">
          <div class="column">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img src="~/assets/img/classroom.jpg">
                </figure>
              </div>

              <footer class="card-footer">
                <nuxt-link class="card-footer-item is-size-4" to="/in-the-classroom">Lessons for the Classroom</nuxt-link>
              </footer>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img src="~/assets/img/art-studio.jpg">
                </figure>
              </div>

              <footer class="card-footer">
                <nuxt-link class="card-footer-item is-size-4" to="/together">Events in the Studio</nuxt-link>
              </footer>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img src="~/assets/img/home-craft.jpg">
                </figure>
              </div>

              <footer class="card-footer">
                <nuxt-link class="card-footer-item is-size-4" to="/at-home">Projects for Home</nuxt-link>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section is-medium has-background-warning">
      <div class="container">
        <h2 class="title is-2">{{ latestHeader }}</h2>

        <div class="columns">
          <div class="column">
            <div class="card upcoming-card">
              <header class="card-header">
                <h3 class="card-header-title is-size-4">Next Event</h3>
              </header>

              <div class="card-content">
                <div class="content" v-if="event">
                  <h4>{{ event.name }}</h4>

                  <p>{{ event.description }}</p>
                </div>

                <div class="content" v-else>
                  <h4>There are currently no upcoming events.</h4>
                </div>
              </div>

              <footer class="card-footer" v-if="event">
                <nuxt-link class="card-footer-item is-size-5" :to="`/together/${event.id}`">Sign Up</nuxt-link>
              </footer>
            </div>
          </div>

          <div class="column">
            <div class="card upcoming-card">
              <header class="card-header">
                <h3 class="card-header-title is-size-4">Latest Project</h3>
              </header>

              <div class="card-content">
                <div class="content">
                  <h4>Project Title</h4>

                  <p>Description of the project.</p>
                </div>
              </div>

              <footer class="card-footer">
                <nuxt-link class="card-footer-item is-size-5" to="/">Make It</nuxt-link>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      event: null,
      content: null
    }
  },

  computed: {
    welcomeHeader () {
      return this.content && this.content.filter(c => {
        return c.field_name === 'Welcome Header'
      })[0].field_content
    },

    welcomeMessage () {
      return this.content && this.content.filter(c => {
        return c.field_name === 'Welcome Message'
      })[0].field_content
    },

    discoverHeader () {
      return this.content && this.content.filter(c => {
        return c.field_name === 'Discover Header'
      })[0].field_content
    },

    latestHeader () {
      return this.content && this.content.filter(c => {
        return c.field_name === 'Latest Content Header'
      })[0].field_content
    }
  },

  created () {
    this.fetchContent()
    this.fetchEvent()
  },

  methods: {
    fetchContent () {
      axios
        .get(`${process.env.apiUrl}/content/`)
        .then(response => {
          this.content = response.data
        })
        .catch(error => {
          throw error
        })
    },

    fetchEvent () {
      axios
        .get(`${process.env.apiUrl}/events/`)
        .then(response => {
          this.event = response.data[0]
        })
        .catch(error => {
          throw error
        })
    }
  }
}
</script>

<style scoped>
.welcome-container {
  max-width: 680px;
}

.upcoming-card {
  height: 100%;
}
</style>
