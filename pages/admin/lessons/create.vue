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
                <text-editor />
              </div>

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
                <textarea
                  id="lessonInspiration"
                  class="textarea"
                  v-model="inspiration"
                />
              </div>

              <div class="field">
                <label
                  for="lessonOutcomes"
                  class="label"
                >
                  Outcomes
                </label>
                <textarea
                  id="lessonOutcomes"
                  class="textarea"
                  v-model="outcomes"
                />
              </div>

              <div class="field">
                <label
                  for="lessonProcedure"
                  class="label"
                >
                  Procedure
                </label>
                <textarea
                  id="lessonProcedure"
                  class="textarea"
                  v-model="procedure"
                />
              </div>

              <div class="field">
                <label
                  for="lessonExitExpectations"
                  class="label"
                >
                  Exit Expectations
                </label>
                <textarea
                  id="lessonExitExpectations"
                  class="textarea"
                  v-model="exitExpectations"
                />
              </div>

              <div class="field">
                <label
                  for="lessonFinishNotes"
                  class="label"
                >
                  Finishing Project
                </label>
                <textarea
                  id="lessonFinishNotes"
                  class="textarea"
                  v-model="finishNotes"
                />
              </div>

              <div class="field">
                <label
                  for="lessonTags"
                  class="label"
                >
                  Tags (Select One or More)
                </label>
                <div class="select is-multiple">
                  <select
                    multiple
                    size="5"
                    v-model="tags"
                  >
                    <option
                      v-for="tag in allTags"
                      :key="tag.id"
                      :value="tag"
                    >
                      {{ tag.name }}
                    </option>
                  </select>
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
  </div>
</template>

<script>
import axios from 'axios'

export default {
  created () {
    axios
      .get(`${process.env.apiUrl}/lessons/tags/`)
      .then(response => {
        this.allTags = response.data
      })
  },

  data () {
    return {
      allTags: [],
      name: '',
      inspiration: '',
      outcomes: '',
      procedure: '',
      exitExpectations: '',
      finishNotes: '',
      tags: [],
      createIsLoading: false
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
            procedure: this.procedure,
            exit_expectations: this.exitExpectations,
            finish_notes: this.finishNotes,
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
    }
  }
}
</script>
