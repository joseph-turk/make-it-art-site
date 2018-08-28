<template>
  <header>
    <h1>
      <router-link exact to="/">Make it Art</router-link>
    </h1>

    <nav>
      <router-link to="/education">Education</router-link>
      <router-link to="/together">Together</router-link>
      <router-link to="/at-home">At Home</router-link>
      <router-link to="/by-rose">Made by Rose</router-link>
    </nav>
  </header>
</template>

<style scoped>
header {
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 128px;
  padding: 0 1rem;
  border-bottom: 8px solid darkslategray;
  background: rgb(32, 94, 146);
  background-color: steelblue;
  background: linear-gradient(
    135deg,
    rgba(32, 94, 146, 1) 0%,
    rgba(70, 130, 180, 1) 100%
  );
  z-index: 2;
}
h1 {
  font-family: Sacramento, sans-serif;
  font-weight: 500;
  margin: 0 3rem 0 0;
}

h1 a {
  color: whitesmoke;
  font-size: 3rem;
}

h1:hover a {
  color: whitesmoke;
}

nav {
  display: flex;
}

nav a {
  padding: 0.5rem;
  border-bottom: 4px solid transparent;
  border-top: 4px solid transparent;
  transition: color 0.2s, font-weight 0.2s;
}

nav a:not(:last-child) {
  margin-right: 1rem;
}

nav a.nuxt-link-active {
  color: whitesmoke;
  font-weight: 700;
}

a {
  text-decoration: none;
  color: #c4c4c4;
}

a:hover {
  text-decoration: none;
}

nav a {
  font-size: 1.25rem;
}

nav a:hover {
  color: whitesmoke;
  font-weight: 700;
}
</style>