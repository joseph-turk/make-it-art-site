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
            <router-link
              v-for="link in links"
              :key="link.path"
              class="navbar-item"
              :to="link.path"
              @click.native="toggleNavbar"
            >
              {{ link.title }}
            </router-link>
          </div>

          <div class="navbar-end">
            <router-link to="/admin" class="navbar-item">
              Admin
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
