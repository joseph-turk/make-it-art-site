<template>
  <div>
    <section class="hero is-medium is-info">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-2">For Students, Parents, and Teachers</h1>
          <h2 class="subtitle is-3">This is where the thumb drive content will go.</h2>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-two-thirds-desktop">
            <div
              v-for="tag in tags"
              :key="`tag-${tag.id}`"
            >
              <button
                class="button is-link"
                :title="tag.description">
                {{ tag.name }}
              </button>
            </div>

            <hr>

            <lesson-preview
              v-for="lesson in lessons"
              :key="`lesson-${lesson.id}`"
              :name="lesson.name"
              :tags="lesson.tags"
              :lessonID="lesson.id"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import LessonPreview from '~/components/LessonPreview.vue'

export default {
  components: {
    LessonPreview
  },

  created () {
    axios.get(`${process.env.apiUrl}/lessons/`).then(response => {
      this.lessons = response.data
    })

    axios.get(`${process.env.apiUrl}/lessons/tags/`).then(response => {
      this.tags = response.data
    })
  },

  data () {
    return {
      lessons: [],
      tags: []
    }
  }
}
</script>
