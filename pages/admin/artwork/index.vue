<template>
  <div>
    <section class="hero is-dark">
      <div class="hero-body">
        <div class="container">
          <h2 class="title is-2">Artwork</h2>
          <h3 class="subtitle is-3">This is where you will manage your artwork for sale</h3>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <nuxt-link
          to="/admin/artwork/create"
          class="button is-primary"
        >
          Add New
        </nuxt-link>

        <table
          class="table is-fullwidth"
          v-if="artwork.length > 0"
        >
            <thead>
              <tr>
                <th>Title</th>
                <th>Price</th>
                <th>Sold?</th>
                <th style="width: 100px"></th>
              </tr>
            </thead>

            <tbody>
              <tr
                v-for="piece in artwork"
                :key="piece.id"
              >
                <td>{{ piece.title }}</td>
                <td>${{ piece.price }}</td>
                <td>{{ piece.is_sold ? '&#10004;' : '' }}</td>
                <td>
                  <nuxt-link
                    :to="`/admin/artwork/${piece.id}/edit`"
                    class="button is-light"
                  >
                    Edit
                  </nuxt-link>
                </td>
              </tr>
            </tbody>
          </table>

          <div v-else>
            <p>There is currently no artwork for sale</p>
          </div>
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
    axios
      .get(`${process.env.apiUrl}/artwork/admin/`, {
        headers: {
          Authorization: `JWT ${this.$store.state.auth.accessToken}`
        }
      })
      .then(response => {
        this.artwork = response.data
      })
  }
}
</script>
