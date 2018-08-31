<template>
  <header>
    <nav
      class="navbar is-fixed-top is-light"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="container">
        <div class="navbar-brand">
          <router-link exact class="navbar-item" to="/">
            Make it Art
          </router-link>

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
            <router-link class="navbar-item" to="/in-the-classroom">
              In the Classroom
            </router-link>
            <router-link class="navbar-item" to="/together">
              Together
            </router-link>
            <router-link class="navbar-item" to="/at-home">
              At Home
            </router-link>
            <router-link class="navbar-item" to="/by-rose">
              Made by Rose
            </router-link>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data () {
    return {
      isOpen: false
    }
  },

  methods: {
    toggleNavbar () {
      this.isOpen = !this.isOpen
    }
  }
}
</script>


<style scoped>
.navbar-brand {
  font-size: 2.5em;
  font-family: Sacramento;
}
.navbar-brand a {
  padding-left: 2rem;
  padding-right: 2rem;
}
</style>
