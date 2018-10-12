<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-two-thirds-desktop">
            <h2 class="title is-2">Add New Lesson</h2>

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
                  v-model="name"
                >
              </div>

              <div class="field">
                <label
                  for="lessonInspiration"
                  class="label"
                >
                  Inspiration
                </label>
                <text-editor v-model="inspiration" />
              </div>

              <div class="field">
                <label
                  for="lessonOutcomes"
                  class="label"
                >
                  Outcomes
                </label>
                <text-editor v-model="outcomes" />
              </div>

              <div class="field">
                <label class="label">Materials/Tools</label>
                <text-editor v-model="materials" />
              </div>

              <div class="field">
                <label
                  for="lessonProcedure"
                  class="label"
                >
                  Procedure
                </label>
                <text-editor v-model="procedure" />
              </div>

              <div class="field">
                <label
                  for="lessonExitExpectations"
                  class="label"
                >
                  Exit Expectations
                </label>
                <text-editor v-model="exitExpectations" />
              </div>

              <div class="field">
                <label
                  for="lessonFinishNotes"
                  class="label"
                >
                  Finishing Project
                </label>
                <text-editor v-model="finishNotes" />
              </div>

              <div class="field">
                <label class="label">Rubric</label>
                <text-editor v-model="rubric" />
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
                  v-model="tags"
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
                  :class="{ 'is-loading': createIsLoading }"
                >
                  Create Lesson
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

  created () {
    this.updateTags()
  },

  data () {
    return {
      allTags: [],
      name: '',
      inspiration: '',
      outcomes: '',
      materials: '',
      procedure: '',
      exitExpectations: '',
      finishNotes: '',
      rubric: '',
      tags: [],
      createIsLoading: false,
      showModal: false
    }
  },

  methods: {
    handleSubmit () {
      this.createIsLoading = true

      axios
        .post(`${process.env.apiUrl}/lessons/admin/`,
          {
            name: this.name,
            inspiration: this.inspiration,
            outcomes: this.outcomes,
            materials: this.materials,
            procedure: this.procedure,
            exit_expectations: this.exitExpectations,
            finish_notes: this.finishNotes,
            rubric: this.rubric,
            tags: this.tags
          },
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
          console.log(`Error: ${err}`)
          this.createIsLoading = false
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
