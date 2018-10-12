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
            <p class="is-size-5 has-text-weight-bold tags-label">Tags</p>
            <div class="buttons">
              <button
                v-for="tag in tags"
                :key="`tag-${tag.id}`"
                class="button is-link is-rounded"
                :class="{ 'is-outlined': selectedTags.indexOf(tag) < 0 }"
                :title="tag.description"
                @click="toggleTag(tag, $event)"
              >
                {{ tag.name }}
              </button>
            </div>

            <hr>

            <div v-if="selectedLessons.length > 0">
              <transition-group name="list" tag="div">
                <div
                  v-for="lesson in selectedLessons"
                  :key="`lesson-${lesson.id}`"
                >
                  <lesson-preview
                    :name="lesson.name"
                    :tags="lesson.tags"
                    :lessonID="lesson.id"
                  />
                </div>
              </transition-group>
            </div>

            <div v-else>
              <p class="content">There are no lessons that match your criteria</p>
            </div>
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
      this.allLessons = response.data
      this.selectedLessons = response.data
    })

    axios.get(`${process.env.apiUrl}/lessons/tags/`).then(response => {
      this.tags = response.data
      this.selectedTags = response.data
    })
  },

  data () {
    return {
      allLessons: [],
      selectedLessons: [],
      tags: [],
      selectedTags: []
    }
  },

  methods: {
    toggleTag (tag, event) {
      if (this.selectedTags.indexOf(tag) >= 0) {
        this.selectedTags = this.selectedTags.filter(t => t !== tag)
      } else {
        this.selectedTags.push(tag)
      }

      this.filterLessons()

      event.target.blur()
    },

    filterLessons () {
      this.selectedLessons = []

      this.allLessons.forEach(lesson => {
        let hasTag = false

        lesson.tags.forEach(tag => {
          this.selectedTags.forEach(t => {
            if (tag.id === t.id) hasTag = true
          })
        })

        if (hasTag) this.selectedLessons.push(lesson)
      })
    }
  }
}
</script>

<style scoped>
p {
  margin-bottom: 0.5rem;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s;
}

.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
</style>
