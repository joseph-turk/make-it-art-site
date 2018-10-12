<template>
  <div>
    <section class="section">
      <div class="container">

        <h1 class="title is-2">{{ lesson.name }}</h1>
        <h3 class="subtitle">
          <span
            v-for="tag in lesson.tags"
            :key="tag.id"
            v-text="tag.name"
          />
        </h3>

        <hr>

        <section class="section">
          <div class="columns">
            <div class="column">
              <h2 class="title is-3">Inspiration</h2>
              <div class="content" v-html="lesson.inspiration" />
            </div>

            <div class="column">
              <h2 class="title is-3">Outcomes</h2>
              <div class="content" v-html="lesson.outcomes" />
            </div>
          </div>
        </section>

        <section class="section">
          <div class="columns">
            <div class="column">
              <h2 class="title is-3">Resources</h2>
              <div class="content">TODO</div>
            </div>

            <div class="column">
              <h2 class="title is-3">Materials</h2>
              <div class="content" v-html="lesson.materials" />
            </div>
          </div>
        </section>

        <section class="section">
          <div class="card">
            <div class="card-content">
              <h2 class="title is-3">Procedure</h2>
              <div class="content" v-html="lesson.procedure" />
            </div>
          </div>
        </section>

        <section class="section">
          <div class="columns">
            <div class="column">
              <h2 class="title is-3">Exit Expectations</h2>
              <div class="content" v-html="lesson.exit_expectations" />
            </div>

            <div class="column">
              <h2 class="title is-3">Finishing Project</h2>
              <div class="content" v-html="lesson.finish_notes" />
            </div>
          </div>
        </section>

        <section class="section">
          <div class="columns">
            <div class="column">
              <h2 class="title is-3">Rubric</h2>
              <div class="content" v-html="lesson.rubric" />
            </div>
          </div>
        </section>

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
