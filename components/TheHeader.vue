<template>
  <header>
    <nav class="navbar is-fixed-top is-primary" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <router-link exact class="navbar-item" to="/">
            Make it Art
          </router-link>

          <div class="navbar-burger burger" data-target="navbarContent">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="navbarContent" class="navbar-menu">
          <div class="navbar-start">
            <router-link class="navbar-item" to="/in-the-classroom">In the Classroom</router-link>
            <router-link class="navbar-item" to="/together">Together</router-link>
            <router-link class="navbar-item" to="/at-home">At Home</router-link>
            <router-link class="navbar-item" to="/by-rose">Made by Rose</router-link>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.navbar-brand {
  font-weight: 700;
  font-size: 1.5em;
}

.navbar-start .nuxt-link-active {
  background-color: #00b89c;
  color: #fff;
}
</style>
