<template>
  <div>
    <section class="section">
      <div class="container">
        <h2 class="title is-2">Artwork</h2>
        <h3 class="subtitle is-3">This is where you will manage your artwork for sale</h3>

        <nuxt-link to="/admin/artwork/create" class="button is-primary">Add New</nuxt-link>

        <table class="table is-fullwidth">
            <thead>
              <tr>
                <th style="width: 100px"></th>
                <th>Title</th>
                <th>Price</th>
                <th>Sold?</th>
              </tr>
            </thead>

            <tbody>
              <tr
                v-for="piece in artwork"
                :key="piece.id"
              >
                <td><nuxt-link :to="`/admin/artwork/${piece.id}`" class="button">Edit</nuxt-link></td>
                <td>{{ piece.title }}</td>
                <td>{{ piece.price }}</td>
                <td>{{ piece.is_sold ? '&#10004;' : '' }}</td>
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
  data () {
    return {
      artwork: []
    }
  },

  created () {
    axios.get(`${process.env.apiUrl}/artwork/list/`)
      .then(response => {
          this.artwork = response.data
      })
  }
}
</script>
