<template>
  <div>
    <section class="hero is-light">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-1">Admin</h1>
        </div>
      </div>
    </section>

    <div class="container">
      <nav class="buttons">
        <nuxt-link
          v-for="link in links"
          :key="link.path"
          :to="link.path"
          class="button"
        >
          {{ link.title }}
        </nuxt-link>
        
      </nav>
    </div>

    <nuxt-child />
  </div>
</template>

<script>
export default {
  data () {
    return {
      links: [
        {
          title: 'Lessons',
          path: '/admin/lessons'
        },
        {
          title: 'Events',
          path: '/admin/events'
        },
        {
          title: 'Projects',
          path: '/admin/projects'
        },
        {
          title: 'Artwork',
          path: '/admin/artwork'
        }
      ]
    }
  }
}
</script>


<style scoped>
nav {
  margin: 1rem 0;
}
</style>
