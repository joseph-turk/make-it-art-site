<template>
  <header>
    <nav
      class="navbar is-fixed-top is-light"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="container">
        <div class="navbar-brand">
          <nuxt-link exact class="navbar-item" to="/">
            Make it Art
          </nuxt-link>

          <div
            class="navbar-burger burger"
            :class="{ 'is-active': isOpen }"
            @click="toggleNavbar"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div
          id="navbarContent"
          class="navbar-menu"
          :class="{ 'is-active': isOpen }"
        >
          <div class="navbar-start">
            <nuxt-link
              v-for="link in links"
              :key="link.path"
              class="navbar-item"
              :to="link.path"
              @click.native="toggleNavbar"
            >
              {{ link.title }}
            </nuxt-link>
          </div>

          <div
            v-if="$store.state.auth"
            class="navbar-end"
          >
            <nuxt-link
              to="/admin"
              class="navbar-item"
            >
              Admin
            </nuxt-link>
            <div class="navbar-item">
              <div class="field is-grouped">
                <p class="control">
                  <a
                    class="button"
                    @click="logOut"
                  >
                    Log Out
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
const Cookie = process.browser ? require('js-cookie') : undefined

export default {
  data () {
    return {
      isOpen: false,
      links: [
        {
          path: '/in-the-classroom',
          title: 'In the Classroom'
        },
        {
          path: '/together',
          title: 'Together'
        },
        {
          path: '/at-home',
          title: 'At Home'
        },
        {
          path: '/by-rose',
          title: 'Made by Rose'
        }
      ]
    }
  },

  methods: {
    toggleNavbar () {
      this.isOpen = !this.isOpen
    },

    logOut () {
      Cookie.remove('auth')
      this.$store.commit('setAuth', null)
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.navbar-brand {
  font-size: 2em;
  font-family: Sacramento;
}
.navbar-brand a {
  padding-left: 2rem;
  padding-right: 2rem;
}
.navbar-burger {
  height: 72px;
  width: 72px;
}
</style>
