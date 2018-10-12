<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-two-thirds-desktop">
            <h2 class="title is-2">Edit Lesson: {{ lesson.name }}</h2>

            <hr>

            <form @submit.prevent="handleSubmit">
              <div class="field">
                <label
                  for="lessonName"
                  class="label"
                >
                  Name
                </label>
                <input
                  type="text"
                  class="input"
                  id="lessonName"
                  v-model="lesson.name"
                >
              </div>

              <div class="field">
                <label
                  for="lessonInspiration"
                  class="label"
                >
                  Inspiration
                </label>
                <text-editor v-model="lesson.inspiration" />
              </div>

              <div class="field">
                <label
                  for="lessonOutcomes"
                  class="label"
                >
                  Outcomes
                </label>
                <text-editor v-model="lesson.outcomes" />
              </div>

              <div class="field">
                <label
                  for="lessonProcedure"
                  class="label"
                >
                  Procedure
                </label>
                <text-editor v-model="lesson.procedure" />
              </div>

              <div class="field">
                <label
                  for="lessonExitExpectations"
                  class="label"
                >
                  Exit Expectations
                </label>
                <text-editor v-model="lesson.exit_expectations" />
              </div>

              <div class="field">
                <label
                  for="lessonFinishNotes"
                  class="label"
                >
                  Finishing Project
                </label>
                <text-editor v-model="lesson.finish_notes" />
              </div>

              <div class="field">
                <label
                  for="lessonTags"
                  class="label"
                >
                  Tags (Select One or More)
                </label>

                <v-select
                  multiple
                  label="name"
                  v-model="lesson.tags"
                  :options="allTags"
                />

                <div>
                  <button
                    type="button"
                    class="button is-small add-tag-button"
                    @click="toggleModal"
                  >
                    Add New Tag
                  </button>
                </div>
              </div>

              <hr>

              <div class="field form-buttons">
                <button
                  type="submit"
                  class="button is-primary"
                  :class="{ 'is-loading': saveIsLoading }"
                >
                  Save
                </button>

                <nuxt-link
                  to="/admin/lessons"
                  class="button is-light"
                >
                  Cancel
                </nuxt-link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <create-tag-modal
      :showModal="showModal"
      @toggleModal="toggleModal"
      @updateTags="updateTags"
    />
  </div>
</template>

<script>
import axios from 'axios'
import CreateTagModal from '~/components/CreateTagModal.vue'

export default {
  components: {
    CreateTagModal
  },

  asyncData ({ params, store }) {
    return axios
      .get(`${process.env.apiUrl}/lessons/admin/${params.id}/`, {
        headers: {
          Authorization: `JWT ${store.state.auth.accessToken}`
        }
      })
      .then(response => {
        return {
          lesson: response.data
        }
      })
  },

  created () {
    this.updateTags()
  },

  data () {
    return {
      lesson: null,
      allTags: [],
      saveIsLoading: false,
      showModal: false
    }
  },

  methods: {
    handleSubmit () {
      this.saveIsLoading = true

      axios
        .patch(`${process.env.apiUrl}/lessons/admin/${this.lesson.id}/`,
          this.lesson,
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `JWT ${this.$store.state.auth.accessToken}`
            }
          })
        .then(response => {
          this.$router.push('/admin/lessons')
        })
        .catch(err => {
          this.saveIsLoading = false
          console.log(`Error: ${err}`)
          throw err
        })
    },

    toggleModal () {
      this.showModal = !this.showModal
    },

    updateTags () {
      axios
        .get(`${process.env.apiUrl}/lessons/tags/`)
        .then(response => {
          this.allTags = response.data
        })
    }
  }
}
</script>

<style scoped>
.add-tag-button {
  margin-top: 0.5rem;
}

.dropdown {
  display: block;
}
</style>
