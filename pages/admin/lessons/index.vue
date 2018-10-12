<template>
  <div>
    <section class="hero is-info">
      <div class="hero-body">
        <div class="container">
          <h2 class="title is-2">Lessons</h2>
          <h3 class="subtitle is-3">This is where you will manage the classroom content from the thumb drive</h3>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <nuxt-link
          to="/admin/lessons/create"
          class="button is-primary"
        >
          Add New Lesson
        </nuxt-link>

        <hr>

        <h3 class="title">All Lessons</h3>

        <table
          class="table is-fullwidth"
          v-if="lessons.length > 0"
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Tags</th>
              <th style="width: 160px"></th>
            </tr>
          </thead>

          <tbody>
            <tr
              v-for="lesson in lessons"
              :key="lesson.id"
            >
              <td>{{ lesson.name }}</td>
              <td>
                <span
                  v-for="tag in lesson.tags"
                  :key="`tag-${tag.id}`"
                  v-text="tag.name"
                />
              </td>
              <td class="table-actions">
                <nuxt-link
                  :to="`/admin/lessons/${lesson.id}/edit`"
                  class="button is-light"
                >
                  Edit
                </nuxt-link>
              </td>
            </tr>
          </tbody>
        </table>

        <p
          v-else
          class="content"
        >
          There are no lessons to show.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      lessons: []
    }
  },

  created () {
    axios
      .get(`${process.env.apiUrl}/lessons/admin/`, {
        headers: {
          Authorization: `JWT ${this.$store.state.auth.accessToken}`
        }
      })
      .then(response => {
        this.lessons = response.data
      })
  }
}
</script>

<style scoped>
span:not(:last-child):after {
  content: ", ";
}

.table-actions {
  white-space: nowrap;
}

.table-actions *:not(:last-child) {
  margin-right: 0.5rem;
}
</style>
