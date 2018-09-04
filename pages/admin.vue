<template>
  <div>
    <nuxt-child />
  </div>
</template>

<script>
export default {
  middleware: 'authenticated',
  layout: 'admin',
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
