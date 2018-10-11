<template>
  <div>
    <section class="section">
      <div class="container">

        <h1 class="title is-2">{{ lesson.name }}</h1>
        <h3 class="subtitle">
          <span
            v-for="tag in lesson.tags"
            :key="tag.id"
          >
            {{ tag.name }}
          </span>
        </h3>

        <hr>

        <h2 class="title is-3">Inspiration</h2>
        <p>{{ lesson.inspiration }}</p>

        <h2 class="title is-3">Outcomes</h2>
        <p>{{ lesson.outcomes }}</p>

        <h2 class="title is-3">Procedure</h2>
        <p>{{ lesson.procedure }}</p>

        <h2 class="title is-3">Exit Expectations</h2>
        <p>{{ lesson.exit_expectations }}</p>

        <h2 class="title is-3">Finishing Project</h2>
        <p>{{ lesson.finish_notes }}</p>
        <hr>

        <nuxt-link to="/in-the-classroom">Back to All Lessons</nuxt-link>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  asyncData ({ params }) {
    return axios
      .get(`${process.env.apiUrl}/lessons/${params.id}/`)
      .then(response => {
        return {
          lesson: response.data
        }
      })
  }
}
</script>

<style scoped>
span:not(:last-child):after {
  content: ", ";
}
</style>
