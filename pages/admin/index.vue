<template>
  <div>
    <section class="hero is-medium is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-1">Administration</h1>
          <h3 class="subtitle is-3">This is where you will manage the content of your site</h3>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="title is-2">Site Content</h2>
        <h3 class="subtitle is-3">Text and graphics content throughout the site can be edited here</h3>

        <table class="table is-fullwidth">
          <thead>
            <tr>
              <th>Field Name</th>
              <th>Content</th>
              <th>Location</th>
              <th style="width: 100px"></th>
            </tr>
          </thead>

          <tbody>
            <tr
              v-for="field in content"
              :key="field.id"
            >
              <td>{{ field.field_name }}</td>
              <td>{{ field.field_content }}</td>
              <td>{{ field.field_location.name }}</td>
              <td>
                <nuxt-link
                  :to="`/admin/content/${field.id}/edit`"
                  class="button is-light"
                >
                  Edit
                </nuxt-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  asyncData ({ store }) {
    return axios
      .get(`${process.env.apiUrl}/content/`)
      .then(response => {
        return {
          content: response.data
        }
      })
  }
}
</script>
